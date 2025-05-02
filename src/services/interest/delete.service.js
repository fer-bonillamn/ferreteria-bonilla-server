import { Interest } from '../../database/database.js'

const deleteInterest = async (id) => {
  const interest = await Interest.findOne({
    where: {
      id,
    },
  })
  if (!interest) return { code: 400, message: 'No sigues a esta sucursal' }
  await Interest.destroy({
    where: {
      id,
    },
  })
  return { code: 200, message: 'Ahora no sigues a esta sucursal' }
}

export { deleteInterest }
