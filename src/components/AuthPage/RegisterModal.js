import React, { useState } from 'react';
import registerService from '../../Services/AuthPage/RegisterService';


const RegistrationForm = ({ closeRegister }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        country: '',
        city: '',
        status: 1,
    });
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message

        try {
            const response = await registerService.register(formData);
            if(response.status === 200){
                closeRegister(); 
            }
        } catch (error) {

            setErrorMessage(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div class="registerHead">
                <div></div>
                <h2>Register</h2>
                <button class="close" onClick={closeRegister}>X</button>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                    />
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                    />
                    <button type="submit">Register</button>

                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
