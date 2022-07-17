import * as yup from 'yup'

const schema = () => {
  return yup.object({
    username: yup
      .string()
      .required('O campo de usuário precisa ser preenchido'),
  })
}

export default schema
