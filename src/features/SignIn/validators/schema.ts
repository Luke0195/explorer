import * as yup from 'yup'

const schema = () => {
  return yup.object({
    username: yup.string().required(),
  })
}

export default schema
