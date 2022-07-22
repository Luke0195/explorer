import { stripAccents } from "./Formatters";

export const notEmptyString = (value: any): value is string => {
    return typeof value === 'string' && value.trim() !== '';
}

export function isNumber(value: any): value is number {
    return typeof value === 'number'
}

export const isNumeric = (value: any): boolean => {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

//@ts-ignore
export const isObject = (value: any): value is Object => {
    return Object.prototype.toString.call(value) === '[object Object]';
}

export const isBoolean = (value: any): value is boolean => {
    return typeof value === "boolean"
}

export const isNumericString = (value: any): value is string => {
    return notEmptyString(value) && isNumeric(value)
}

export const isString = (value: any): boolean => {
    return typeof value === 'string'
}

export const isDateInstance = (value: any): boolean => {
    return value instanceof Date && !isNaN(value.valueOf())
}

export const isDate = (value: any): boolean => {
    return (isString(value) || isNumeric(value) || isDateInstance(value)) && isDateInstance(new Date(value))
}

export const strCmp = (
    x: string,
    y: string,
    options: {
        ignoreAccents?: boolean,
        ignoreCase?: boolean,
        trim?: boolean,
        contain?: boolean,
    } = {
    }
): boolean => {

    options = {
        ignoreAccents: true,
        ignoreCase: true,
        trim: true,
        contain: false,
        ...options,
    }

    if (options.trim) {
        x = x.trim()
        y = y.trim()
    }

    if (options.ignoreCase) {
        x = x.toUpperCase()
        y = y.toUpperCase()
    }

    if (options.ignoreAccents) {
        x = stripAccents(x)
        y = stripAccents(y)
    }

    return options.contain ? x.includes(y) : x === y
}

export const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  return emailRegex.test(value)
}
