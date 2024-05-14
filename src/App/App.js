import './styles.css';
import React, { useState, useEffect } from 'react';
import api from '../services/api';


function App() {
    const [people, setPeople] = useState([]);
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({ id: '', name: '', cpf: '', age: '' });
    const [cpfError, setCpfError] = useState('');

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
        if (formData.cpf.length !== 11) {
            setCpfError('CPF deve ter 11 caracteres');
            return;
        }
        const payload = {
            name: formData.name,
            cpf: formData.cpf,
            age: parseInt(formData.age, 10)
        };
        api.post('/people', payload)
            .then(() => {
                fetchPeople();
                setFormData({ id: '', name: '', cpf: '', age: '' });
                setCpfError('');
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
        if (e.target.name === 'cpf') {
            if (e.target.value.length !== 11) {
                setCpfError('CPF deve ter 11 caracteres');
            } else {
                setCpfError('');
            }
        }
    };

    return (
        <div className="container">
            <h1>Person Management System</h1>
            <form onSubmit={edit ? handleUpdate : handleAdd}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <label>CPF:</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" required />
                {cpfError && <p style={{ color: 'red' }}>{cpfError}</p>}
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
                <button type="submit">{edit ? 'Update Person' : 'Add Person'}</button>
            </form>
            <h2>People List</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>CPF</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {people.map(person => (
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.cpf}</td>
                        <td>{person.age}</td>
                        <td>
                            <button onClick={() => handleEdit(person)}>Edit</button>
                            <button onClick={() => handleDelete(person.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
