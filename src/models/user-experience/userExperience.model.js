import { DataTypes } from 'sequelize'

const UserExperienceModel = (sequelize) => {
  sequelize.define(
    'UserExperience',
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
          model: 'Users', // Referencia a la tabla de usuarios
          key: 'id',
        },
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false, // El título del puesto (ej. "Desarrollador de Software")
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false, // Nombre de la empresa
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false, // Fecha de inicio en ese puesto
      },
      endDate: {
        type: DataTypes.STRING,
        allowNull: true, // Fecha de fin en ese puesto (opcional, puede estar en null si es actual)
      },
      isCurrentJob: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Indica si el puesto es el actual del usuario
      },
      responsibilities: {
        type: DataTypes.TEXT,
        allowNull: true, // Descripción de las responsabilidades y tareas desempeñadas
      },
    },
    { timestamps: false }
  )
}

export default UserExperienceModel
