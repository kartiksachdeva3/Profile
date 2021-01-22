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
          
            <Carousel className={style.carsousels} infiniteLoop={true} showStatus={false} interval={'2800'} stopOnHover={false} emulateTouch={true} useKeyboardArrows={true} swipeable={true}>
                <ReactPlayer className={style.reactplayer} url='https://www.youtube.com/watch?v=CNqphnMwDX8' />
            
                <ReactPlayer className={style.reactplayer} url='https://www.youtube.com/watch?v=1KGI0vuTc3Q' /> 
            
                <ReactPlayer className={style.reactplayer} url='https://www.youtube.com/watch?v=YdzRrNFJQaI' /> 

            </Carousel>
        </div>
        </div>
    )
}
export default Extra