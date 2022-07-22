import axios from '../../../services/config'


export const getUserInfo = async(userName: string):Promise<any> =>{
  const response = await axios.get(`/users/${userName}`);

  if(response.status !== 200) throw new Error('Invalid Request')

  return response.data;
}
