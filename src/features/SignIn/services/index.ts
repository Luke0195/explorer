import axios from '../../../services/config'

export const verifyIfUserExists = async (user: string): Promise<any> => {
  const response = await axios.get(`/users/${user}`)
  if (response.status !== 200) throw new Error('Invalid user name')
  return response.data
}
