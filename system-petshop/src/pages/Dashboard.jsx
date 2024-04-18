import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/animal/getAll');
      setPets(response.data);
    } catch (error) {
      console.error('Erro ao buscar animais:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (id) => {
    navigate(`/animalcadastro/${id}`);
  }

  const handleDelete = async (id) => {
    console.log(id)
    console.log(pets)
    try {
      await axios.delete(`http://localhost:8080/animal/delete/${id}`);
      setPets(pets.filter(pet => pet.idAnimal !== id)); // Atualiza a lista de pets removendo o pet excluído
      alert("Animal excluído com sucesso!")
      fetchPets();
    } catch (error) {
      console.error('Erro ao excluir animal:', error);
    }
  }
  

  return (
    <div className='container'>
      <h2>Dashboard</h2>
      <p>Seja bem-vindo(a) ao sistema de petshop!</p>

      <h3>Recursos disponíveis:</h3>
      <p>Visualizar lista de animais cadastrados</p>
      <ul>
        {pets.map((pet) => (
          <li key={pet.idAnimal}>
            <p>Nome: {pet.nome}</p>
            <p>Raça: {pet.raca}</p>
            <p>Peso: {pet.peso}</p>
            <button onClick={() => handleEdit(pet.idAnimal)}>Editar</button>
            <button onClick={() => handleDelete(pet.idAnimal)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
