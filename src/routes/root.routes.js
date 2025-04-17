import { Router } from 'express'
import authRouter from './auth/auth.route.js'
import codeRouter from './code/code.route.js'
import interestRouter from './interest/interest.route.js'
import jobOfferRouter from './job-offer/jobOffer.route.js'
import jobApplicationRouter from './job-application/jobApplication.route.js'

import messageRouter from './message/message.route.js'
import notificationRouter from './notification/notification.route.js'
import userRouter from './user/user.routes.js'
import branchRouter from './branch/branch.route.js'
import resumeRouter from './resume/resume.route.js'
import userSkillRouter from './user-skill/userSkill.route.js'
import userEducationRouter from './user-education/userEducation.route.js'
import userExperienceRouter from './user-experience/userExperience.route.js'
import userLanguageRouter from './user-language/userLanguage.route.js'
import userReferenceRouter from './user-reference/userReference.route.js'
const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/branches', branchRouter)
rootRouter.use('/codes', codeRouter)
rootRouter.use('/interests', interestRouter)
rootRouter.use('/job-offers', jobOfferRouter)
rootRouter.use('/job-applications', jobApplicationRouter)
rootRouter.use('/messages', messageRouter)
rootRouter.use('/notifications', notificationRouter)
rootRouter.use('/resumes', resumeRouter)
rootRouter.use('/user-skills', userSkillRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/user-educations', userEducationRouter)
rootRouter.use('/user-experiences', userExperienceRouter)
rootRouter.use('/user-languages', userLanguageRouter)
rootRouter.use('/user-references', userReferenceRouter)
export default rootRouter
