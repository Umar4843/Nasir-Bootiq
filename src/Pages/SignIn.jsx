import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await axios.post("http://localhost:8082/api/user")
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
    <Container>
      <FormWrapper>
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </InputGroup>
          <InputGroup>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </InputGroup>
          <Button type="submit">Sign In</Button>
          <ForgotPassword>
            <a href="#">Forgot password?</a>
          </ForgotPassword>
        </Form>
      </FormWrapper>
    </Container>
    <Footer/>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background: #0056b3;
  }
`;

const ForgotPassword = styled.p`
  margin-top: 10px;
  
  a {
    text-decoration: none;
    color: #007bff;
  }
`;

export default SignIn;
