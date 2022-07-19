import axios from '../../../services/config'

export const getUserData = async (user: string): Promise<any> => {
  const data = await axios.get(`/users/${user}`)
  if (data.status !== 200) throw new Error('Invalid Request')
  return data
}

export const getRepository = async( userRepository:string):Promise<any> =>{
  const data = await axios.get(`/repos/${userRepository}`);
  if(data.status !== 200) throw new Error('Invalid Request');
  return data;
}
