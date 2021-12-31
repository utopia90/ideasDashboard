import styled from 'styled-components'


interface Children {
  children: JSX.Element[]
}
export const Square = ({children}:Children) => (
  <SquareStyled>
     {children}
  </SquareStyled>
  );

  export const SquareStyled = styled.div`
  background: #F3E779;
    width: 18rem;
    min-height: 17rem;
`;
export const InputStyledTitle = styled.input`
background: none;
  border: none;
  width: 17rem;
  height: 1rem;
  cursor:pointer;
  margin-bottom: 1rem;

`;
export const InputStyledBody = styled.textarea`
background: none;
  border: none;
  width: 17rem;
  height:14rem;
  cursor:pointer;

`;