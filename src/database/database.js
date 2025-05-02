import { Sequelize } from 'sequelize'
import { LOCAL_DATABASE_URI } from '../config/config.js'
import { models } from '../models/index.model.js'

const sequelize = new Sequelize(LOCAL_DATABASE_URI, {
  native: false,
  logging: false,
})

models.forEach((model) => model(sequelize))

const {
  About,
  User,
  Branch,
  Position,
  Code,
  Employee,
  Interest,
  JobOffer,
  JobApplication,
  Message,
  Notification,
  Resume,
  UserCertification,
  UserEducation,
  UserExperience,
  UserLanguage,
  UserReference,
  UserSkill,
} = sequelize.models

User.hasOne(About, { foreignKey: 'UserId' })
About.belongsTo(User, { foreignKey: 'UserId' })

// Relaciones
User.hasMany(Code, { foreignKey: 'UserId' })
Code.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Employee, { foreignKey: 'UserId' })
Employee.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Interest, { foreignKey: 'UserId' })
Interest.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(JobApplication, { foreignKey: 'UserId' })
JobApplication.belongsTo(User, { foreignKey: 'UserId' })

Message.belongsTo(User, { as: 'Sender', foreignKey: 'SenderId' })
Message.belongsTo(User, { as: 'Receiver', foreignKey: 'ReceiverId' })

User.hasMany(Message, { as: 'SentMessages', foreignKey: 'SenderId' })
User.hasMany(Message, { as: 'ReceivedMessages', foreignKey: 'ReceiverId' })

User.hasMany(Notification, { foreignKey: 'UserId' })
Notification.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Resume, { foreignKey: 'UserId' })
Resume.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(UserCertification, { foreignKey: 'UserId' })
UserCertification.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(UserEducation, { foreignKey: 'UserId' })
UserEducation.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(UserExperience, { foreignKey: 'UserId' })
UserExperience.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(UserLanguage, { foreignKey: 'UserId' })
UserLanguage.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(UserReference, { foreignKey: 'UserId' })
UserReference.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(UserSkill, { foreignKey: 'UserId' })
UserSkill.belongsTo(User, { foreignKey: 'UserId' })

Branch.hasMany(Interest, { foreignKey: 'BranchId' })
Interest.belongsTo(Branch, { foreignKey: 'BranchId' })

Branch.hasMany(JobOffer, { foreignKey: 'BranchId' })
JobOffer.belongsTo(Branch, { foreignKey: 'BranchId' })

Branch.hasMany(Notification, { foreignKey: 'BranchId' })
Notification.belongsTo(Branch, { foreignKey: 'BranchId' })

Branch.hasMany(Employee, { foreignKey: 'BranchId' })
Employee.belongsTo(Branch, { foreignKey: 'BranchId' })

JobOffer.hasMany(JobApplication, { foreignKey: 'JobOfferId' })
JobApplication.belongsTo(JobOffer, { foreignKey: 'JobOfferId' })

export {
  sequelize,
  About,
  Position,
  User,
  Branch,
  Code,
  Employee,
  Interest,
  JobOffer,
  JobApplication,
  Message,
  Notification,
  Resume,
  UserCertification,
  UserEducation,
  UserExperience,
  UserLanguage,
  UserReference,
  UserSkill,
}
