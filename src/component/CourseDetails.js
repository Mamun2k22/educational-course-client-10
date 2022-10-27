import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const detailCourse = useLoaderData();
    const { _id, category_id, total_view, title, author, details, thumbnail_url, rating,
    } = detailCourse;

    return (
        <div>
            <div className='grid  justify-items-center mb-10 mt-10'>
                <div className="card card-compact  lg:w-96 md:w-80 sm-64 bg-base-100 shadow-xl border p-2">
                    <div className='flex justify-between'>
                        <div className='flex gap-2 ml-2 mb-1 items-center'>
                            <figure><img className='w-4 rounded-full' src={author.img} alt="Courses" /></figure>
                            <p className='mb-0  text-white'>{author?.name}</p>
                        </div>
                        <div className='btn'>

                        </div>

                    </div>
                    <figure className='mt-2'><img src={thumbnail_url} alt="Courses" /></figure>
                    <div className="card-body">
                        <h2 className="card-title  text-white">{title}</h2>
                        <div>
                            <p className=' text-white'>{details}</p>
                        </div>
                        <div className="flex items-center  justify-between  mt-2">
                            <div>
                                <p className='flex gap-1 items-center  text-white'> {rating.number}</p>
                            </div>
                            <div>
                                <p className=' text-white'>Price: {rating.price}$</p>
                            </div>

                            <div>

                                <Link to={`/courses/pd/${_id}`}>
                                    <button className="btn btn-primary">Get premium access</button>
                                </Link>



                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CourseDetails;