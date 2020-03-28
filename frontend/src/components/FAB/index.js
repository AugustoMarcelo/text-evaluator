import React from 'react';
import { MdFileUpload } from 'react-icons/md';

import { Button } from './styles';

export default function FAB({ handleInputFile }) {
  return (
    <Button type="button">
      <label htmlFor="file">
        <MdFileUpload size={32} color="#fff" />
        <input
          type="file"
          id="file"
          accept=".csv"
          onChange={handleInputFile}
        />
      </label>
    </Button>
  )
}