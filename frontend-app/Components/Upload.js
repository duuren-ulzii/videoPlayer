// import React from 'react'
// import styled from 'styled-components'
// import { useGlobalContext } from '../context/global';
// import Button from './Button';

// function Upload() {
//     const [video, setVideo] = React.useState(null);
//     const [title, setTitle] = React.useState('');
//     const [description, setDescription] = React.useState('');
//     const [label, setLabel] = React.useState('Upload your video...');
//     const [loading, setLoading] = React.useState(false);

//     const {getAllVideos} = useGlobalContext()

//     const handleTextChange = name => e => {
//         if(name === 'title'){
//             setTitle(e.target.value)
//         }else{
//             setDescription(e.target.value)
//         }
//     }

//     const handleVideo = (e) => {
//         setVideo(e.target.files[0])
//         setLabel('Your Video: ' + e.target.files[0].name)
//     }

//     const handleUpload = async (e) => {}}