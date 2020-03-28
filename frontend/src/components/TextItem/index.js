import React from 'react';

import { Row } from './styles';

export default function TextItem({ data }) {
  return (
    <Row>
      <div className="description">{data.description}</div>
      <div className="likes">{data.likes}</div>
      <div className="dislikes">{data.dislikes}</div>
    </Row>
  );
}