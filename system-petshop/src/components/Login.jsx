import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/cliente/login', { nome, cpf });
      console.log(response.data);
      setMensagem(`Seja bem-vindo(a), ${nome}!`);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setMensagem('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h2 className='text-center'>Insira o seu Login Aqui para Acessar o Sistema</h2>
      <form className='form-container' onSubmit={handleLogin}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className=""
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            className=""
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Login;
