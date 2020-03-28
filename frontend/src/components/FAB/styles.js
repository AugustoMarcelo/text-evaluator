import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: #9B59B6;
  border: 0;
  box-shadow: 0px 3px 2px rgba(0,0,0,0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#9B59B6')};
  }
`;