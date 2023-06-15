import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // hello testing
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log("data sent");
      // const data = await response.json();

      if (response.ok) {
        // redirect to a new page or perform other action
        navigate("/dashboard");
        toast.success("Logged in successfully!");
      } else {
        // setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // setErrorMessage("An unexpected error occurred.");
      toast.error("something went wrong");
    }
  };

  return (
    <div className="loginPageHolder">
      <div className="formDataWrapperDiv">
        <p className="loginHeadingtxt">Login Page</p>

        <form onSubmit={handleSubmit} className="formDataClass">
          <div className="inputFieldWrap">
            <label htmlFor="email" className="headingForFields">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="inputFields"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="inputFieldWrap">
            <label
              htmlFor="password"
              id="passwordtxt"
              className="headingForFields"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="inputFields"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {/* {errorMessage && (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {" "}
            {errorMessage}{" "}
          </div>
        )} */}
          <button type="submit" className="loginBtn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
