import { useState } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from 'store/users/config'

const SignIn = ({onLogin}:any) => {
const [login, setLogin] = useState<string>('')
const [password, setPassword] = useState<string>('')
const dispatch = useDispatch()

const handleSubmit = (e:any)=>{
    e.preventDefault()
  
    dispatch(
        usersActions.signIn({
        name:login,
        password:password,
    })
     
    )
    onLogin({ name: login, password:password });
}
    return (
        <div >
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="User name / Email" onChange={(e:any)=>setLogin(e.target.value)}/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" onChange={(e:any)=>setPassword(e.target.value)}/>
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <span className="social-login__icon fab fa-instagram"></span>
                                <span className="social-login__icon fab fa-facebook"></span>
                                <span className="social-login__icon fab fa-twitter"></span>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignIn;