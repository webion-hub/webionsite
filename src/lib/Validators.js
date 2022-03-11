export default class Validators {
  static validate(validators, value) {
    if (!validators)
      return true

    return validators
      .map(validator => validator(value))
      .every(v => v)
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
    return value.length < maxValue
  }

  static min = (minValue) => (value) => {
    return value.length > minValue
  }
}