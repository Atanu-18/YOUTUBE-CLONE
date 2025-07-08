import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'; // ✅ 'Video' with capital V

import { useAuth } from '../context/AuthProvider'

function Home() {
    const {data} = useAuth()
    console.log(data);
    
  return (
    <div className='flex'>
        <Sidebar/>
        <div>
            {
                data.map((item) => {
                    if(item.type !== "video") return false;
                    return (
                        <Video key={item.id} video={item?.video} />
                    )
                    
                })
            }
        </div>
    </div>
  )
}

export default Home