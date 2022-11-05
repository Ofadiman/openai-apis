import { openai } from '../openai.js'

try {
  const response = await openai.createImage({
    prompt: 'pepe the frog',
    n: 1,
    size: '1024x1024',
    response_format: 'url',
  })

  if (response.data.data[0]) {
    console.log(response.data.data[0])
  }
} catch (error) {
  console.error(error)
}
