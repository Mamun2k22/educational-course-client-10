import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseName from './CourseName';
import CourseTopic from './CourseTopic';

const Courses = () => {
    const courses = useLoaderData();
    const { _id } = courses;
    return (
        <div className='flex ml-2'>

            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    courses.map(course => <CourseTopic
                        key={course._id}
                        course={course}

                    ></CourseTopic>)
                }

            </div>


            <div className='ml-4'>

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
// Course done

export default Courses;