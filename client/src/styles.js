import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: rgb(5,26,74);
  background: linear-gradient(180deg, rgba(5,26,74,1) 0%, rgba(11,6,36,1) 100%);
  
  @media only screen and (max-width: 500px) {
  transition: height 99999s;
  }
  
  @media only screen and (max-width: 768px) and (orientation:landscape) {
  height: 170vh;
  }
  
         @media only screen and (max-width: 1100px) and (orientation:landscape) {
    height: 200vh;
  }
`;
