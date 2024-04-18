import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AnimalCadastro = () => {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [peso, setPeso] = useState('');
  const [mensagem, setMensagem] = useState('');
  const { id } = useParams();

  useEffect(() => {
    console.log('ID:', id);
    if (id) {
      fetchAnimal();
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(id){
        await axios.put(`http://localhost:8080/animal/update/${id}`, {
          nome,
          raca,
          peso
        });
        setMensagem('Animal atualizado com sucesso!');
        return;
      }else{
        const response = await axios.post('http://localhost:8080/animal/add', {
        nome,
        raca,
        peso
      });
      console.log(response.data);
      setMensagem('Animal cadastrado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao cadastrar animal:', error);
      setMensagem('Erro ao cadastrar animal. Por favor, tente novamente.');
    }
  };

  const fetchAnimal = async (e) => {
    try{
      const response = await axios.get(`http://localhost:8080/animal/show/${id}`);
      setNome(response.data.nome);
      setRaca(response.data.raca);
      setPeso(response.data.peso);
    }catch(error){
      console.error('Erro ao buscar animal:', error);
    }
  }



  return (
    <div>
      <h2>Cadastre Seu Animal Aqui</h2>
      <form className='container' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome do Animal</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="raca" className="form-label">Raça</label>
          <input
            type="text"
            className="form-control"
            id="raca"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="peso" className="form-label">Peso</label>
          <input
            type="text"
            className="form-control"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Atualizar' :  'Cadastrar' }</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default AnimalCadastro;
