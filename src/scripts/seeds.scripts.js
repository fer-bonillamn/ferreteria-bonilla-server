import { positions } from '../data/seed.data.js'
import { Position } from '../database/database.js'

const loadData = async () => {
  const positionsDB = await Position.findAll({})

  if (positionsDB.length === 0) {
    const positionsMap = positions.map((pos) => ({
      name: pos,
    }))

    await Position.bulkCreate(positionsMap)
  }
}

export { loadData }
