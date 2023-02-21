import styled from 'styled-components';
import colors from '../../../styles/colors';

export const StyledAuthContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const AuthPanel = styled.div`
    width: 400px;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 100px;
`;

export const FormField = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .label {
        width: 20%;
        font-size: 12px;
    }
    .input-field {
        width: 70%;
    }
    .input-button {
        width: 25%;
        display: flex;
        justify-content: flex-end;
    }
    .input {
        width: 100%;
    }
`;

export const AuthForm = styled.div`
    margin-top: 40px;
    margin-botom: 40px;
    padding-top: 15px;
    border-top: 1px solid ${colors.light_gray};
    .title {
        font-size: 14px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .pwd-reset-btn {
        background: none;
        border: none;
        padding: 0px;
        cursor: pointer;
        color: ${colors.hyperlink};
        font-size: 12px;
    }
    .pwd-reset-btn:disabled {
        color: #cccccc;
    }
`;

export const ButtonField = styled.div`
    padding-top: 20px;
`;