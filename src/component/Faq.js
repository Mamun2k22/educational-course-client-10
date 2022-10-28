import React from 'react';

const Faq = () => {
    return (
        <div>
            <div>
                <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg mt-8'>
                        <h2 className='text-2xl font-bold text-primary-300'>Will you deploy my react html tailwind css website?</h2>
                        <p ><span className='text-xl font-bold text-primary-400'>Ans:</span> <span className='text-xl font-semibold'>The </span>The website's deployment is not part of the package. But if you want I will only deploy your react tailwind website on Netlify.</p>
                    </div>



                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-primary-300'>02.Do you have any previous work in react html and tailwind css?</h2>
                        <p><span className='text-xl font-bold primary'>Ans:</span> <span className='text-xl font-semibold'>Yes</span>, I have done many projects in react html and tailwind css. Kindly contact me to see my previous projects.</p>
                    </div>
                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-primary-300'>03.What are the requirements do you need for my react html tailwind css website?</h2>
                        <p><span className='text-xl font-bold text-primary-400'>Ans:</span> <span className='text-xl font-semibold'>I</span>

                            <span>
                                will need all the requirements related to your websites like images, logos, and content for your website. Also please share the design or wireframe or mockup of your website if you have any. If you don't have then please contact me first and discuss your project.
                            </span>

                        </p>
                    </div>
                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-primary-300'>04.what is optional chaining in react js?</h2>
                        <p><span className='text-xl font-bold text-primary-400'>Ans:</span> <span className='text-xl font-semibold'>O</span>

                            <span>
                                ptional chaining (?.) The optional chaining operator ( ?. ) accesses an object's property or calls a function. If the object is undefined or null , it returns undefined instead of throwing an error.
                            </span>

                        </p>
                    </div>
                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-amber-300'>05.What is Context API?</h2>
                        <p><span className='text-xl font-bold text-primary-500'>Ans:</span> <span className='text-xl font-semibold'>T</span>

                            <span>
                                he React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                            </span>

                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
    // Done faq
};

export default Faq;