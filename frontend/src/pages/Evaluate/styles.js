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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: #888;
    transition: color 0.2s;
    position: absolute;
    top: 20px;
    right: 20px;

    display: flex;
    align-items: center;

    &:hover {
      color: ${darken(0.2, '#888')};

      svg {
        fill: ${darken(0.2, '#888')};
      }
    }
  }
`;

export const Box = styled.div`
  width: 90%;
  max-width: 560px;
  background: #fff;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: bold;

  svg {
    animation: ${rotate} 2s linear infinite;
    margin-bottom: 10px;
  }
`;

export const EmptyText = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #666;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 20px;
    text-align: justify;
    font-style: italic;
    margin-bottom:  5px;

    &:first-of-type {
      &::before {
        content: '"';
      }
    }

    &:last-of-type {
      &::after {
        content: '"';
      }
    }
  }
`;

export const Actions = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  button {
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    border: 0;
    background: transparent;
    text-transform: uppercase;
    color: #fff;
    border-radius: 4px;
    transition: background 0.2s;
    width: 100%;

    &:first-of-type {
      margin-right: 20px;
    }

    &.dislike {
      background: #c4c4c4;

      &:hover {
        background: ${darken(0.08, '#c4c4c4')}
      }
    }

    &.like {
      background: #27AE60;

      &:hover {
        background: ${darken(0.08, '#27AE60')}
      }
    }
  }
`;