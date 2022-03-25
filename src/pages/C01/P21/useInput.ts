import React, { useCallback, useState } from "react";

const useInputs = <Type>(
  initialForm: Type
): [Type, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
};

export default useInputs;
