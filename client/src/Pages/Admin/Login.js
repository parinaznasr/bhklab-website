import React from 'react';
import {useState} from "react";
import styled from 'styled-components';
import colors from "../../styles/colors";


const StyledLogin = styled.div`
  label, input {
    display: block;
  }

  input {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  form button {
    background: #1aac83;
    border: 0;
    width: 80px;
    color: ${colors.white};
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  form.login {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 4px;
  }
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async(e)=> {
        e.preventDefault(); //prevent refresh
        console.log(email,password)
    }

    return (
        <StyledLogin>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Log in</h3>
                <label>User name:</label>
                <input
                    type="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                />
                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                />
                <button>Log in</button>
            </form>
        </StyledLogin>
    )
}

export default Login;
