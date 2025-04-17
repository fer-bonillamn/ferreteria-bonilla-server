import { DataTypes } from 'sequelize'

const CodeModel = (sequelize) => {
  sequelize.define(
    'Code',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      type: {
        type: DataTypes.ENUM('Activación', 'Recuperación'),
        allowNull: false,
      },

      expirationTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      isValid: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    { timestamps: false }
  )
}

export default CodeModel
