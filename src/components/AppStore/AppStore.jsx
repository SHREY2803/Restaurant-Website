import React from 'react';
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Gif from "../../assets/mobile_bike.gif";

function AppStore(){
    return(
        <>
        <div className="bg-gray-100 dark:bg-gray-800 py-14">
            <div className="container">
                <div className="grid grid-cols-1
                sm:grid-cols-2 items-center gap-4">
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-500 text-gray-700'>Eatery Zone is Available for Android
                        </h1>
                        <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                        <a href="#">
                            <img 
                            src={PlayStoreImg} 
                            alt="platstore"
                            className='max-w-[150px] sm:max-w-[120px] md:max-w-[160px] hover:scale-105 duration-200' />
                        </a>
                        <a href="#">
                            <img 
                            src={AppStoreImg} 
                            alt="platstore"
                            className='hover:scale-105 duration-200 max-w-[150px] sm:max-w-[120px] md:max-w-[160px]' />
                        </a>
                    </div>
                    </div>
                    <div>
                        <img src={Gif} alt="gif" className='max-w-[300px] mx-auto rounded-xl hover:scale-105 duration-200' />

                    </div>   
                </div>
            </div>
        </div>
        </>
    )

}
export default AppStore