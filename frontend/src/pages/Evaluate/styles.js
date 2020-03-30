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
  background: #161616;

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

export const Introduction = styled.div`
  width: 90%;
  max-width: 560px;
  color: #fff;
  text-align: justify;
  font-size: 1.8rem;
  line-height: 3rem;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  width: 90%;
  max-width: 560px;
  background: #1F1F23;
  padding: 30px;
  border-radius: 4px;

  @media screen and (max-width: 360px) {
    padding: 10px;
  }

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
    font-size: 2rem;
    color: #fff;
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
    font-size: 1.2rem;
    font-weight: bold;
    border: 0;
    background: #5D5274;
    text-transform: uppercase;
    color: #fff;
    border-radius: 4px;
    transition: background 0.2s;
    width: 100%;
    padding: 8px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 32px;
      height: 32px;
      margin-bottom: 8px;
    }

    &:not(:last-of-type) {
      margin-right: 20px;
    }

    &:hover {
      background: ${darken(0.08, '#5D5274')};
    }
  }
`;