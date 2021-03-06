import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Something went wrong, please try again.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register new incident</h1>
          <p>Register a detailed incident to find a hero to solve it.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Incident title" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          
          <textarea 
            placeholder="Description" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input 
            placeholder="Amount in US dollars" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit"> Register</button>
        </form>
      </div>
    </div>
  );
}