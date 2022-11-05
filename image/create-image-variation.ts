import { openai } from '../openai.js'
import { createReadStream } from 'node:fs'
import { AxiosError } from 'axios'

try {
  const response = await openai.createImageVariation(
    createReadStream('assets/pepe_sad.png') as unknown as File,
    1,
    '1024x1024',
  )

  response.data.data.forEach((value) => {
    console.log(value.url)
  })
} catch (error) {
  console.error(((error as AxiosError).response?.data as { error: unknown }).error)
}
