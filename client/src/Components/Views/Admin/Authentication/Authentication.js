// import React, { useState } from 'react';
// import axios from 'axios';
//
// import useAuth from '../../../hooks/useAuth'; // custom hook to hadle authentication.
// import CustomInputText from '../../UtilComponents/CustomInputText';
// import CustomButton from '../../UtilComponents/CustomButton';
// import CustomMessages from '../../UtilComponents/CustomMessages';
// import { StyledAuthContainer, AuthPanel, AuthForm, FormField, ButtonField } from './AuthenticationStyle';
//
// const errorMessage = {
//     severity: 'error',
//     summary: 'Signin Failed',
//     detail: 'Please try again with correct credentials.',
//     sticky: true
// };
//
// const registerStatusMessage = (registerStatus) => (
//     registerStatus !== null ?
//     {
//         severity: registerStatus.status,
//         summary: registerStatus.status === 'success' ? 'Registration Successful' : 'Error',
//         detail: registerStatus.message,
//         sticky: true
//     }
//     :
//     null
// );
//
//
// const Authentication = (props) => {
//     const { location } = props;
//     const { submitUser, isValidEmail, error, registerStatus } = useAuth();
//
//     const [user, setUser] = useState({
//         email: '',
//         password1: '',
//         password2: '',
//         affiliation: '',
//         action: ''
//     });
//
//
//     const findUser = async (e) => {
//         e.preventDefault();
//         setUser({...user, action: ''});
//         const res = await axios.get(`/api/user/find/${user.email}`);
//         setUser({...user, action: res.data.action});
//     }
//
//
//     const disableFind = () => {
//         return !isValidEmail(user.email, false);
//     }
//
//
//     const onKeyDown = (e) => {
//         if(e.key === 'Enter' && !disableFind()){
//             findUser(e);
//         }
//     }
//
//     return(
//         <StyledAuthContainer>
//             <AuthPanel>
//                 <h4>Sign in / Register</h4>
//                 <CustomMessages trigger={error} message={errorMessage} />
//                 <CustomMessages trigger={registerStatus} message={registerStatusMessage(registerStatus)} />
//                 <CustomMessages trigger={pwdResetMessage.trigger} message={pwdResetMessage.message} />
//                 <FormField>
//                     <span className='label'>Email: </span>
//                     <span className='input-field'>
//                         <CustomInputText
//                             value={user.email}
//                             type='text'
//                             onChange={(e) => setUser({...user, email: e.target.value})}
//                             onKeyDown={onKeyDown}
//                         />
//                     </span>
//                     <span className='input-button'>
//                         <CustomButton
//                             className='p-button-sm'
//                             icon='pi pi-arrow-right'
//                             label='Find'
//                             onClick={findUser}
//                             disabled={disableFind()}
//                         />
//                     </span>
//                 </FormField>
//             </AuthPanel>
//         </StyledAuthContainer>
//     );
// }
//
// export default Authentication;
