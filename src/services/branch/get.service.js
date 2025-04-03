import { Branch } from '../../database/database.js'

const getAllBranches = async () => {
  const branches = await Branch.findAll()
  return { code: 200, branches }
}

const getBranchById = async (id) => {
  const branch = await Branch.findByPk(id)
  return branch
    ? { code: 200, branch }
    : { code: 404, message: 'Sucursal no encontrada' }
}

export { getAllBranches, getBranchById }
