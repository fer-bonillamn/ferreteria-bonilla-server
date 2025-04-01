import { DataTypes } from 'sequelize'

const UserLanguageModel = (sequelize) => {
  sequelize.define(
    'UserLanguage',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      proficiencyLevel: {
        type: DataTypes.ENUM,
        values: ['Principiante', 'Intermedio', 'Avanzado', 'Nativo'],
        allowNull: true,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default UserLanguageModel
