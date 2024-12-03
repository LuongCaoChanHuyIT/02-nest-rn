import bcrypt from 'bcrypt'
const saltRounds = 100

export const hashPasswordHelper = async (plainPassword: string) => {
  try {
    return await bcrypt.hash(plainPassword, saltRounds)
  } catch(e) {
    console.log(e)
  }
}