import { Branch } from '../../database/database.js'

const deleteBranch = async (id) => {
  const branch = await Branch.findByPk(id)
  if (branch) {
    await branch.destroy()
    return { code: 200, message: 'Sucursal eliminada' }
  } else {
    return { code: 404, message: 'Sucursal no encontrada' }
  }
}

export { deleteBranch }
