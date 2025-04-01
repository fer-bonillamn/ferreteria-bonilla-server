import { DataTypes } from 'sequelize'

const UserCertificationModel = (sequelize) => {
  sequelize.define(
    'UserCertification',
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
      certificationName: {
        type: DataTypes.STRING,
        allowNull: false, // Nombre de la certificación
      },
      institution: {
        type: DataTypes.STRING,
        allowNull: false, // Institución que otorgó la certificación
      },
      issueDate: {
        type: DataTypes.DATE,
        allowNull: false, // Fecha de obtención de la certificación
      },
      expirationDate: {
        type: DataTypes.DATE,
        allowNull: true, // Fecha de expiración de la certificación (opcional)
      },
      certificationUrl: {
        type: DataTypes.STRING,
        allowNull: true, // URL para verificar la certificación (opcional)
      },
    },
    { timestamps: false }
  )
}

export default UserCertificationModel
