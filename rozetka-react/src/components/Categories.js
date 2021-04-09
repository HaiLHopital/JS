import React from 'react';
import { Link } from 'react-router-dom';

import keyboard_svg from '../assets/img/keyboard.svg';
import monitor_svg from '../assets/img/monitor.svg';

function Categories() {
  return (
    <nav>
      <div className="categories">
        <ul>
          <li>
            <Link to="/monitors">
              <div className="categorieslink">
                <img src={monitor_svg} alt=""></img>
                <p className="linktext">Мониторы</p>
              </div>
            </Link>
          </li>
          <li className="categories_link">
            <Link to="/keyboards">
              <div className="categorieslink">
                <img src={keyboard_svg} alt=""></img>
                <p className="linktext">Клавиатуры</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Categories;
