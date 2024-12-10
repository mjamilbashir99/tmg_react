import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({SetPlayStatus,HeroData,HeroCount,SetHeroCount,PlayStatus}) => {
  return (
    <div className="hero">
        <div className="hero-text">
            <p>{HeroData.text1}</p>
            <p>{HeroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>SetHeroCount(0)} className={HeroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>SetHeroCount(1)} className={HeroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>SetHeroCount(2)} className={HeroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick= {()=>SetPlayStatus(!PlayStatus)} src={PlayStatus?pause_icon:play_icon} alt="" />
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
