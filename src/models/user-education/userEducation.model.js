import { DataTypes } from 'sequelize'

const UserEducationModel = (sequelize) => {
  sequelize.define(
    'UserEducation',
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
      institution: {
        type: DataTypes.STRING,
        allowNull: false, // Nombre de la institución educativa
      },
      degree: {
        type: DataTypes.STRING,
        allowNull: false, // Título o grado obtenido
      },
      fieldOfStudy: {
        type: DataTypes.STRING,
        allowNull: true, // Campo de estudio (opcional)
      },
      startYear: {
        type: DataTypes.INTEGER,
        allowNull: false, // Año de inicio de los estudios
      },
      endYear: {
        type: DataTypes.INTEGER,
        allowNull: true, // Año de finalización (opcional, puede estar vacío si aún está en curso)
      },
      isCurrent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Indica si la educación es actual (si está en curso)
      },
    },
    { timestamps: false }
  )
}

export default UserEducationModel
