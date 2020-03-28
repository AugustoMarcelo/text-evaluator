import styled from 'styled-components';

export const Row = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 60px 60px;
  grid-gap: 10px;
  min-height: 60px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  div {
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    &.description {
      background: #fff;
      justify-content: flex-start;
      padding: 10px 15px;
    }

    &.likes {
      background: #27AE60;
      color: #fff;
      align-self: flex-start;
      min-height: 60px;
    }

    &.dislikes {
      background: #c4c4c4;
      color: #fff;
      align-self: flex-start;
      min-height: 60px;
    }
  }
`;