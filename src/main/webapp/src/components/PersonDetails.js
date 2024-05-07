import React, { useState, useEffect } from 'react';
import api from '../services/api';

const PersonDetails = ({ id }) => {
    const [person, setPerson] = useState({});

    useEffect(() => {
        async function fetchPerson() {
            try {
                const response = await api.get(`/people/${id}`);
                setPerson(response.data);
            } catch (error) {
                console.error('Error fetching person:', error);
            }
        }
        fetchPerson();
    }, [id]);

    return (
        <div>
            <h2>Person Details</h2>
            <p>Name: {person.name}</p>
            <p>CPF: {person.cpf}</p>
            <p>Age: {person.age}</p>
        </div>
    );
};

export default PersonDetails;
