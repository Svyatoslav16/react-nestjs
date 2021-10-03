import React from 'react';

import { NavigationProps } from './types';

const Navigation: React.FC<NavigationProps> = (_props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Navigation);
