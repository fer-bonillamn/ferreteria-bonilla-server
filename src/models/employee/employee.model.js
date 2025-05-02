import { DataTypes } from 'sequelize'
import { positions } from '../../data/seed.data.js'

const EmployeeModel = (sequelize) => {
  sequelize.define(
    'Employee',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      BranchId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Branches',
          key: 'id',
        },
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      jobTitle: {
        type: DataTypes.ENUM,
        values: positions,
        allowNull: false, // Puesto de trabajo del empleado (ej. "Desarrollador Backend")
      },

      hireDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Asigna la fecha y hora actual automáticamente
      },

      endDate: {
        type: DataTypes.DATE,
        allowNull: true, // Fecha de finalización (opcional, puede ser null si el empleado está activo)
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // Indica si el empleado está activo en la empresa
      },
    },
    { timestamps: false }
  )
}

export default EmployeeModel
