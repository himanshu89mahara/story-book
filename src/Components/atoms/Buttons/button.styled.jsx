import styled from 'styled-components';
const StyleIcon = styled.i`
  width:27px;
  height:27px;
`;

export const StyledButton = styled.button`
    box-sizing: border-box;
    border: 1px solid #fe414d;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    display: inline-block;
    min-width: 168.21px;
    line-height: 22px;
    font-size: 1rem;
    color: ${props => props.primary?'white':'#fe414d'};
    background-color: ${props => props.primary?'#fe414d':'transparent'};
    padding: ${(props)=>{
      switch(props.size){
        case 'small':
          return '8px 20px';
        case 'large':
          return '12px 24px';

        case 'medium':
        default:
          return '10px 20px';

      }
    }};

    ${props=>props.disabled && `
      opacity:0.3;
    `}

    i{
      margin:5px;
    }

`;

export const StyledDecisionButton = styled(StyledButton)`

    font-size:18px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0 20px;

    i{
      margin:5px 10px 8px 5px;
    }
`;

