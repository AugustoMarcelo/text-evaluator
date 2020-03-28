import React from 'react';
import { Link } from 'react-router-dom';
import { MdSubdirectoryArrowRight } from 'react-icons/md';

import { Container, Box, Text, Actions } from './styles';

export default function Evaluate() {
  return (
    <Container>
      <Link to="/login">
        <MdSubdirectoryArrowRight size={18} color="#888888" />
        Login
      </Link>
      <Box>
        <Text>
          Chuck Norris foi testado positivo para o Coronavírus. O vírus foi colocado em quarentena e segue em observação<br /><br />
          Chuck Norris foi testado positivo para o Coronavírus. O vírus foi colocado em quarentena e segue em observação
        </Text>
        <Actions>
          <button className="dislike">Não gostei</button>
          <button className="like">Gostei</button>
        </Actions>
      </Box>
    </Container>
  )
}