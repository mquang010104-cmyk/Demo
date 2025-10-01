import { useState, useCallback } from "react";

/**
 * Custom hook quản lý state form đơn giản.
 * @param {Function} getInitialValues - hàm trả về object initial values
 */
export default function useForm(getInitialValues) {
  const [values, setValues] = useState(() => getInitialValues?.() || {});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setValues(getInitialValues?.() || {});
    localStorage.removeItem("formDemo");
  }, [getInitialValues]);

  return { values, setValues, handleChange, reset };
}
