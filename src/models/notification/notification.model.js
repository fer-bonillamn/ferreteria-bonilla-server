import { DataTypes } from 'sequelize'

const NotificationModel = (sequelize) => {
  sequelize.define(
    'Notification',
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
          model: 'Users',
          key: 'id',
        },
      },

      BranchId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Branches',
          key: 'id',
        },
      },

      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      notificationType: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Branch', 'Offer', 'Account'],
      },

      isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  )
}

export default NotificationModel
