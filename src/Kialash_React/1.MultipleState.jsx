import React, { memo, useState } from "react";
import { returnFunction } from "./2.Return";

const useStyle = {
  wrapper: {
    border: "1px solid",
    display: "block",
  },
  inputs: {
    display: "block",
  },
};
function MultipleState() {
  const styles = useStyle;
  const [formdata, setFormData] = useState({
    Fullname: "",
    username: "",
    email: "",
    Passowrd: "",
    Age: "",
    PhoneNumber: "",
    gender: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    const value = e.target.value;
    setFormData({
      ...formdata,
      [e.target.name]: value,
    });
  };
  const handleSubmit = () => {
    console.log("formdata", formdata);
    const returnData = returnFunction(formdata);
    console.log("returnData", returnData);
  };
  return (
    <div style={styles.wrapper}>
      <div stle={styles.inputs}>
        <label htmlFor="">Full Name</label> <br />
        <input type="text" name="Fullname" id="" onChange={handleChange} />
      </div>
      <div stle={styles.inputs}>
        <label htmlFor="">Username</label> <br />
        <input type="text" name="username" id="" onChange={handleChange} />
      </div>
      <div stle={styles.inputs}>
        <label htmlFor="">Email</label> <br />
        <input type="text" name="email" id="" onChange={handleChange} />
      </div>
      <div stle={styles.inputs}>
        <label htmlFor="">Passowrd</label> <br />
        <input type="text" name="Passowrd" id="" onChange={handleChange} />
      </div>
      <div stle={styles.inputs}>
        <label htmlFor="">Age</label> <br />
        <input type="text" name="Age" id="" onChange={handleChange} />
      </div>
      <div stle={styles.inputs}>
        <label htmlFor="">Gender</label> <br />
        <input
          type="radio"
          name="gender"
          value="male"
          id=""
          onChange={handleChange}
        />
        <input
          type="radio"
          name="gender"
          value="female"
          id=""
          onChange={handleChange}
        />
        <input
          type="radio"
          name="gender"
          value="none"
          id=""
          onChange={handleChange}
        />
      </div>
      gender{" "}
      <div stle={styles.inputs}>
        <label htmlFor="">Phone Number</label> <br />
        <input type="text" name="PhoneNumber" id="" onChange={handleChange} />
      </div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default memo(MultipleState);
