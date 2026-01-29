"use client";

import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
import { CgPlayButtonO } from "react-icons/cg";

const videos = [
  {
    id: 1,
    title: "Sample Test ",
    url: "/hls/sample/index.m3u8",
  },
  {
    id: 2,
    title: "Army Video",
    url: "/hls/army/index.m3u8",
  },
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Video Streaming
      </h1>

      <div className="w-full max-w-4xl mx-auto mb-8 rounded-xl shadow-lg bg-black">
        <VideoPlayer src={selectedVideo.url} />
      </div>

      <ul className="max-w-4xl mx-auto bg-white rounded-xl shadow-md divide-y">
        {videos.map((video) => (
          <li
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 transition"
          >
            <CgPlayButtonO className="text-xl text-gray-600" />
            <span className="text-gray-800 font-medium">
              {video.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoPage;


{/* <video controls>
    <source src="/videos/sample-mp4.mp4" type="video/mp4" />
</video> */}



{/* <video
        key={selectedVideo.id}
        controls
        autoPlay
        className="w-full max-w-4xl mx-auto mb-8 rounded-xl shadow-lg bg-black"
      >
        <source src={selectedVideo.url} />
      </video> */}

// {
//   id: 1,
//   title: "Intro to streaming",
//   url: "https://www.w3schools.com/html/mov_bbb.mp4",
// },
// {
//   id: 2,
//   title: "Live Streaming Basics",
//   url: "https://www.w3schools.com/html/movie.mp4",
// },
// {
//   id: 3,
//   title: "Video streaming biggerBlazes",
//   url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
// },
// {
//   id: 4,
//   title: "Video streaming biggerJoyrides",
//   url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
// },