import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/api/user", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/board/home", { state: { password, email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Login</h1>

      <form action="POST" className=" flex flex-col gap-4 p-6">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />

        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
};

export default Login;
