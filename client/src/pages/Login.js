import './Login.scss'
import logo from '../image/netflix.svg'
const Login = () => {
    return (
        <div className='login'>
            <div className="login__top">
                <img src={logo} alt="logo" />
            </div>
            <div className="login__container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number'/>
                    <input type="password" placeholder='Password' />
                    <button className='login__container--btn'>Sign In</button>
                    <span>
                        New to Netflix ? 
                        <b> Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <b>Learn more.</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login
