import React from 'react';
import { MdFileUpload } from 'react-icons/md';

import { Button } from './styles';

export default function FAB() {
  return (
    <Button type="button">
      <MdFileUpload size={32} color="#fff" />
    </Button>
  )
}