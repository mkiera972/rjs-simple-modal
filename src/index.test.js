import { Modal } from '.';
import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
describe('Modal children portal', () => {
  test('should show children', () => {
      const showModal = true;
      render(
          <Modal show={showModal} close={() => null} title='toto'>Bonjour</Modal>
      );
      const title = screen.getByText('Bonjour');
      expect(title).toBeInTheDocument();
  });
});
