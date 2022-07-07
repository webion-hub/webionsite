export default class Validators {
  static validate(validators, value) {
    return validators
      ?.map(validator => validator(value))
      ?.every(v => v)
      ?? true
  }

  static required(value) {
    return Boolean(value)
  }

  static isAnEmail(email) {
    if (!email)
      return true

    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  static isATelephoneNumber(telephoneNumber) {
    if (!telephoneNumber)
      return true

    return telephoneNumber
      .toLowerCase()
      .match(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
      )
  }

  static max = (maxValue) => (value) => {
    if (!value)
      return true
      
    return value.length < maxValue
  }

  static min = (minValue) => (value) => {
    if (!value)
      return true

    return value.length > minValue
  }
}