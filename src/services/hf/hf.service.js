import axios from 'axios'
import { HF_API_TOKEN } from '../../config/config.js'

const headers = {
  Authorization: `Bearer ${HF_API_TOKEN}`,
  'Content-Type': 'application/json',
}

const modelUrl =
  'https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/sentence-similarity'

const query = async (data) => {
  try {
    const response = await axios.post(modelUrl, data, { headers })
    return response.data
  } catch (error) {
    console.error('Error al obtener el resultado:', error)
    throw new Error('No se pudo obtener la comparación de las frases.')
  }
}

const getEmbedding = async (sourceSentence, sentences) => {
  const data = {
    inputs: {
      source_sentence: sourceSentence,
      sentences: sentences,
    },
  }

  const result = await query(data)
  return result
}

const cosineSimilarity = (vec1, vec2) => {
  let dot = 0
  let mag1 = 0
  let mag2 = 0

  for (let i = 0; i < vec1.length; i++) {
    dot += vec1[i] * vec2[i]
    mag1 += vec1[i] ** 2
    mag2 += vec2[i] ** 2
  }

  mag1 = Math.sqrt(mag1)
  mag2 = Math.sqrt(mag2)

  return dot / (mag1 * mag2)
}

export default {
  getEmbedding,
  cosineSimilarity,
}
