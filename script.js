
// audioElement.play();

let songIndex=0;
let audioElement= new Audio("1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let prevSong=document.getElementById("previousSong");
let neSong=document.getElementById("nextSong")
let songItem= Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {
        songName:'salam-e-Ishq' ,
        filePath:"1.mp3" ,
        coverPath:"1.jpg"
    },
     {
        songName:'rabba rakha' ,
        filePath:"2.mp3" ,
        coverPath:"2.jpg"
    },
     {
        songName:'Yeh delhi hai' ,
        filePath:"3.mp3" ,
        coverPath:"3.jpg"
    },
     {
        songName:'Yeh mumbai hai' ,
        filePath:"4.mp3" ,
        coverPath:"4.jpg"
    },
     {
        songName:'Yeh jamshedpur hai' ,
        filePath:"5.mp3" ,
        coverPath:"5.jpg"
    }
]

//Handle play/pause click

masterPlay.addEventListener("click", (e)=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play")
    }
})

songItem.forEach((element, index)=>{
    element.getElementsByTagName("img")[0].src=songs[index].coverPath;
    element.querySelectorAll("span.songName")[0].innerHTML=songs[index].songName

    // element.src=songs[index].coverPath;


})


//Listen to events 

audioElement.addEventListener("timeupdate", ()=>{

    progress=parseInt((audioElement.currentTime/ audioElement.duration)*100);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener("change", (e)=>{

    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, index)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play")
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, index)=>{
    element.addEventListener("click", (e)=>{

        //From e.target we come to know which song has been played
        makeAllPlays();
        songIndex=index;
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        let path=songs[index].filePath;
        audioElement.src=path;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause")
    })
})

prevSong.addEventListener("click", (e)=>{

    if(songIndex!==0)
    {
        songIndex--;
    }

        makeAllPlays();
        Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, index)=>{
            if(index===songIndex)
            {
                element.classList.remove("fa-play");
                element.classList.add("fa-pause")
            }
        })
        let path=songs[songIndex].filePath;
        audioElement.src=path;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause")
        // audioElement.play();

//         myProgressBar.value=0;
//         audioElement.addEventListener("timeupdate", ()=>{

//     progress=parseInt((audioElement.currentTime/ audioElement.duration)*100);
//     myProgressBar.value =progress;
// })

// myProgressBar.addEventListener("change", (e)=>{

//     audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
// })


    
})

neSong.addEventListener("click", (e)=>{

    if(songIndex!==songs.length-1)
    {
        songIndex++;
    }
  makeAllPlays();
        Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, index)=>{
            if(index===songIndex)
            {
                element.classList.remove("fa-play");
                element.classList.add("fa-pause")
            }
        })
        let path=songs[songIndex].filePath;
        audioElement.src=path;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");   
 })