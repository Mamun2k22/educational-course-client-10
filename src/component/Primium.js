import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Primium = () => {
    const data = useLoaderData();
    const { name } = data;
    return (
        <div>
            <h1> {name} </h1>
        </div>
    );
};

export default Primium;