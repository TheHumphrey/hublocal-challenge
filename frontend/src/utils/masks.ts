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