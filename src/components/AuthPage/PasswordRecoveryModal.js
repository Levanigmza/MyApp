import React from 'react';
import './AuthPage.css';

const PasswordRecovery = ({ closeRecovery }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div class="recoveryheader">
                    <div></div>
                    <h2>Recover Password</h2>
                    <button class="close" onClick={closeRecovery}>X</button>
                </div>

                <form>
                    <input type="email" placeholder="Email" />
                    <button type="submit">Send Recovery Link</button>
                </form>
            </div>
        </div>
    );
};

export default PasswordRecovery;
