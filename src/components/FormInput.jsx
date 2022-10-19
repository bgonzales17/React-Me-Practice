import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput"> 
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

// const handleChange = event => {
//   const target = event.target
//   const name = target.name
//   const value = target.value
//   setfromData({
//       ...formData,
//       [name] : value
//   })
// }
// return (
//   <form>
//     <div>
//       <label>Male:</label><input type="radio" name="gender" value="male"/> 
//       <label>Female</label><input type="radio" name="gender" value="female"/>  
//     </div>
//   </form>
// );

export default FormInput;
