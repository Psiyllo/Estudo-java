import React, { useState, useEffect } from 'react';
import api from './services/api';

function App() {
    const [people, setPeople] = useState([]);
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({ id: '', name: '', cpf: '', age: '' });

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = () => {
        api.get('/people')
            .then(response => setPeople(response.data))
            .catch(error => console.error("Erro ao buscar pessoas", error));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const payload = {
            name: formData.name,
            cpf: formData.cpf,
            age: parseInt(formData.age, 10)
        };
        api.post('/people', payload)
            .then(() => {
                fetchPeople();
                setFormData({ id: '', name: '', cpf: '', age: '' });
            })
            .catch(error => console.error("Erro ao adicionar pessoa", error));
    };

    const handleEdit = (person) => {
        setEdit(true);
        setFormData({ id: person.id, name: person.name, cpf: person.cpf, age: person.age.toString() });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        api.put(`/people/${formData.id}`, {
            name: formData.name,
            cpf: formData.cpf,
            age: parseInt(formData.age, 10)
        })
            .then(() => {
                fetchPeople();
                setEdit(false);
                setFormData({ id: '', name: '', cpf: '', age: '' });
            })
            .catch(error => console.error("Erro ao atualizar pessoa", error));
    };

    const handleDelete = (id) => {
        api.delete(`/people/${id}`)
            .then(() => fetchPeople())
            .catch(error => console.error("Erro ao deletar pessoa", error));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Pessoas</h1>
            {edit ? (
                <form onSubmit={handleUpdate}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
                    <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" />
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Idade" />
                    <button type="submit">Atualizar Pessoa</button>
                </form>
            ) : (
                <form onSubmit={handleAdd}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
                    <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" />
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Idade" />
                    <button type="submit">Adicionar Pessoa</button>
                </form>
            )}
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        {person.name} - {person.cpf} - {person.age}
                        <button onClick={() => handleEdit(person)}>Editar</button>
                        <button onClick={() => handleDelete(person.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
