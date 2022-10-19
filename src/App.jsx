import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    birthday: "",
    address: "",
    // gender: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Fullname",
      errorMessage:
        "Username should be 5-20 characters and shouldn't include any special character!",
      label: "Fullname",
      pattern: "^[A-Za-z0-9]{5,20}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "number",
      placeholder: "0000-0000-000",
      errorMessage: "Please enter a valid phone number",
      label: "Mobile Number",
      pattern: "^[0-9]{4}-[0-9]{4}-[0-9]{3}",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "Please enter your birthday",
      label: "Date of Birth",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage:
        "Please state your address",
      label: "Address",
      pattern: "^[A-Za-z0-9]{1,60}$",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    // {
    //   id: 8,
    //   label: "Gender",
    //   type: "Select",
    // }
  ];
  const [gender,setGender]=useState('');

   const handleChange=(e)=>{
       setGender( e.target.value);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
          
          <p>Gender</p>
          <input type="radio" value="male" id="male"
          onChange={handleChange} name="gender" />
          <label for="male">Male</label>
          
          <input type="radio" value="female" id="female"
          onChange={handleChange} name="gender"/>
          <label for="female">Female</label>
         <p>You gender is {gender}</p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
