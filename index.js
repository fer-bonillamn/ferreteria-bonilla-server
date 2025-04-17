import app from './src/app.js'
import { PORT } from './src/config/config.js'
import { sequelize } from './src/database/database.js'
import { loadData } from './src/scripts/seeds.scripts.js'

sequelize
  .sync({
    logging: false,
    force: false,
    alter: true,
  })
  .then(() => {
    console.log('Database connected')
    app.listen(PORT, () => {
      console.log(`Server listening by port ${PORT}`)
    })

    loadData()
  })
  .catch((err) => {
    console.log(err)
  })
