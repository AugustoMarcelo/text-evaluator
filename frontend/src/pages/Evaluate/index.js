import React, { useEffect, useState, useCallback } from 'react';
import { FaSpinner } from 'react-icons/fa';

import generateRandomNumber from '../../utils/generateRandomNumber';
import api from '../../services/api';

import { Container, Introduction, Box, Loading, EmptyText, Text, Actions } from './styles';

export default function Evaluate() {
  const [text, setText] = useState({
    id: 0,
    description: [],
  });
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    async function loadLimit() {
      const response = await api.get('/texts');
      setLimit(response.data.count);
    }

    loadLimit();
  }, []);

  const loadNewText = useCallback(async () => {
    if (limit === 0) return;

    setLoading(true);
    let exclude = [];
    const storaged = JSON.parse(localStorage.getItem('texts'));

    if (storaged) {
      exclude = storaged;
    }

    if (exclude.length === limit) {
      setFinished(true);
      setLoading(false);
      return;
    }

    const generated = generateRandomNumber({ limit, exclude });

    const response = await api.get(`texts/${generated}`);

    const { id, description } = response.data;

    setText({ 
      id, 
      description: description.split('#')
    });

    localStorage.setItem('texts', JSON.stringify(exclude));
    setLoading(false);
  }, [limit]);

  useEffect(() => {
    loadNewText();
  }, [loadNewText]);

  async function handleFunny() {
    if (finished) return;
    
    await api.put(`texts/${text.id}/funny`);

    let exclude = [];
    const storaged = JSON.parse(localStorage.getItem('texts'));

    if (storaged) {
      exclude = storaged;
    }

    exclude.push(text.id);

    localStorage.setItem('texts', JSON.stringify(exclude));

    loadNewText();
  }
  
  async function handleNice() {
    if (finished) return;
    
    await api.put(`texts/${text.id}/nice`);

    let exclude = [];
    const storaged = JSON.parse(localStorage.getItem('texts'));

    if (storaged) {
      exclude = storaged;
    }

    exclude.push(text.id);

    localStorage.setItem('texts', JSON.stringify(exclude));

    loadNewText();
  }

  async function handleOK() {
    if (finished) return;
    
    await api.put(`texts/${text.id}/ok`);

    let exclude = [];
    const storaged = JSON.parse(localStorage.getItem('texts'));

    if (storaged) {
      exclude = storaged;
    }

    exclude.push(text.id);

    localStorage.setItem('texts', JSON.stringify(exclude));

    loadNewText();
  }

  return (
    <Container>
      <Introduction>
      Vote por favor na legenda abaixo. Queremos selecionar quais são as mais engraçadas para usar nos vídeos de divulgação em inglês. As estrofes que você não encontrar nenhum elemento cômico, pode votar em “achei ok”.
      <p>Obrigado!</p>
      </Introduction>
      <Box>
        {loading ? (
          <Loading>
            <FaSpinner size={20} />
            Um momento...
          </Loading>
        ) : (
          finished ? (
            <EmptyText>Uau! Você avaliou todas as minhas frases! Muito obrigado!</EmptyText>
          ) : (
            <>
            <Text>
              {text.description?.map(phrase => (
                <p key={phrase}>{phrase}</p>
              ))}
            </Text>
            <Actions>
              <button onClick={handleFunny}>
                <img src="https://twemoji.maxcdn.com/2/svg/1f604.svg" alt="Emoji engraçado" />
                Achei engraçado
              </button>
              <button onClick={handleNice}>
                <img src="https://twemoji.maxcdn.com/2/svg/1f642.svg" alt="Emoji adorável" />
                Achei agradável
              </button>
              <button onClick={handleOK}>
                <img src="https://twemoji.maxcdn.com/2/svg/1f610.svg" alt="Emoji neutro" />
                Achei OK
              </button>
            </Actions>
            </>
          )
        )}
      </Box>
    </Container>
  )
}