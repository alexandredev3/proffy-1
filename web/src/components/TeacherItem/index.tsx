import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/3953162?s=460&u=6bd12d8154ae68af8e91222fd2947c3d43e33e51&v=4"
          alt="Douglas Tofoli"
        />
        <div>
          <strong>Douglas Tofoli</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nisi
        vel quaerat impedit.
        <br />
        <br />
        At provident quas sequi suscipit repellat qui dolorem, quos, minima
        alias accusantium asperiores vitae ducimus neque doloribus?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
