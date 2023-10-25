import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";

const VideoCard = ({video}) => {
  console.log("vsk", video);
  console.log("title", video?.title);
  console.log("thumbnail", video?.thumbnails?.[1]?.url);

  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src={video?.thumbnails?.[1]?.url} />
            {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds} />
            )}
          </div> 
          <div className='flex text-white mt-3'>
            <div className="flex items-start">
              <div className="className='flex h-9 w-9 rounded-full overflow-hidden ">
                <img className='="h-full w-full object-cover'
                src={video?.author?.avatar[0]?.url}  alt="Author Avatar"/>
             </div>
            </div>
            <div className="flex flex-col ml-3  overflow-hidden">
              <span className='text-sm font-bold line-clamp-2'>
                {video?.title}

               
              </span>
              <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>
                )}
              </span>
            </div>
          </div> 
           
          </div>
      </Link>
     
    </div>
  )
}

export default VideoCard