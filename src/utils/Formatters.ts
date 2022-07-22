import moment from "moment";
import { isBoolean, isNumber, isNumericString, isObject, notEmptyString } from "./Validators";
import {getDefaultExtension} from './FileFormatter'

export const phone = (value: string) => {
  let masked = value;

  if (value.startsWith('+55')) {
    masked = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})(\d)/, '+$1 ($2) $3')
      .replace(/(\d{5})(\d{4})$/, '$1-$2')
      .replace(/(\d{4})(\d{4})/, '$1-$2')
  }

  return masked;
}

export const cnpj = (value: string) => {
  return value
    .replace(/\D/g, '')
    .substring(0, 14)
    .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, '$1.$2.$3/$4-$5')
}

export const cpf = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{3})(\d{3})?(\d{3})?(\d{2})?/, '$1.$2.$3-$4')
}

export const cep = (value: string) => {
  return value
    .replace(/\D/g, '')
    .substring(0, 8)
    .replace(/^(\d{5})(\d{3})/, '$1-$2')
}

/**
 *
 * @param value valor a ser formatado
 * @param format formato (moment)
 * @returns
 */
export const date = (value: string, format?: string):string => {
  if (format === undefined) format = 'YYYY/MM/DD HH:mm:ss'

  // const today = moment()
  const date = moment(value)

  // verificando se a data e valida
  if (!date.isValid()) return value

  return date.isValid() ? date.format(format) : value
}

interface TimeLabels {
  hour?: string,
  minute?: string,
  join?: string,
}

export const time = (value: number, labels?: TimeLabels):string => {
  const l:TimeLabels = {
    hour: 'h',
    minute: 'm',
    join: 'e',
  }

  if (labels) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    Object.keys(labels).forEach(key => l[key] = labels[key])
  }


  const hours = Math.floor(value / 60)
  const minutes = value % 60

  const result = []
  if (hours > 0) result.push(`${hours}${l.hour}`)
  result.push(`${minutes}${l.minute}`)

  return result.join(l.join)
}

export const simpleTime = (value:number) => {
  return [
    Math.floor(value/60),
    value % 60
  ]
    .map(num => num.toString().padStart(2, '0'))
    .join(':')
}

export const reverseSimpleTime = (value: string) => {
  const t = value.replace(/\D/g, '')

  if (t.length === 0) return 0

  const h = parseInt(t.substring(0, 2).padEnd(2, '0'))

  if (t.length < 3) return h * 60

  const m = parseInt(t.substring(2, 4).padEnd(2, '0'))

  return h * 60 + m
}

export const intToBool = (value: 1 | 0): boolean => {
  const values = {
    1: true,
    0: false,
  }

  return values[value]
}

export const boolToInt = (value: boolean): 1 | 0 => {
  const values = {
    true: 1,
    false: 0,
  }
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return values[value.toString()]
}

//@ts-ignore
export const numberOrDefault = <T = null>(value: any, defaultValue: T = null): number | T => {
  if (isNumber(value)) return value
  if (isNumericString(value)) return parseFloat(value)
  return defaultValue
}


//@ts-ignore
export const booleanOrDefault = <T = null>(value: any, defaultValue: T = null): boolean | T => {
  if (isBoolean(value)) return value

  if (isNumber(value)) return value > 0
  if (isNumericString(value)) return parseInt(value) > 0

  return defaultValue
}


//@ts-ignore
export const notEmptyStringOrDefault = <T = null>(value: any, defaultValue: T = null): string | T => {
  if (notEmptyString(value)) return value.trim()
  return defaultValue
}


//@ts-ignore
export const dateOrDefault = <T = null>(value: any, defaultValue: T = null, format?: string): string | T => {
  if (notEmptyString(value)) return date(value, format)
  return defaultValue
}

export const capitalize = (value: string): string => {
  return value.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ')
}

export const stripAccents = (value: string): string => {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const objectToFormData = (
  object: { [key: string | number]: any } | any[],
  formData: FormData = new FormData(),
  prefix = ''
  ): FormData => {
  const getFormDataKey = prefix
    ? (key: string | number): string => `${prefix}[${key}]`
    : (key: string | number): string => `${key}`

  Object.keys(object).forEach(key => {
    const formDatakey = getFormDataKey(key)
    //@ts-ignore
    const value = object[key]

    if (isObject(value) || Array.isArray(value)) {
      formData = objectToFormData(value, formData, formDatakey)
    }
    else {
      if (value instanceof File) {
        const filename = value.name.split('.')
        if (filename.length < 2) filename.push(getDefaultExtension(value.type))
        formData.append(formDatakey, value, filename.join('.'))
      }
      else {
        formData.append(formDatakey, value)
      }
    }
  })

  return formData
}

export const brRLFormat = (value: string) =>{
  return `R$ ${
   value.replace(/\D/g, "")
  .replace(/(\d)(\d{2})$/, "$1,$2")
  .replace(/(?=(\d{3})+(\D))\B/g, ".")}`;

 }

export const humanFileSize = (bytes: number): `${number} ${'B' | 'KB' | 'MB' | 'GB' | 'TB'}` => {
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Number((bytes / Math.pow(1024, index)).toFixed(2)) * 1} ${(['B', 'KB', 'MB', 'GB', 'TB'] as const)[index]}`;
};

