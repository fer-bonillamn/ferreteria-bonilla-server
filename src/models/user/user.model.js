import { DataTypes } from 'sequelize'
import { positions } from '../../data/seed.data.js'

const UserModel = (sequelize) => {
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dni: {
        type: DataTypes.STRING,
        validate: {
          len: [10, 10],
        },
      },
      phone: {
        type: DataTypes.STRING,
        len: [10, 10],
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 100],
            msg: 'Debe tener entre 6 y 50 caracteres.',
          },
        },
      },

      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },

      gender: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ['Femenino', 'Masculino', 'Otro'],
      },

      role: {
        type: DataTypes.ENUM,
        values: positions,
        defaultValue: 'Candidato',
      },

      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      isDataValidated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      sub: {
        type: DataTypes.STRING,
      },

      residence: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default UserModel
