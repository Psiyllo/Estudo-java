import React, { useState } from 'react';
import api from './services/api';

const AddPersonForm = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', cpf: '', age: '', phone: '' });
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
            setFormData({ firstName: '', lastName: '', cpf: '', age: '', phone: '' });
            setCpfError('');
        } catch (error) {
            console.error('Error adding person:', error);
            alert('Error adding person. Please try again.');
        }
    };

    const handleChange = e => {
        let value = e.target.value;
        if (e.target.name === 'cpf') {
            // Formatar automaticamente o CPF
            value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            }
        }
        setFormData({ ...formData, [e.target.name]: value });
        if (e.target.name === 'cpf' && value.length !== 11) {
            setCpfError('CPF deve ter 11 caracteres');
        } else {
            setCpfError('');
        }
    };

    return (
        <div>
            <h2>Add Person</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <label>CPF:</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
                {cpfError && <p style={{ color: 'red' }}>{cpfError}</p>}
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                <button type="submit">Add Person</button>
            </form>
        </div>
    );
};

export default AddPersonForm;
