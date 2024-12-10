import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({PlayStatus,HeroCount}) => {
  console.log(image3);
  if(PlayStatus){
    return (
      <video className='background' autoPlay loop muted>
          <source src={video1} type="video/mp4"/>
      </video>
    )
  }
  else if(HeroCount === 0){
    return <img src={image1} alt="Image 1" className='background'/>
  }
  else if(HeroCount === 1){
    return <img src={image2} alt="Image 2" className='background'/>
  }
  else if(HeroCount === 2){
    // <h1>Hello</h1>
    return <img src={image3} alt="Image 3" className='background'/>
  }
}

export default Background
