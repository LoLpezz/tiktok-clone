import Video1 from "./videos/drift.mp4"
import Video2 from "./videos/LoboCinzento.mp4"
import Video3 from "./videos/kammeran.mp4"
import Video4 from "./videos/luke-miller.mp4"
import Video5 from "./videos/trem.mp4"

import Img1 from "./images/tereza.jpg"
import Img2 from "./images/jorge.jpg"
import Img3 from "./images/lauria.jpg"
import Img4 from "./images/simon.jpg"
import Img5 from "./images/andrea.jpg"

const listaVideos = [
    {
        id: 1,
        userName: "Tereza",
        imgSrc: Img1,
        description: "Drift é uma técnica de direção que envolve controlar intencionalmente a derrapagem ou escorregamento das rodas de um veículor.",
        videoSrc: Video1,
        music: "Som original - Tokyo Drift (Fast & Furious)",
        likes: Math.round(Math.random() * 1000),
        coments: Math.round(Math.random() * 1000),
        save: Math.round(Math.random() * 1000),
        share: Math.round(Math.random() * 1000)
    },
    {
        id: 2,
        userName: "Jorge",
        imgSrc: Img2,
        description: "Uma curiosidade fascinante sobre o lobo cinza é a complexa estrutura social de suas alcateias. Essas alcateias são geralmente compostas por um par dominante, conhecido como alfa,.",
        videoSrc: Video2,
        music: "Som original - Matilha dos lobos",
        likes: Math.round(Math.random() * 1000),
        coments: Math.round(Math.random() * 1000),
        save: Math.round(Math.random() * 1000),
        share: Math.round(Math.random() * 1000)
    },
    {
        id: 3,
        userName: "Lauria",
        imgSrc: Img3,
        description: "Os peixes são animais aquáticos vertebrados que respiram através de brânquias e são conhecidos por sua ampla diversidade de espécies, tamanhos e habitats.",
        videoSrc: Video3,
        music: "Bea Duarte - Mar",
        likes: Math.round(Math.random() * 1000),
        coments: Math.round(Math.random() * 1000),
        save: Math.round(Math.random() * 1000),
        share: Math.round(Math.random() * 1000)
    },
    {
        id: 4,
        userName: "Simon",
        imgSrc: Img4,
        description: "Fotógrafos são profissionais ou entusiastas que capturam momentos, emoções e histórias por meio de imagens.",
        videoSrc: Video4,
        music: "Snowfall - Oneheart",
        likes: Math.round(Math.random() * 1000),
        coments: Math.round(Math.random() * 1000),
        save: Math.round(Math.random() * 1000),
        share: Math.round(Math.random() * 1000)
    },
    {
        id: 5,
        userName: "Andrea",
        imgSrc: Img5,
        description: "O trem das 11.",
        videoSrc: Video5,
        music: "Som original - Train",
        likes: Math.round(Math.random() * 1000),
        coments: Math.round(Math.random() * 1000),
        save: Math.round(Math.random() * 1000),
        share: Math.round(Math.random() * 1000)
    }
    
  ]

  export default listaVideos