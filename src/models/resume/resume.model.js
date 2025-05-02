import { DataTypes } from 'sequelize'

const ResumeModel = (sequelize) => {
  sequelize.define(
    'Resume',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUrl: true,
        },
      },

      parsedResume: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      publicId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
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

export default ResumeModel
