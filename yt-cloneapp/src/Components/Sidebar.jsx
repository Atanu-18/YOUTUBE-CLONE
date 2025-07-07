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
import { SiSemanticscholar } from "react-icons/si";
import { GiAmpleDress } from "react-icons/gi";
import { PiFilmSlateBold } from "react-icons/pi";

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
      icon: <PiFilmSlateBold />
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
      icon: <SiSemanticscholar />
    },
    {
      id: 10,
      name: "Fashion & Beautify",
      icon: <GiAmpleDress />
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />
    }
  ]
  return (
    <div className='px-6 w-[15%]'>

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
          <FaChevronRight/>
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
      {/* <GoHomeFill />
      <SiYoutubeshorts />
      <MdSubscriptions />
      <FaChevronRight />
      <FaYoutube />
      <SiYoutubestudio />
      <SiYoutubekids />
      <SiYoutubemusic />
      <SiTrendmicro />
      <HiOutlineShoppingBag />
      <PiMusicNoteLight />
      <PiFilmSlateLight />
      <CgMediaLive />
      <SiYoutubegaming />
      <FaRegNewspaper />
      <TfiCup />
      <PiLightbulbLight />
      <SiStylelint />
      <MdPodcasts /> */}






    </div>
  )
}

export default Sidebar