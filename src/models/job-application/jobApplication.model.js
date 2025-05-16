import { DataTypes } from 'sequelize'

const JobApplicationModel = (sequelize) => {
  sequelize.define(
    'JobApplication',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false, // El usuario que aplica para el puesto
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      JobOfferId: {
        type: DataTypes.UUID,
        allowNull: false, // La oferta de trabajo a la que el usuario aplica
        references: {
          model: 'JobOffers', // Se asume que la tabla de ofertas se llama "JobOffers"
          key: 'id',
        },
      },

      status: {
        type: DataTypes.ENUM('Pendiente', 'Aceptada', 'Rechazada'),
        defaultValue: 'Pendiente', // Estado de la aplicación
      },

      coverLetter: {
        type: DataTypes.TEXT,
        allowNull: true, // Carta de presentación opcional
      },

      observations: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      appliedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Fecha de la aplicación
      },
    },
    { timestamps: false }
  )
}

export default JobApplicationModel
