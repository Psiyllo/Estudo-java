import React, { useState, useEffect } from 'react';
import api from '../services/api';

const EditPersonForm = ({ id }) => {
    const [person, setPerson] = useState({});
    const [formData, setFormData] = useState({ firstName: '', lastName: '', cpf: '', age: '', telephone: '' });

    useEffect(() => {
        async function fetchPerson() {
            try {
                const response = await api.get(`/people/${id}`);
                setPerson(response.data);
                setFormData({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    cpf: response.data.cpf,
                    age: response.data.age,
                    telephone: response.data.telephone
                });
            } catch (error) {
                console.error('Error fetching person:', error);
            }
        }
        fetchPerson();
    }, [id]);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await api.put(`/people/${id}`, formData);
            alert('Person updated successfully!');
        } catch (error) {
            console.error('Error updating person:', error);
            alert('Error updating person. Please try again.');
        }
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Edit Person</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                <label>CPF:</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                <label>Telephone:</label>
                <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
                <button type="submit">Update Person</button>
            </form>
        </div>
    );
};

export default EditPersonForm;
