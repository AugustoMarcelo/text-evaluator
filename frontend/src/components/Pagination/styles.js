import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: 0;
    background: #9B59B6;
    height: 50px;
    width: 60px;
    color: #9B59B6;
    font-weight: bold;
    border-radius: 4px;
    padding: 0 15px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-of-type {
      margin-right: 10px;
    }

    &[disabled] {
      border: 1px solid #bbb;
      background: transparent;
      color: #bbb;
      cursor: not-allowed;

      svg {
        fill: #bbb;
      }
    }

    &:hover:not([disabled]) {
      background: ${darken(0.1, '#9B59B6')};
    }
  }
`;
