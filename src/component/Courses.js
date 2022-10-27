import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseName from './CourseName';
import CourseTopic from './CourseTopic';

const Courses = () => {
    const courses = useLoaderData();
    const { _id } = courses;
    return (
        <div className='grid grid-cols-5'>

            <div className='cols-span-4'>
                <div className='grid lg:grid-cols-3'>
                    {
                        courses.map(course => <CourseTopic
                            key={course._id}
                            course={course}

                        ></CourseTopic>)
                    }

                </div>
            </div>

            <div>

                {
                    courses.map(ac => <CourseName
                        key={ac._id}
                        coursename={ac}
                    ></CourseName>)
                }
            </div>

        </div>
    );
};

export default Courses;