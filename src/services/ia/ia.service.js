import { OPENAI_API_KEY } from '../../config/config.js'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
})

async function evaluateApplicants({ description, requeriments, applicants }) {
  const prompt = `
    Tengo una oferta de empleo:
    Descripción: ${description}
    Requerimientos: ${requeriments}

    Evalúa los siguientes postulantes. Devuélveme los resultados en formato JSON con este formato:
[
  {
    "id": "ID_DEL_POSTULANTE",
    "compatible": true/false,
    "porcentaje": 0-100,
    "opinion": "Texto corto explicando si cumple o no."
  }
]
  
Postulantes:
${JSON.stringify(applicants, null, 2)}
  
    `

  const chat = await openai.chat.completions.create({
    model: 'gpt-4.1',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
  })

  const response = chat.choices[0].message.content

  try {
    return { code: 200, responses: JSON.parse(response) }
  } catch (error) {
    return {
      code: 400,
      message: 'Error al interpretar la respuesta',
      raw: response,
    }
  }
}

export default {
  evaluateApplicants,
}
