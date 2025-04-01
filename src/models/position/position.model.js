import { DataTypes } from 'sequelize'

const PositionModel = (sequelize) => {
  sequelize.define(
    'Position',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  )
}

export default PositionModel
