import React from "react";
import Form from "../lib/Form";

const useForm = (values) => {
  const [, setFormValues] = React.useState(values)
  const form = React.useRef(new Form(setFormValues, values))

  return form.current;
}

export default useForm