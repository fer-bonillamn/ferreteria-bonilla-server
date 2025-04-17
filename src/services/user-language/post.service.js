import { UserLanguage } from '../../database/database.js'

const saveUserLanguage = async (data) => {
  const { UserId, language } = data

  const userLanguageExists = await UserLanguage.findOne({
    where: {
      UserId: UserId,
      language: language,
    },
  })

  if (userLanguageExists)
    return { code: 400, message: 'El idioma ya ha sido agregado' }

  const newUserLanguage = await UserLanguage.create(data)
  return newUserLanguage
    ? { code: 201, message: 'Idioma agregado' }
    : { code: 400, message: 'Error al agregar el idioma' }
}

export { saveUserLanguage }
