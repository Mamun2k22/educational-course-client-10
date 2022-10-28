import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const purchase = useLoaderData();
    const { _id, author, category_id, details, name, thumbnail_url, title, rating } = purchase;

    const booking = (event) => {
        event.preventDefault()
        alert("Thanks for Payment!")

    };
    // const data = useLoaderData();
    // const { id, category_id, total_view, title, author, details, thumbnail_url, rating, } = data;
    // console.log(data.title);

    return (

        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h3 className='text-3xl font-semibold mx-auto'>Purchase</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Your Email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button onClick={booking} className="btn btn-primary">Purchase</button>
                    </div>

                    <div className="text-center lg:text-black">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{details}</p>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Premium;