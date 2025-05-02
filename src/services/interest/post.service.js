import { Interest } from '../../database/database.js'

const createInterest = async (UserId, BranchId) => {
  const existInterest = await Interest.findOne({
    where: {
      UserId,
      BranchId,
    },
  })
  if (existInterest) return { code: 400, message: 'Ya sigues a esta sucursal' }
  const newInterest = await Interest.create({
    UserId,
    BranchId,
  })
  return newInterest
    ? { code: 201, message: 'Ahora sigues a esta sucursal' }
    : { code: 400, message: 'Error al seguir a la sucursal' }
}

export { createInterest }
