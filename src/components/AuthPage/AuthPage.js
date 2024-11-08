import React, { useState } from 'react';
import './AuthPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PasswordRecovery from './PasswordRecoveryModal';

const AuthPage = () => {
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isRecoveryOpen, setRecoveryOpen] = useState(false);

    const openRegister = () => setRegisterOpen(true);
    const closeRegister = () => setRegisterOpen(false);
    const openRecovery = () => setRecoveryOpen(true);
    const closeRecovery = () => setRecoveryOpen(false);

    return (
        <div className="auth-page">
            <Header />
            <div className="auth-container">
                {/* Left Side Image Section */}
                <div className="auth-image">
                    <img src="/back1.jpg" alt="Login Illustration" />
                </div>

                {/* Right Side Form Section */}
                <div className="auth-form">
                    <h1 className="auth-title">Welcome Back!</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button className="auth-button" type="submit">Login</button>
                        <button className="recovery-button" onClick={openRecovery}>Forgot Password?</button>
                    </form>
                </div>
            </div>

            {isRecoveryOpen && (
                <PasswordRecovery closeRecovery={closeRecovery} />
            )}

            <Footer />
        </div>
    );
};

export default AuthPage;
