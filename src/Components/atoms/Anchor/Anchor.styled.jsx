import styled from "styled-components";

export const StyledPageLink = styled.a`

    box-sizing:border-box;
    display:inline-flex;
    
    align-items:center;
    justify-content:center;
    border-radius: 50px;
    box-sizing: border-box;
    border: 1px solid #fe414d;
    font-weight: 600;
    cursor: pointer;
    color: ${props => props.primary?'white':'#fe414d'};
    background-color: ${props => props.primary?'#fe414d':'transparent'};
    font-size: 1rem;
    height:auto;
    padding:5px;
    
    ${props=>props.disabled && `
      opacity:0.3;
    `}

    ${(props)=>{
        let size=40;
        switch(props.size){
            case 'small':
                size=30;
                break;
            case 'medium':
                size=40;
                break;
            case 'large':
                size=50;
        }
        return `
            width: ${size}px;
            height:${size}px;
        `;

    }}
    
   

`;