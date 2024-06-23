import { Hono } from "hono"

export const blogRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string
      JWT_SECRET : string,
    }
  }>() ;



  blogRouter.post('/' , (c) => {
    return c.text('Blog')
  })

  blogRouter.put('/' , (c) => {
    return c.text('Update Blog')
  })
  

  blogRouter.get('/bulk' , (c) => {
    return c.text('All the Blog')
  })

  blogRouter.get('/:id', (c) => {
    return c.text('Get Blog')
  })

