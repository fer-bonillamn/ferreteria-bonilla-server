import randomstring from 'randomstring'

const createCode = async () => {
  const code = randomstring.generate({
    charset: 'numeric',
    length: 6,
  })
  return code
}

export default { createCode }


