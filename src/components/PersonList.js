import React, { useState, useEffect } from 'react';
import api from '../services/api';

const PersonList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchPeople() {
            try {
                const response = await api.get('/people');
                setPeople(response.data);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        }
        fetchPeople();
    }, []);

    return (
        <div>
            <h2>People List</h2>
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        {person.name} - {person.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonList;
