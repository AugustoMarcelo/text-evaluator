import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #161616;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 10px 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ExportButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 60px;
  border: 0;
  background: #9B59B6;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover:not([disabled]) {
    background: ${darken(0.1, '#9B59B6')};
  }
`;

export const FilterActions = styled.ul`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;

  button {
    border: 0;
    background: transparent;
    padding: 10px;
    font-weight: bold;
  }

  li {
    button {
      color: rgb(153,153,153);
      transition: all 0.2s;
    }

    &:hover {
      button {
        color: #cecece;
      }
    }
  }

  li.active {
    button {
      color: #9B59B6;
      border-bottom: 2px solid #9B59B6;
    }
  }
`;

export const TextList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: inherit;
  margin: 10px 0;
`;

export const Loading = styled.div`
  background: rgba(0,0,0,.8);
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: bold;
  font-size: 18px;

  svg {
    animation: ${rotate} 2s linear infinite;
    margin-bottom: 10px;
  }
`;