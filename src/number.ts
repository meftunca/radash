export const toFloat = <T extends number | null = number>(
  value: any,
  defaultValue?: T
): number | T => {
  const def = defaultValue === undefined ? 0.0 : defaultValue
  if (value === null || value === undefined) {
    return def
  }
  const result = parseFloat(value)
  return isNaN(result) ? def : result
}

export const toInt = <T extends number | null = number>(
  value: any,
  defaultValue?: T,
  radix?: number
): number | T => {
  const def = defaultValue === undefined ? 0 : defaultValue
  if (value === null || value === undefined) {
    return def
  }
  const result = parseInt(value, radix)
  return isNaN(result) ? def : result
}

export const toRadix = (value: number, radix: number): string => {
  return value.toString(radix)
}

export const toHex = (value: number): string => {
  return toRadix(value, 16)
}

export const toBinary = (value: number): string => {
  return toRadix(value, 2)
}

export const toOctal = (value: number): string => {
  return toRadix(value, 8)
}

export const toFixed = (
  value: number,
  digits: number,
  ratio?: number
): string => {
  return !!ratio && value % 0.1 < ratio
    ? value.toFixed(0)
    : value.toFixed(digits)
}

export const toPrecision = (value: number, precision: number): string => {
  return value.toPrecision(precision)
}

export const toRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const toRandomFloat = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}
