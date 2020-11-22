import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [currentPage, setCurrentPage] = useState();

  function verifyCurrentPage(): void {
    setCurrentPage(window.location.pathname);
  }
  function modifyStyleOfMenuItem(): void {
    const menuItems = document.querySelectorAll('header nav a');

    menuItems.forEach(item => {
      const hrefItem = item.getAttribute('href');

      if (hrefItem === null) {
        throw new Error('Panda null');
      }

      if (hrefItem.includes(currentPage)) {
        item.innerHTML = 'Panda';
      }
    });
  }

  modifyStyleOfMenuItem();

  return (
    <Container size={size}>
      <header onLoad={verifyCurrentPage}>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/list">Listagem</Link>
          <Link to="/import">Importar</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
