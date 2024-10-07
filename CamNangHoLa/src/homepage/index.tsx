import Slider from './slider/index.tsx'
import './style.scss'

export default function HomePage(){
    return(
        <div className="homepage">
            <div className="slider">
            <Slider/>
            </div>
        </div>
    )
}