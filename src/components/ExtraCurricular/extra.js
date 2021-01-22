import React,{useEffect} from 'react' 
import {Carousel} from 'react-responsive-carousel'
import Aos from 'aos'
import 'aos/dist/aos.css'
import style from './extra.module.css'
import ReactPlayer from 'react-player/youtube'
import "../styles/carousel.css";


const Extra = () => {
    useEffect(() => {
        Aos.init({duration : 1500})
       }, [])
    return (
        <div data-aos="fade-right"  className={style.container}> 
        
        <h3 style={{ color : "#90EE90"}}>Here are some videos. Check out my Youtube Channel as well.</h3>
        <br></br>
        <div className={style.carouselcontainer} >
          
            <Carousel className={style.carsousels} infiniteLoop={true} >
                <ReactPlayer url='https://www.youtube.com/watch?v=CNqphnMwDX8' />
            
                <ReactPlayer url='https://www.youtube.com/watch?v=1KGI0vuTc3Q' /> 
            
                <ReactPlayer url='https://www.youtube.com/watch?v=YdzRrNFJQaI' /> 

            </Carousel>
        </div>
        </div>
    )
}
export default Extra