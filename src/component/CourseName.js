import React from 'react';

const CourseName = ({ coursename }) => {
    const { _id, name } = coursename;
    return (
        <div>
            <h1> {name}</h1>
        </div>
    );
};

export default CourseName;