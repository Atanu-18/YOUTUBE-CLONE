import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdPlaylistAddCheck } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";


function Sidebar() {
  const SidebarItems1 = [
    {
      id: 1,
      name: "Home",
      icon: <GoHomeFill />
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdSubscriptions />
    },
  ];
  const SidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <GoHomeFill />
    },
    {
      id: 2,
      name: "history",
      icon: <RiHistoryLine />
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdPlaylistAddCheck />
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdWatchLater />
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <AiOutlineLike />
    },
  ]
  const SidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />
    },
    {
      id: 4,
      name: "Film",
      icon: <PiFilmSlateLight />
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />
    },
    {
      id: 7,
      name: "Newspaper",
      icon: <FaRegNewspaper />
    },
    {
      id: 8,
      name: "Sports",
      icon: <TfiCup />
    },
    {
      id: 9,
      name: "Courses",
      icon: <PiLightbulbLight />
    },
    {
      id: 10,
      name: "Fashion & Beautify",
      icon: <SiStylelint />
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />
    }
  ]
  const SidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <PiMusicNoteLight />
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />
    }
  ]
  return (
    <div className='px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16'>

      {/* // home section */}
      <div className='items-center space-y-3'>
        {
          SidebarItems1.map((item) => {
            return (
              <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-full p-1.5'>
                <div className='text-2xl cursor-pointer' >{item.icon}</div>
                <span className='font-bold cursor-pointer'>{item.name}</span>
              </div>
            )
          })
        }
      </div>
      <br />
      <hr />
      {/* you section */}
      <div className='mt-3 items-center space-y-3'>
        <div className='flex items-center gap-3'>
          <h1 className='font-semibold text-xl'>You</h1>
          <FaChevronRight />
        </div>
        {
          SidebarItems2.map((item) => {
            return (
              <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-full p-1.5'>
                <div className='text-2xl cursor-pointer' >{item.icon}</div>
                <span className='font-bold cursor-pointer'>{item.name}</span>
              </div>
            )
          })
        }
      </div>
      <br />
      <hr />
      {/* //explore section */}
      <div className='mt-3 items-center space-y-3'>
        <div className='flex items-center gap-3'>
          <h1 className='font-semibold text-xl'>Explore</h1>
        </div>
        {
          SidebarItems3.map((item) => {
            return (
              <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-full p-1.5'>
                <div className='text-2xl cursor-pointer' >{item.icon}</div>
                <span className='font-bold cursor-pointer'>{item.name}</span>
              </div>
            )
          })
        }
      </div>
      <br />
      <hr />
      {/* //more section */}
      <div className='mt-3 items-center space-y-3'>
        <div className='flex items-center gap-3'>
          <h1 className='font-semibold text-xl'>More from Youtube</h1>
        </div>
        {
          SidebarItems4.map((item) => {
            return (
              <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-full p-1.5'>
                <div className='text-2xl cursor-pointer text-red-500' >{item.icon}</div>
                <span className='font-bold cursor-pointer'>{item.name}</span>
              </div>
            )
          })
        }
        <hr />
      </div>
      <br />

      <span className='font-semibold text-gray-500 text-xs'>About Press Copyright<br />Contact usCreator<br />AdvertiseDevelopers<br /> <br />
        <p>
          Terms Privacy Policy & Safety<br />How YouTube works<br />Test new features
        </p>
      </span>
      <br />
      <p className='text-xs text-gray-800 m-1'>© 2025 Atanu Mandal</p>


    </div>
  )
}

export default Sidebar