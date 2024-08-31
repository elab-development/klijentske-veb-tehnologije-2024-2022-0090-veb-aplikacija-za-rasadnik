import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Rout from '../comp/rout'; // Putanja do Rout komponente

test('renders About component for /about path', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <Rout
        shop={[]}
        Filter={() => {}}
        allcatefilter={() => {}}
        addtocart={() => {}}
        cart={[]}
        setCart={() => {}}
      />
    </MemoryRouter>
  );

  // Proverite prisustvo teksta u About komponenti
  expect(screen.getByText(/O Nama/i)).toBeInTheDocument();
  expect(screen.getByText(/Informacije o Kompaniji/i)).toBeInTheDocument();
  expect(screen.getByText(/Misija/i)).toBeInTheDocument();
  expect(screen.getByText(/Vizija/i)).toBeInTheDocument();
  expect(screen.getByText(/Upoznajte Tim/i)).toBeInTheDocument();
});
