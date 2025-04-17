import { DataTypes } from 'sequelize'

const UserReferenceModel = (sequelize) => {
  sequelize.define(
    'UserReference',
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

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      relationship: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  )
}

export default UserReferenceModel
