import { openai } from '../openai.js'
import { createReadStream } from 'node:fs'
import { AxiosError } from 'axios'

try {
  const response = await openai.createImageEdit(
    createReadStream('assets/bamboo_forest.png') as unknown as File,
    createReadStream('assets/bamboo_forest_mask.png') as unknown as File,
    'A bamboo forest with 3 tigers',
    5,
    '1024x1024',
  )

  response.data.data.forEach((value) => {
    console.log(value.url)
  })
} catch (error) {
  console.error(((error as AxiosError).response?.data as { error: unknown }).error)
}
