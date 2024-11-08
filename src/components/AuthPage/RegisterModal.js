import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AuthPage.css';

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [sex, setSex] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const formData = { name, surname, email, birthDate, sex, password };
        onRegister(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>

                    <label>
                        Surname:
                        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                    </label>

                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>

                    <label>
                        Birth Date:
                        <DatePicker
                            selected={birthDate}
                            onChange={(date) => setBirthDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select date"
                            required
                        />
                    </label>

                    <label>
                        Sex:
                        <select value={sex} onChange={(e) => setSex(e.target.value)} required>
                            <option value="" disabled>Select sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>

                    <div className="modal-buttons">
                        <button type="submit" className="register-button">Register</button>
                        <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
