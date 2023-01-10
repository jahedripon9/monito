import React from 'react';

const HeroSection = () => {
    return (
        <div className='container mx-auto md:px-20 bg-orange-100'>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">One More Friend <br />
                            Thousands More Fun!
                        </h1>
                        <p class="mb-8 leading-relaxed">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-black bg-transparent	 border-solid border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-100 rounded-3xl text-lg">View Intro</button>
                            <button class="ml-4 inline-flex text-white bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded-3xl text-lg">Explore Now</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mb-10">
                        <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/ZJp6QV7/image.png" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;