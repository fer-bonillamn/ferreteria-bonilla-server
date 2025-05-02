import { DataTypes } from 'sequelize'
import { cities, provinces } from '../../data/seed.data.js'

const BranchModel = (sequelize) => {
  sequelize.define(
    'Branch',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      province: {
        type: DataTypes.ENUM,
        values: provinces,
        allowNull: false,
      },

      city: {
        type: DataTypes.ENUM,
        values: cities,
        allowNull: false,
      },

      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      isMain: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default BranchModel
