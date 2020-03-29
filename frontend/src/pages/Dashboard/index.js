import React, { useState, useEffect, useCallback } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';

import api from '../../services/api';

import Pagination from '../../components/Pagination';
import FAB from '../../components/FAB';
import TextItem from '../../components/TextItem';
import { Container, Content, Actions, FilterActions, ExportButton, TextList, Loading } from './styles';

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

  async function handleExportToCSV() {
    setLoading(true);
    const response = await api.get('texts', {
      params: {
        limit: 2000,
        order: 'likes',
      }
    });

    const data = response.data.rows;

    let csvFile = [];
    let csvData = [['Legendas', 'Nº de Gostei', 'Nº de Não Gostei']];
    let totalLikes = 0;
    let totalDislikes = 0;

    data.forEach(subtitle => {
      csvData.push([`${subtitle.description}`, subtitle.likes, subtitle.dislikes]);
      totalLikes += subtitle.likes;
      totalDislikes += subtitle.dislikes;
    });

    csvData.forEach(item => {
      csvFile.push(item.join(";"));
    });

    csvFile.push([`Total;${totalLikes};${totalDislikes}`]);

    var csvString = csvFile.join('\n');
    
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    let linkToDownload = document.createElement('a');
    linkToDownload.setAttribute('hidden', '');
    linkToDownload.setAttribute('href', url);
    linkToDownload.setAttribute('download', 'subtitle_rating.csv');
    document.body.appendChild(linkToDownload);
    linkToDownload.click();
    document.body.removeChild(linkToDownload);
    setLoading(false);
  }

  return (
    <Container>
      <Content>
        {loading && (
          <Loading>
            <FaSpinner size={20} />
            Fazendo upload...
          </Loading>
        )}
        <Actions>
          <FilterActions>
            <li className={`${filterActive.likes}`}>
              <button onClick={handleFilterLikes}>Gostei</button>
            </li>
            <li className={`${filterActive.dislikes}`}>
              <button onClick={handleFilterDislikes}>Não Gostei</button>
            </li>
          </FilterActions>
          <ExportButton onClick={handleExportToCSV} title="Gera um arquivo .csv com todas as legendas e suas avaliações">
            <MdFileDownload size={32} color="#9B59B6" />
          </ExportButton>
        </Actions>
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