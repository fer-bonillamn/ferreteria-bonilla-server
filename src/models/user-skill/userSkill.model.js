import { DataTypes } from 'sequelize'

const UserSkillModel = (sequelize) => {
  sequelize.define(
    'UserSkill',
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
          model: 'Users', // Nombre de la tabla de usuarios
          key: 'id',
        },
      },
      skill: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      proficiencyLevel: {
        type: DataTypes.ENUM(
          'Principiante',
          'Intermedio',
          'Avanzado',
          'Experto'
        ),
        allowNull: true, // Nivel de habilidad (opcional)
      },
    },
    { timestamps: false }
  )
}

export default UserSkillModel
