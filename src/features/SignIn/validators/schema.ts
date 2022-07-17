import * as yup from 'yup'

const schema = () => {
  return yup.object({
    username: yup
      .string()
      .required('O campo de usuário precisa ser preenchido')
      .min(3, 'Precisa contém pelo o menos 3 caracteres'),
  })
}

export default schema
