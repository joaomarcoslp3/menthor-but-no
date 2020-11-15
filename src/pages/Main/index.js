import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiClipboard } from 'react-icons/fi'


import months from '../../services/dates';

import './styles.css';

export default function Main() {
  const [URL, setURL] = useState('');
  const [visibleURL, setVisibleURL] = useState('www.site.com');
  const [name, setName] = useState('');
  const [visibleName, setVisibleName] = useState('NOME DO SITE');
  const [title, setTitle] = useState('');
  const [visibleTitle, setVisibleTitle] = useState('Título da matéria');
  const [date, setDate] = useState('');
  const [visibleDate, setVisibleDate] = useState('30 dez. 2005');
  const [dateType, setDateType] = useState('text');
  const [copyButtonVisible, setCopyButtonVisible] = useState('false');
  const [copyButtonText, setCopyButtonText] = useState('Copiar');

  function createReference() {
    setVisibleURL(URL);
    const numbersDate = date.split('-');
    const formatedDate = `${numbersDate[2]} ${months[Number(numbersDate[1]) - 1]}. ${numbersDate[0]}`;
    setVisibleName(name.toUpperCase());
    setVisibleTitle(title);
    setVisibleDate(formatedDate);
    setCopyButtonVisible(true);
  }

  function changeButtonText() {
    setCopyButtonText('Copiado');
    setTimeout(() => {
      setCopyButtonText('Copiar');
    }, 3000)

  }

  return (
    <div className="container">
      <div className="form">
        <div className="input-group">
          <div className="input-group-1">
            <div className="input">
              <label htmlFor="url">URL do site</label>
              <input
                type="text"
                placeholder="www.google.com.br"
                id="url"
                value={URL}
                onChange={e => setURL(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="input">
              <label htmlFor="name">Nome do site</label>
              <input
                type="text"
                placeholder="Google"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="input-group-1">
            <div className="input">
              <label htmlFor="title">Título da Matéria</label>
              <input
                type="text"
                placeholder="Pesquisa sobre babuinos"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="titleInput"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <label htmlFor="date">Acesado em</label>
              <input
                type={dateType}
                placeholder="30/12/2005"
                id="date"
                value={date}
                onFocus={(e) => setDateType('date')}
                onBlur={(e) => setDateType('text')}
                onChange={e => setDate(e.target.value)}
                className="dateInput" />
            </div>
          </div>

          <button onClick={createReference}>Criar Referência</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }} id="reference">
          <p>{visibleName}. &nbsp;</p>
          <p style={{ fontWeight: 'bold' }}>{visibleTitle}. &nbsp;</p>
          <p>Disponível em: {visibleURL}. Acesso em: {visibleDate}</p>
          {copyButtonVisible ? (
            <CopyToClipboard text={`${visibleName}. ${visibleTitle}. Disponível em: ${visibleURL}. Acesso em: ${visibleDate}`}
              onCopy={changeButtonText}
            >
              <div class="sc-kEYyzF gMQbUq">
                <FiClipboard size={30} className="icon" />
                <span class="sc-kkGfuU bwNpfS">{copyButtonText}</span>
              </div>
            </CopyToClipboard>
          ) : <></>}
        </div>

      </div>
    </div >
  );
}

