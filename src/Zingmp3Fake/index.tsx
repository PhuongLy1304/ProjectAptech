// // import React from 'react'
// import axios from "axios"
// import './index.css'
// import React, { useEffect } from "react";
// interface TMusic{
//     title: string,
//     srcZing: string,
//     singer: string,
//     time: string,
//     avatar: string,
//     id: number
// }
// const ZingMp3 = ({music}:{music:TMusic})=>{
//     return(
//         <div className="container">
//             <img className="images"
//               width={100}
//                     height={100}
//              src={music.avatar} alt={music.singer} />
//             <div className="SingerAndTitle">
//                 <b>{music.title}</b>
//                 <p>{music.singer}</p>
//             </div>
//             <audio controls>
//                 <source src={music.srcZing} />
//             </audio>
//         </div>
//     )
// }
// const CallApiZingMp3Fake = () => {

//     const [musics, setMusics] = React.useState<TMusic[]>([]);
    
//     useEffect(()=>{
//         const url = "https://65ab2e92fcd1c9dcffc6287b.mockapi.io/api/p1/Zingmp3Fake";
//         const options = {
//             method: "GET",
//         };
//         axios.get(url)
//         .then(function(response){
//             console.log(response);
//             setMusics(response.data);
//         })
//         .catch(function(err){
//             console.log(err);
//         })
//     },[])
//   return (
//     <div>
//         <main className="">
//             <div className="">
//                 {
//                     musics.length > 0 && musics.map((music)=>{
//                         return(
//                             <ZingMp3 key={music.id} music={music}/>
//                         )
//                     })
//                 }
//             </div>
//         </main>
//     </div>
//   )
// }

// export default CallApiZingMp3Fake