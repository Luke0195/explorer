import { createContext } from 'react'
import { UseFormReturn, SetValueConfig } from 'react-hook-form'

/*interface ContextForm extends UseFormMethods<Form> {
  setValueOptions: SetValueConfig,
}

interface ContextInterface {
  form: ContextForm,
  data: Data,
}
// se for utilizar uma versão mais antiga do react-hook-form
*/

type ContextForm = UseFormReturn
interface SignInContextProps {
  form: ContextForm
}

const SignInContext = createContext({} as SignInContextProps)

export default SignInContext
