import { DataTypes } from 'sequelize'

const AboutModel = (sequelize) => {
  sequelize.define(
    'About',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      text: {
        type: DataTypes.TEXT,
        allowNull: false,
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

export default AboutModel
