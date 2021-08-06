import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './Featured.scss'

export const Featured = ({type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className="featured__category">
                    <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                    <select name='genre' id='genre'>
                        <option value="">Genre</option>
                        <option value="Action">Action</option>
                        <option value="Crime">Crime</option>
                        <option value="Dramas">Dramas</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>
            )}
            <img 
                src='https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfn0bb8IO8QB1lUxGbmo0489Ab5rA98IUFAX_MfUdTO1Y7OSFaM6wtEJjHYqdgyToKsj1guXC9hnzMM08-5jEv77qKhh.webp?r=977' 
                alt='img-main'
            />
            <div className='featured__info'>
                <img
                    src='https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTg2lsBj9VIcdiDe14AFfPt_lPfA7SVbupFUlT95NADSDq5l3frTNLzYDXI10MUfAt-brDzhtxn6QoSx_xdDEdq0dhk5W4X3yrRS2kTkp2GgFooqrLP_Bxv9mWhQ0yV7uw10_L1rxx8ZAJotiAnY-EDIpk2KhxtHkclbBW_qrJe1Qw.webp?r=59f'
                    alt='img-title'
                />
                <span className='featured__info--desc'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto dolores adipisci 
                    voluptates quam reprehenderit quae ullam corrupti facilis vero.
                </span>
                <div className="featured__info--buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
