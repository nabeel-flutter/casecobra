import { OurFileRouter } from '@/app/api/uploadthing/code'
import { generateReactHelpers } from '@uploadthing/react'

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>()