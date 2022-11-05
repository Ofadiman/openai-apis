import { openai } from '../openai.js'
import { AxiosError } from 'axios'

try {
  const response = await openai.createImage({
    prompt:
      'Pepe the Frog, internet meme consisting of a green anthropomorphic frog with a humanoid body.',
    n: 5,
    size: '1024x1024',
  })

  response.data.data.forEach((value) => {
    console.log(value.url)
  })
} catch (error) {
  console.error(((error as AxiosError).response?.data as { error: unknown }).error)
}
