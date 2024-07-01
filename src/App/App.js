import './styles.css';
import React, { useState, useEffect } from 'react';
import api from '../services/api';

function App() {
    const [people, setPeople] = useState([]);
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({ id: '', firstName: '', lastName: '', cpf: '', age: '', telephone: '' });
    const [cpfError, setCpfError] = useState('');

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = () => {
        api.get('/people')
            .then(response => setPeople(response.data))
            .catch(error => console.error("Error fetching people", error));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (formData.cpf.length !== 11) {
            setCpfError('CPF deve ter 11 caracteres');
            return;
        }
        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            cpf: formData.cpf,
            age: parseInt(formData.age, 10),
            telephone: formData.telephone
        };
        api.post('/people', payload)
            .then(() => {
                fetchPeople();
                setFormData({ id: '', firstName: '', lastName: '', cpf: '', age: '', telephone: '' });
                setCpfError('');
            })
            .catch(error => console.error("Error adding person", error));
    };

    const handleEdit = (person) => {
        setEdit(true);
        setFormData({ id: person.id, firstName: person.firstName, lastName: person.lastName, cpf: person.cpf, age: person.age.toString(), telephone: person.telephone });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        api.put(`/people/${formData.id}`, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            cpf: formData.cpf,
            age: parseInt(formData.age, 10),
            telephone: formData.telephone
        })
            .then(() => {
                fetchPeople();
                setEdit(false);
                setFormData({ id: '', firstName: '', lastName: '', cpf: '', age: '', telephone: '' });
            })
            .catch(error => console.error("Error updating person", error));
    };

    const handleDelete = (id) => {
        api.delete(`/people/${id}`)
            .then(() => fetchPeople())
            .catch(error => console.error("Error deleting person", error));
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
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                <label>CPF:</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" required />
                {cpfError && <p style={{ color: 'red' }}>{cpfError}</p>}
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
                <label>Telephone:</label>
                <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Telephone" required />
                <button type="submit">{edit ? 'Update Person' : 'Add Person'}</button>
            </form>
            <h2>People List</h2>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>CPF</th>
                    <th>Age</th>
                    <th>Telephone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {people.map(person => (
                    <tr key={person.id}>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.cpf}</td>
                        <td>{person.age}</td>
                        <td>{person.telephone}</td>
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
