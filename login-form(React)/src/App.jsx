import { useState } from 'react';
import "./App.css";

export default function App() {
  const [formType, setFormType] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");


  const loginHandler = (event) => {
    event.preventDefault();
    console.log(`You logged in as ${username} with password ${password}`);
  };

  const createUser = () => {
    console.log(`
      you signed in as ${username} width password : ${password} with email : ${email}
    `);
  };

  return (
    <div className="login-page">
      <div className="form">
        {formType === "login" ? (
          <form className="login-form" onSubmit={loginHandler}>
            <input
              value={username}
              type="text"
              placeholder="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              value={password}
              type="password"
              placeholder="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button type="submit">login</button>
            <p className="message" onClick={() => setFormType("register")}>
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        ) : (
          <form className="register-form">
            <input type="text" placeholder="name" onChange={(event) => {setUsername(event.target.value)}}/>
            <input type="password" placeholder="password" onChange={(event) => {setPassword(event.target.value)}} />
            <input type="text" placeholder="email address" onChange={(event) => {setEmail(event.target.value)}} />
            <button onClick={createUser}>create</button>
            <p className="message" onClick={() => setFormType("login")}>
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
