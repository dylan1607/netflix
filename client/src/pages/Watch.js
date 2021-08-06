import { ArrowBackOutlined } from '@material-ui/icons'
import './Watch.scss'

export const Watch = () => {
    return (
        <div className='watch'>
            <div className="watch__back">
                <ArrowBackOutlined />
                Home
            </div>
            <iframe title='trailer' frameborder='0'
                src="https://www.youtube.com/embed/WcfRH2tgIxA?autoplay=1&mute=0&controls=1&modestbranding=1">
            </iframe>
        </div>
    )
}
export default Watch
