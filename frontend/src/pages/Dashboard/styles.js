import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
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
      color: #CECECE;
      border-bottom: 2px solid #cecece;
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
  max-width: 800px;
  margin: 10px 0;
`;