import React from 'react'
import { Link } from 'react-router-dom';

function Video({ video }) {
    console.log("VideoId:", video?.videoId);



    return (
        <div className=''>
            <Link to={`/playingvideo/${video?.videoId}`}>
                <div className='flex flex-col'>
                    <div className='h-48 md:h-56 md: rounded-xl hover:rounded-none duration-300 overflow-hidden'>
                        
                        <img className='h-full w-full' src={`https://img.youtube.com/vi/${video?.videoId}/hqdefault.jpg`} alt="Video Thumbnail" />


                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Video