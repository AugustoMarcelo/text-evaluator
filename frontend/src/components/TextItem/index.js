import React from 'react';

import { Row, Rating } from './styles';

export default function TextItem({ data }) {
  return (
    <Row>
      <div className="description">{data.description}</div>
      <Rating>
        <div className="count">{data.funny}</div>
        <div className="count">{data.nice}</div>
        <div className="count">{data.ok}</div>
      </Rating>
    </Row>
  );
}