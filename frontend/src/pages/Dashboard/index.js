import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';

import Pagination from '../../components/Pagination';
import FAB from '../../components/FAB';
import TextItem from '../../components/TextItem';
import { Container, Content, FilterActions, TextList } from './styles';

export default function Dashboard() {
  const [texts, setTexts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });

  const loadTexts = useCallback(async () => {
    const { limit, page } = pagination;
    const response = await api.get('/texts', {
      params: {
        page,
        limit,
      },
    });

    setTexts(response.data.rows);
  }, [pagination]);

  useEffect(() => {
    loadTexts();
  }, [loadTexts]);

  function handleNextPage() {
    const { page } = pagination;
    setPagination({
      ...pagination,
      page: page + 1,
    });
  }

  function handlePreviousPage() {
    const { page } = pagination;
    setPagination({
      ...pagination,
      page: page - 1,
    });
  }

  return (
    <Container>
      <Content>
        <FilterActions>
          <li className="active"><button>Gostei</button></li>
          <li><button>Não Gostei</button></li>
          <li className="slide"></li>
        </FilterActions>
        <TextList>
          {texts.map(text => (
            <TextItem data={text} key={text.id} />
          ))}
        </TextList>
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          prevDisabled={pagination.page === 1}
          nextDisabled={
            texts.length === 0 || texts.length < pagination.limit
          }
        />
        <FAB />
      </Content>
    </Container>
  )
}