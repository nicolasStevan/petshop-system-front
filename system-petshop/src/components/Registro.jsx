import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    sexo: ''
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário de atualizar a página

    try {
      // Faça a solicitação POST usando Axios
      await axios.post('http://localhost:8080/cliente/add', formData);
      // Se a solicitação for bem-sucedida, você pode redirecionar o usuário ou mostrar uma mensagem de sucesso
      console.log('Cliente registrado com sucesso!');
    } catch (error) {
      // Se houver um erro na solicitação, você pode lidar com isso aqui
      console.error('Erro ao registrar cliente:', error);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Registre Seus Dados Aqui</h2>
      <form className='container' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Insira seu Nome</label>
          <input type="text" className="form-control" id="nome" onChange={handleChange} value={formData.nome} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpf" className="form-label">Insira seu CPF</label>
          <input type="text" className="form-control" id="cpf" onChange={handleChange} value={formData.cpf} />
        </div>
        <div className="mb-3">
          <label htmlFor="sexo" className="form-label">Sexo</label>
          <input type="text" className="form-control" id="sexo" onChange={handleChange} value={formData.sexo} />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;