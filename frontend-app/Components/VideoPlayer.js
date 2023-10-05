// import React, { useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import 'videojs-contrib-quality-levels';
// import { useGlobalContext } from '../context/global';
// import VideoJS from './VideoJS';

// function VideoPlayer() {
//     const { id } = useParams();
//     const { videos } = useGlobalContext();
//     const video = videos.find((vid) => vid._id === id);

//     // refs
//     const videoConRef = useRef(null);
//     const playerRef = useRef(null);

//     const handlePlayerReady = (player) => {
//         playerRef.current = player;

//         // You can handle player events here, for example:
//         player.on('waiting', () => {
//             console.log('player is waiting');
//             // Additional logic when the player is waiting
//             // For example, you can display a loading spinner or show a message to the user.
//         });

//         // Other player event handlers can be added here as needed
//     };

//     // Ensure that the videojs player is disposed when the component unmounts
//     useEffect(() => {
//         const player = playerRef.current;
//         return () => {
//             if (player) {
//                 player.dispose();
//             }
//         };
//     }, []);

//     return (
//         <div ref={videoConRef}>
//             <VideoJS options={{ /* Video.js options here */ }} onReady={handlePlayerReady} />
//         </div>
//     );
// }

// export default VideoPlayer;
