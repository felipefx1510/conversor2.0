import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-gap: 10px;
`;

const Card = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => (props.flipped ? '#fff' : '#000')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ccc;
`;

export { Grid, Card };