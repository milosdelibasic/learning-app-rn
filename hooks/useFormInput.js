import React, { useEffect, useState } from "react";
import validate from "../src/utils/validationWrapper";

function useFormInput(fieldName, initialValue) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleChange(text) {
    if (fieldName === "Email") {
      setValue(text.trim());
    } else {
      setValue(text);
    }
  }

  useEffect(() => {
    setError(validate(fieldName, value));
  }, [value]);

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  return {
    value,
    setValue,
    placeholder: fieldName,
    label: fieldName,
    onChangeText: handleChange,
    error,
  };
}

export default useFormInput;
