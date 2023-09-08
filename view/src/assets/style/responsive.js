import{css} from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 540px){
            ${props}
        }
    `;
}
export const mobileSmall = (props) => {
    return css`
        @media only screen and (max-width: 320px){
            ${props}
        }
    `;
}
export const iPadAir = (props) => {
    return css`
       @media only screen and (max-width: 1024px){
        ${props}
       }
    `;
}
export const generalTablet = (props) =>{
    return css`
        @media only screen and (max-width: 820px){
            ${props}
        }
    `;
}