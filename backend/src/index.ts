import { Hono } from 'hono'

const app = new Hono()

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Get Blog')
})

app.get('/api/v1/blog/bulk' , (c) => {
  return c.text('All the Blog')
})

app.post('/api/v1/user/signup' , (c) => {
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
