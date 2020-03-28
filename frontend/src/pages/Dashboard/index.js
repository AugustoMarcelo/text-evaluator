import React, { useState, useEffect, useCallback } from 'react';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Pagination from '../../components/Pagination';
import FAB from '../../components/FAB';
import TextItem from '../../components/TextItem';
import { Container, Content, FilterActions, TextList, Loading } from './styles';

export default function Dashboard() {
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    order: 'likes'
  });
  const [filterActive, setFilterActive] = useState({
    likes: 'active',
    dislikes: '',
  });

  const loadTexts = useCallback(async () => {
    const response = await api.get('/texts', {
      params: {
        ...pagination,
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

  async function handleInputFile(e) {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);

    reader.onload = (event) => {
      let csv = event.target.result;
      
      let texts = csv.split(/\n/);
      texts.pop();

      texts.forEach(async (description, index, array) => {
        setLoading(true);

        description = description.replace(/"/g, '').trim();
        
        await api.post('texts', { description });

        if (index === array.length - 1) {
          setLoading(false);
          loadTexts();
        }
      });
    }
  }

  function handleFilterLikes() {
    setFilterActive({
      likes: 'active',
      dislikes: '',
    });
    setPagination({
      ...pagination,
      order: 'likes',
    });
  };

  function handleFilterDislikes() {
    setFilterActive({
      likes: '',
      dislikes: 'active',
    });
    setPagination({
      ...pagination,
      order: 'dislikes',
    });
  };

  return (
    <Container>
      <Content>
        {loading && (
          <Loading>
            <FaSpinner size={20} />
            Fazendo upload...
          </Loading>
        )}
        <FilterActions>
          <li className={`${filterActive.likes}`}>
            <button onClick={handleFilterLikes}>Gostei</button>
          </li>
          <li className={`${filterActive.dislikes}`}>
            <button onClick={handleFilterDislikes}>Não Gostei</button>
          </li>
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
        <FAB handleInputFile={handleInputFile} />
      </Content>
    </Container>
  )
}