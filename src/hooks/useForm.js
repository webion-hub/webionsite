import React from "react";
import Form from "../lib/Form";

const useForm = () => {
  const [, setFormValues] = React.useState({})
  const form = React.useRef(new Form(setFormValues))

  return form.current;
}

export default useForm