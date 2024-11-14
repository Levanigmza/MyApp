import React, { useState } from 'react';
import './AuthPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PasswordRecovery from './PasswordRecoveryModal';
import RegisterModal from './RegisterModal';
import MouseCursor from './MouseCursor';


const AuthPage = () => {
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isRecoveryOpen, setRecoveryOpen] = useState(false);

    const openRegister = () => setRegisterOpen(true);
    const closeRegister = () => setRegisterOpen(false);
    const openRecovery = () => setRecoveryOpen(true);
    const closeRecovery = () => setRecoveryOpen(false);

    const handleRegister = (formData) => {
        console.log('Registering user:', formData);
    };




    return (
        <div className="auth-page">
            <Header />
            <div className="auth-container">
                {/* Left Side Image Section */}
                <div className="auth-image">
                    <img src="/back1.jpg" alt="Login Illustration" />
                </div>

                <div class="animateicon1">
                    <img src="/chat.png" alt="Login Illustration" />
                    <p>"Experience seamless, real-time conversations with friends, family, and colleagues, all in one place, for a more connected world."</p>

                </div>
                <div class="animateicon3">
                    <img src="/group.png" alt="Login Illustration" />
                </div>

                <div class="animateicon2">
                    <p>"Connect Instantly, Anytime, Anywhere with Our Chat App!"</p>
                    <img src="/live-chat.png" alt="Login Illustration" />
                </div>



                {/* Right Side Form Section */}
                <div className="auth-form">
                    <h1 className="auth-title">Welcome Back!</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button className="auth-button" type="submit">Login</button>
                    </form>
                    <div className="recovery">
                        <button className="recovery-button" onClick={openRecovery}>Forgot Password?</button>
                    </div>
                    <div className="recovery">
                        <button className="register" onClick={openRegister}>Register</button>
                    </div>
                </div>
            </div>

            {isRecoveryOpen && (
                <PasswordRecovery closeRecovery={closeRecovery} />
            )}
            {isRegisterOpen && (
                <RegisterModal closeRegister={closeRegister} />
            )}

            <Footer />
            <MouseCursor />

        </div>
    );
};

export default AuthPage;
