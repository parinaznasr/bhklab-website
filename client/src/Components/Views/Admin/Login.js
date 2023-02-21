import React from 'react';
import {useState} from "react";
import styled from 'styled-components';
//
// const Container = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
//   padding: 2em;
//   text-align: center;
// `;
//
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
//
// const Input = styled.input`
//   width: 50%;
//   padding: 0.5em;
//   margin: 0.5em 0;
//   font-size: 1.2em;
//   border-radius: 5px;
//   border: 1px solid gray;
//   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
// `;
//
// const Button = styled.button`
//   width: 25%;
//   padding: 0.5em;
//   margin: 1em 0;
//   font-size: 1.2em;
//   background-color: #3f51b5;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
//   cursor: pointer;
// `;
//
// const Login = () => (
//     <Container>
//         <Form>
//             <Input type="text" placeholder="Username" />
//             <Input type="password" placeholder="Password" />
//             <Button>Login</Button>
//         </Form>
//     </Container>
// );
//
// export default Login;
const StyledLogin = styled.div`
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
