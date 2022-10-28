import React from 'react';
import { Link } from 'react-router-dom';

const CourseName = ({ coursename }) => {
    const { _id, name } = coursename;
    return (
        <div>
            <div className='switeh mb-5 bg-yellow-500 hover:bg-orange-500 p-1 rounded-lg'>
                <Link className=' font-bold p-1' to={`/courses/${_id}`}>{name}</Link>
            </div>
        </div>
    );
};

export default CourseName;