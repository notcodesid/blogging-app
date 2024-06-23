import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
	JWT_SECRET : string,
  }
}>()

app.get("/" , (c) => {
	return c.text("Hello Hono")
})

app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    console.log('Received body:', body);
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
    console.log(e)
	console.error('Error during signup:', e);
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})


app.get('/api/v1/blog/:id', (c) => {
  return c.text('Get Blog')
})

app.get('/api/v1/blog/bulk' , (c) => {
  return c.text('All the Blog')
})

app.post('/api/v1/user/signin' , (c) => {
  return c.text('Sign up')
})

app.post('/api/v1/user/signin' , (c) => {
  return c.text('Sign in')
})

app.post('/api/v1/blog' , (c) => {
  return c.text('Blog')
})

app.put('/api/v1/blog' , (c) => {
  return c.text('Update Blog')
})



export default app
