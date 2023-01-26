export function cnpjMask(value: string) {
  try {
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d)/, "$1.$2")
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2")
    value = value.replace(/(\d{4})(\d)/, "$1-$2")
    return value
  } catch (err) {
    console.warn(err)
    return ''
  }
}

export function cpfMask(value: string) {
  try {
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    return value
  } catch (err) {
    console.warn(err)
    return ''
  }
}

export function cepMask(value: string) {
  try {
    if (value.length <= 5) return value

    const valueMasked = value.replaceAll('-', '').substring(0, 5) + '-' + value.replaceAll('-', '').substring(5)
    return valueMasked
  } catch (err) {
    console.warn(err)
    return ''
  }
}

export function validateOnlyNumber(value: string) {
  return value.replaceAll(/[^0-9.]/g, '')
}