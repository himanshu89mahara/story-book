import styled,{css} from "styled-components";

export const SharedStyle = css`
    box-sizing: border-box;
    background: ${props=>props.disabled?'#EEEEEE':'#FFFFFF'};
    border: 1px solid ${props=>props.error?'#FE414D':'#EEEEEE'};
    border-radius: 5px;
    height:40px;
    padding: 5px 10px;
    font-weight:300;
    line-height:22px;
    outline:none;
    position:relative;

    &::placeholder{
        opacity:0.5;
    }
`;

export const StyledInput = styled.input`
    ${SharedStyle}
`;

export const StyledSelect = styled.select`
    ${SharedStyle}
    padding: 5px 40px 5px 10px;
    background-image: url(./img/svg/down_arrow.svg);
    background-repeat: no-repeat;
    background-size: 10px 12px;
    background-position-x: 85%;
    background-position-y: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

export const StyledFancyContainer = styled.div`
    ${SharedStyle};
    display:inline-block;
    cursor:pointer;
    padding:0;
    margin:0;


    label{
        display:inline-block;
        padding: 8px 62px 5px 10px;
        width: auto;
        background-image: url(./img/svg/down_arrow.svg);
        background-repeat: no-repeat;
        background-size: 10px 12px;
        background-position-x: 85%;
        background-position-y: 12px;
        cursor:pointer;
    }

    ul{
    
        position: absolute;
        left:0;
        top:100%;
   
        padding: 0px;
        margin: 0;
        box-sizing: border-box;
       
        max-height: 200px;
        overflow-y: auto;
        display:${props=>props.toggle?'block':'none'};
        list-style:none;
        flex-direction:column;
        background:#FFFFFF;
        counter-reset: labels;
        width: 100%;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border:1px solid #EEEEEE;
        

        li{
            padding: 4px 10px;
            display: block;
            
            border-bottom: 1px solid #EEEEEE;
            margin:0;
            font-size:10px;
            color: #333333;

            &:first-child{
               // padding-top:0;
            }

            &:last-child{
                border-bottom:none;

            }
            &:hover{
                background:#F5FAFF;
            }


        }
    }
    
`;
