import Validators from "./Validators";

export default class Form {

  constructor(setter, values) {
    this.setter = setter;
    this.values = values;
  }

  setValues = (value) => {
    this.setter(value)
    this.values = value;
  }

  setValue = (key) => (e) => {
    this.setValues({
      ...this.values,
      [key]: {
        ...this.values[key],
        value: e.target.value,
      },
    })
  }

  getValue = (key) => {
    return this.values[key]?.value
  }

  getValues = () => {
    const values = Object.entries(this.values)
      .map(e => [e[0], e[1].value])

    return Object.fromEntries(values)
  }

  isValid = (key) => {
    return this.values[key]?.isValid ?? true
  }

  validateByKey = (validators, value) => {
    return validators
      .map(validator => validator(value))
      .every(v => v)
      ?? true
  }

  validate = () => {
    const formEntries = Object.entries(this.values)

    const newFormValues = formEntries
      .reduce((acc, formEntry) => {
        const formKey = formEntry[0]
        const formValue = this.values[formKey]
        const isValid = Validators
          .validate(formValue.validators, formValue.value)

        acc[formKey] = {
          ...this.values[formKey],
          isValid: isValid,
        }

        return acc
      }, {})

    this.setValues(newFormValues)
  }
}