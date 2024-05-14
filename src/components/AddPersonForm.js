import React, { useState } from 'react';
import api from './services/api';

const AddPersonForm = () => {
    const [formData, setFormData] = useState({ name: '', cpf: '', age: '' });
    const [cpfError, setCpfError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if (formData.cpf.length !== 11) {
            setCpfError('CPF deve ter 11 caracteres');
            return;
        }
        try {
            const response = await api.post('/people', formData);
            console.log('Person added successfully', response.data);
            alert('Person added successfully!');
            setFormData({ name: '', cpf: '', age: '' });
            setCpfError('');
        } catch (error) {
            console.error('Error adding person:', error);
            alert('Error adding person. Please try again.');
        }
    };

    const handleChange = e => {
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
        <div>
            <h2>Add Person</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>CPF:</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
                {cpfError && <p style={{ color: 'red' }}>{cpfError}</p>}
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                <button type="submit">Add Person</button>
            </form>
        </div>
    );
};

export default AddPersonForm;
