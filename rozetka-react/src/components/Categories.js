import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <nav>
      <div className="categories">
        <ul>
          <li>
            <Link to="/monitors">Мониторы</Link>
          </li>
          <li>
            <Link to="/keyboa">Клавиатуры</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Categories;
