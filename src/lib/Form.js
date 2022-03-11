import Validators from "./Validators";

export default class Form {

  constructor(setter) {
    this.setter = setter;
    this.values = {}
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

  getValues = () => this.values

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