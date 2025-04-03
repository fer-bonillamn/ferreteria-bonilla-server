import { Branch } from '../../database/database.js'

const updateBranch = async (id, data) => {
  const branch = await Branch.findByPk(id)
  if (branch) {
    await branch.update(data)
    return { code: 200, message: 'Sucursal actualizada' }
  } else {
    return { code: 404, message: 'Sucursal no encontrada' }
  }
}

export { updateBranch }
