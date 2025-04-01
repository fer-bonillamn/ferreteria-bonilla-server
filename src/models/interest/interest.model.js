import { DataTypes } from 'sequelize'

const InterestModel = (sequelize) => {
  sequelize.define(
    'Interest',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      BranchId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Branches',
          key: 'id',
        },
      },
    },
    { timestamps: false }
  )
}

export default InterestModel
