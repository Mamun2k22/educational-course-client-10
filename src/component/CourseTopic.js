import React from 'react';
import { Link } from 'react-router-dom';

const CourseTopic = ({ course }) => {

    const { _id, total_view, title, author, details, thumbnail_url, rating } = course;
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <Link to={`/courses/${_id}`}></Link>
            </div>
        </div>
    );
};

export default CourseTopic;