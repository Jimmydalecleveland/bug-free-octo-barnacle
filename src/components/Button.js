import React from 'react';
import styled from 'react-emotion';

export default props => (
  <Button props {...props}>
    {props.children}
  </Button>
);

const Button = styled('button')`
  background: tomato;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  font-size: ${props =>
    console.log(props) || (props.primary ? '26px' : '18px')};
`;
