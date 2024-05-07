import React from 'react';
import PersonList from './components/PersonList';
import AddPersonForm from './components/AddPersonForm';

const App = () => {
    return (
        <div>
            <h1>Person Management App</h1>
            <PersonList />
            <AddPersonForm />
        </div>
    );
};

export default App;
