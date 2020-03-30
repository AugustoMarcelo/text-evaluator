import styled from 'styled-components';

export const Row = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  min-height: 60px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;

    div.description {
      border-top: 1px solid #cecece;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  div.description {
    border-radius: 4px;
    font-weight: bold;
    color: #cecece;
    background: #1F1F23;
    justify-content: flex-start;
    padding: 10px 15px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.count {
    border-radius: 4px;
    font-weight: bold;
    color: #cecece;
    background: #1F1F23;
    align-self: flex-start;
    min-height: 60px;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;