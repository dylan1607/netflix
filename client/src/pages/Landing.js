import './Landing.scss'
import logo from '../image/netflix.svg'
import { ArrowForwardIos } from '@material-ui/icons'
import { useState, useRef } from 'react'
const Landing = () => {
    const [email, setEmail] = useState("");
    const emailRef = useRef();
    return (
        <div className='landing'>
            <div className="landing__top">
                <img src={logo} alt="logo" />
                <div className="landing__top--signin">
                    <select name="lang" id="lang">
                        <option value="english">English</option>
                        <option value="vietnam">Vietnam</option>
                    </select>
                    <button>Sign In</button>
                </div>
            </div>
            <div className="landing__container">
                <h1>Unlimited movies, Tv shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <span>Ready to watch? Enter your email to create or restart your membership.</span>
                <div className="landing__container--input">
                    <input type="email" placeholder='Email address' ref={emailRef}/>
                    <button className='input__register' onClick={() => setEmail(emailRef.current.value)}>
                        <span>Get Started</span>
                        <ArrowForwardIos />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing
