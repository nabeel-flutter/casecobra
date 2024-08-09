
import { createRouteHandler } from 'uploadthing/next'
import { ourFileRouter } from './code'


export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
})
