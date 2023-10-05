// import React from 'react'
// import { Link } from 'react-router-dom';
// import styled from 'styled-components'
// import { useGlobalContext } from '../context/global';

// function Videos() {
//     const {videos} = useGlobalContext()

//     return (
//         <VideosStyled>
//             <div className="videos-container">
//                 {videos.map((video) => {
//                     return <Link key={video._id} to={`/videos/${video._id}`}>
//                         <div  className="video">
//                             <video src={video.videoUrl}></video>
//                             <h4>{video.title}</h4>
//                             <p>{video.description}</p>
//                         </div>
//                     </Link>
//                 })}
//             </div>
//         </VideosStyled>
//     )
// }

// const VideosStyled = styled.div`
//     .videos-container{
//         display: grid}`;