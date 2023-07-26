import { useState } from "react";

function SignIn() {
  //states
  // const [ contact, setContact ] = useState({
  //     name : '',
  //     email : '',
  //     phoneNumber : '',
  // });

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const nameChangeHandler = (e) => {
    // setContact({...contact, [e.target.name] : e.target.value });
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  //validation

  const submitHandler = (e) => {
    e.preventDefault();

    //name validation
    if (!name) {
      setNameError("username required");
    } else if (!/^[A-Za-z]+$/.test(name)) {
      setNameError("just alphabets");
    } else {
      setNameError("");
    }

    //email validation
    if (email.length === 0) {
      setEmailError("email required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("email format is invalid");
    } else {
      setEmailError("");
    }

    //phone number validation
    if (phone.length === 0) {
      setPhoneError("phone required");
    } else if (!/^[0-9]+$/.test(phone)) {
      setPhoneError("just numbers");
    } else {
      setPhoneError(false);
    }

    if (
      !nameError.length === 0 &&
      !emailError.length === 0 &&
      !phoneError.length === 0
    ) {
      console.log({ name: name, email: email, phone: phone });
    }
  };

  return (
    <div className="">
      <p className="text-center ms-6">Sign In</p>
      <form onSubmit={submitHandler} className="">
        <div className="mt-5">
          <label className="text-sm">name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
            className={`${
              nameError
                ? "border-red-500 border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
          {nameError && (
            <span className="text-red-500 text-lg ms-14">{nameError}</span>
          )}
        </div>

        <div className="mt-6">
          <label className="text-sm">email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={emailChangeHandler}
            className={`${
              emailError
                ? "border-red-500 border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
          {emailError && (
            <span className="text-red-500 text-lg ms-14">{emailError}</span>
          )}
        </div>
        <div className="mt-6">
          <label className="text-sm">phone</label>
          <input
            type="text"
            name="phoneNumber"
            value={phone}
            onChange={phoneChangeHandler}
            className={`${
              phoneError
                ? "border-red-500 border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-3"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-3"
            }`}
          />
          <br></br>
          {phoneError && (
            <span className="text-red-500 text-lg ms-14">{phoneError}</span>
          )}
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-transparent text-black-700  py-2 px-6 border  text-xs mt-4 ms-32"
          >
            Contact US
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
