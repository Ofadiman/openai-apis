import { openai } from '../openai.js'
import { AxiosError } from 'axios'
import { appendFileSync } from 'fs'
import { snakeCase } from 'change-case'

const question = `Which Netflix series do you recommend?`

try {
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    max_tokens: 128,
    prompt: question,
    n: 10,
    user: 'ofadiman',
    temperature: 1,
  })

  response.data.choices.forEach((choice) => {
    if (typeof choice.text === 'string') {
      appendFileSync(`outputs/question_${snakeCase(question)}.txt`, choice.text)
    } else {
      console.log(`"choice.text" is not a string.`)
      console.log(choice)
    }
  })
} catch (error) {
  console.error(((error as AxiosError).response?.data as { error: unknown }).error)
}
