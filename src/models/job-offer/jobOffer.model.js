import { DataTypes } from 'sequelize'
import { positions } from '../../data/seed.data.js'

const JobOfferModel = (sequelize) => {
  sequelize.define(
    'JobOffer',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false, // Título de la oferta laboral
      },

      charge: {
        type: DataTypes.ENUM,
        values: positions,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false, // Descripción de la oferta laboral
      },

      requirements: {
        type: DataTypes.TEXT,
        allowNull: true, // Requisitos específicos para el trabajo
      },

      type: {
        type: DataTypes.ENUM,
        values: ['Remoto', 'Presencial', 'Hibrido'],
        allowNull: false,
      },

      contractType: {
        type: DataTypes.ENUM,
        values: ['Tiempo completo', 'Tiempo parcial', 'Contrato'],
        allowNull: false,
      },

      salary: {
        type: DataTypes.STRING,
        allowNull: true, // Salario de la oferta (puede ser opcional)
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // Si la oferta está activa o no
      },

      BranchId: {
        type: DataTypes.UUID,
        allowNull: false, // La sucursal que emite la oferta
        references: {
          model: 'Branches', // Referencia a la tabla de sucursales
          key: 'id',
        },
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Fecha de creación de la oferta
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true, // Fecha de última actualización de la oferta
      },

      expirationDate: {
        type: DataTypes.DATE,
        allowNull: true, // Fecha en que la oferta expira (opcional)
      },
    },
    { timestamps: false }
  )
}

export default JobOfferModel
