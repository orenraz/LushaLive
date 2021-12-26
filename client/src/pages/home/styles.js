import styled from 'styled-components';

export const IntroText = styled.div`
z-index: 1;
    h1 {
        color: white;
        font-size: 2rem;
    }
    
    .typed {
        color: white;
        margin: 15rem 0;
        font-size: 2rem;
    }
    
    .typed-cursor {
      color: white;
      font-size: 2rem;
    }
`;

export const FlexContainer = styled.div`
    margin-top: 45px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: 'Raleway', sans-serif;
`;

export const FloatingAvatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0 rgba(255,255,255,0.3);
  transform: translatey(0px);
  animation: float-avatar 5s ease-in-out infinite;
  margin-bottom: 3rem;
  
      @media only screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    }
  
  img { 
  width: 100%; 
  height: auto; 
  }
  
@keyframes float-avatar { 
  0% { box-shadow: 0 5px 15px 0 rgba(255,255,255,0.3); transform: translatey(0px); } 
  50% { box-shadow: 0 10px 15px 0 rgba(255,255,255,0.2); transform: translatey(-15px); } 
  100% { box-shadow: 0 5px 15px 0 rgba(255,255,255,0.3); transform: translatey(0px); } 
}
`;

export const ColoredText = styled.span`
color: orange;
`;

export const FloatingText = styled.div`
color: #fff2aa;
font-weight: 500;
font-size: 4rem;
animation: float-text 5s ease-in-out infinite;
margin-bottom: 3rem;
text-align: center;
padding: 0 5px;
    
.subtext {
  font-size: 18rem;
  color: #ff405a;
    
  img { 
  margin: 0 5px;
  width: 18px; 
  height: auto; 
  }
  
}
@keyframes float-text { 
  0% {  transform: translatey(0px); } 
  50% {  transform: translatey(-15px); } 
  100% {  transform: translatey(0px); } 
}
`;
