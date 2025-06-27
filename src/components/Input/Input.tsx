import React, { useState } from "react";
import { VscChromeClose, VscEye } from "react-icons/vsc";

 interface InputProps {
   type?: string;
   clearable?: boolean;
 };
 
 const InputComponent: React.FC<InputProps> = ({ type = 'text', clearable }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
   };

  const handleClear = () => {
    setValue('');
   };
   
  const isPassword = 'password';

  return (
    <div>
      <input
        type={type}
        placeholder="Type here..."
        value={value}
        onChange={handleChange} />
      {(
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{ display: isPassword ? 'inline' : 'none' }}
      >
          {showPassword ?
            "l":"X"}
      </button>
      )}
      {value.length > 0 && (
        <button onClick={handleClear}>X</button>
      )}
    </div>
  );
};
export default InputComponent;