/* import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";
import styles from './css_modules/SignUpPage.module.css';

const SignInPage = props => {

    const [state, setState] = useState({
        email: "",
        password: ""
      });
    
      const handleInputChange = (event) => {
        setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        axios.post('https://voulutora-backend.herokuapp.com/customer/login', {}, {
          auth: {
            username: state.email,
            password: state.password
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log(err));
      };

    return (
        <div className={styles.container}>
            <NavigationBar/>
            <div className={styles.logInForm}>
                <p>EMAIL</p>
                <input type="email" ></input>
                <p>PASSWORD</p>
                <input type="password" ></input>
                <button>LOGIN</button>
                <p>Do not have account yet?</p>
                <button>Create account</button>
            </div>
            <Footer/>
        </div>
    )
}

export default SignInPage; */