// import React, { useEffect } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// export const VideoJS = (props) => {
//     const videoRef = React.useRef(null);
//     const playerRef = React.useRef(null);
//     const { options, onReady } = props;

//     useEffect(() => {
//         if (!playerRef.current) {
//             const videoElement = document.createElement("video");
//             videoElement.classList.add('video-js');
//             videoRef.current.appendChild(videoElement);

//             const player = playerRef.current = videojs(videoElement, options, () => {
//                 videojs.log('player is ready');
//                 onReady && onReady(player);
//             });
//         } else {
//             const player = playerRef.current;
//             // Handle changes in the options prop here
//             player.pause(); // Pause the player before making changes
//             player.src(options.src); // Update video source
//             player.load(); // Load the updated video
//             player.play(); // Play the updated video
//         }

//         // Clean up on component unmount
//         return () => {
//             if (playerRef.current) {
//                 playerRef.current.dispose(); // Dispose the player on unmount
//             }
//         };
//     }, [options, onReady]); // Re-run the effect when options or onReady callback change

//     return <div data-vjs-player ref={videoRef} />;
// };
