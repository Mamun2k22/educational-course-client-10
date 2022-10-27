import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg mt-8'>
                        <h2 className='text-2xl font-bold text-amber-300'>1.what is cors?</h2>
                        <p ><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>CORS </span> stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                    </div>

                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-amber-300'>2.What other options do you have to implement authentication? </h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'></span>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            ---Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                    </div>

                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-amber-300'>3.How does the private route work?</h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>The</span> private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </div>
                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-amber-300'>4. What is Node? How does Node work?</h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'></span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;