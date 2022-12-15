import { createGlobalStyle } from 'styled-components';
import "./fonts/br-cobane/Brink-BRCobaneRegular.otf";

const GlobalStyles = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    body {
        color: #666666;
        font-family: "BRC-Regular",'Noto Sans', sans-serif;
        font-weight: 400;

        // PrimeReact Component styles
        .p-component {
            font-size: 12px;
            font-family: "BRC-Regular", 'Noto Sans', sans-serif;
        }
        .p-dialog {
            .p-dialog-header{
                padding: 10px;
                .p-dialog-title{
                    font-size: 14px;
                }
                .p-dialog-header-icons .pi{
                    font-size: 14px;
                }
            }
            .p-dialog-content {
                padding: 0px 15px 15px 15px;
            }
        }
    }
    #root {
        width: 100%;
        height: 100%;
        min-height: 100vh;
    }
    h2, h3, h4, h5, h6 {
        padding: 0;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export default GlobalStyles;
