import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const detailCourse = useLoaderData();
    const { _id, category_id, total_view, title, author, details, thumbnail_url, rating,
    } = detailCourse;

    return (
        <div>
            <div>
                <h1>{details}</h1>
            </div>
        </div>
    );
};

export default CourseDetails;