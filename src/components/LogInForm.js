import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function LogInForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  console.log("🚀 ~ file: logInForm.js ~ line 13 ~ LogInForm ~ form", form);

  const [emailValidate, setEmailValidate] = useState(false);
  console.log(
    "🚀 ~ file: logInForm.js ~ line 15 ~ LogInForm ~ emailValidate",
    emailValidate
  );

  const Root = styled("div")(({ theme }) => ({
    "& .content": {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      border: "1px #000 solid",
      alignSelf: "center",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
    },

    "& .textField-box": {
      display: "flex",
      flexDirection: "column",
      width: "70%",
      margin: 40,
    },
    "& .textFields": {
      marginBottom: 20,
      backgroundColor: "white",
    },
  }));
  const onChangeEmail = async (event) => {
    const caracteres =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const t = event.currentTarget.value.split(" ");
    let text = "";
    t.map((r) => {
      if (r !== "") {
        text += r;
      }
    });
    setForm({ ...form, email: text.toLowerCase() });
    if (text !== "") {
      if (caracteres.test(text)) {
        setEmailValidate(false);
      } else {
        setEmailValidate(true);
      }
    } else {
      setEmailValidate(true);
    }
  };
  const changeNumber = (prop) => (event) => {
    console.log(
      "🚀 ~ file: logInForm.js ~ line 69 ~ changeNumber ~ prop",
      prop
    );
    const re = /^[0-9\b]+$/;
    console.log("🚀 ~ file: logInForm.js ~ line 69 ~ changeNumber ~ re", re);
    if (event.target.value.length === 0 || re.test(event.target.value)) {
      setForm({ ...form, [prop]: event.target.value });
    }
  };
  const changeNumberTest = (prop) => (event) => {
    console.log(
      "🚀 ~ file: logInForm.js ~ line 69 ~ changeNumber ~ prop",
      prop
    );
    setForm({ ...form, [prop]: event.target.value });
  };
  return (
    <Root>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 70 }}>
        <div className="content">
          <div className="textField-box">
            <TextField
              className="textFields"
              label="Name"
              variant="outlined"
              onChange={changeNumberTest("name")}
              value={form.name}
            />
            <TextField
              className="textFields"
              label="Last Name"
              variant="outlined"
              onChange={changeNumberTest("lastName")}
              value={form.lastName}
            />
            <TextField
              onChange={changeNumberTest("phoneNumber")}
              inputProps={{ maxLength: 12 }}
              className="textFields"
              label="Phone number"
              variant="outlined"
              value={form.phoneNumber}
            />
            <TextField
              onChange={changeNumberTest("email")}
              value={form.email}
              type="email"
              className="textFields"
              label="Email"
              variant="outlined"
            />
            <Button variant="contained">Send</Button>
          </div>
        </div>
      </div>
    </Root>
  );
}
