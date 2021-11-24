import React from "react";
import NavigationBar from "../../page_components/customer/NavigationBar";
import Footer from "../../page_components/customer/Footer";

const SignInPage = props => {
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

export default SignInPage;