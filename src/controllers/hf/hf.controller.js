import { hfServices } from '../../services/index.services.js'

const evaluateApplicants = async (req, res) => {
  const { description, requirements, applicants } = req.body

  console.log(applicants)

  if (!description || !requirements || !Array.isArray(applicants)) {
    return res.status(400).json({ message: 'Faltan datos' })
  }

  try {
    const cvs = applicants.map((a) => a.cv)

    // Obtener similitud del CV con respecto a la descripción
    const descScores = await hfServices.getEmbedding(description, cvs)
    console.log(descScores)

    // Obtener similitud del CV con respecto a los requisitos
    const reqScores = await hfServices.getEmbedding(requirements, cvs)
    console.log(reqScores)

    const filtrados = applicants
      .map((applicant, index) => {
        const simDesc = descScores[index]
        const simReq = reqScores[index]
        const compat = (simDesc + simReq) * 100

        console.log('Compat', compat)

        return {
          id: applicant.id,
          compatibility: compat.toFixed(2),
          similitudeDescription: (simDesc * 100).toFixed(2),
          similitudeRequirements: (simReq * 100).toFixed(2),
        }
      })
      .filter((a) => a.compatibility >= 70)

    res.status(200).json({ filterApplicants: filtrados })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export default {
  evaluateApplicants,
}
