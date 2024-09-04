import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file for styling

function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== reenterPassword) {
            alert("Passwords do not match!");
        } else {
            // Handle form submission (e.g., send data to a server)
            console.log({ email, phone, password });
            alert("Registration successful!");
        }
    };

    return (
        <div className="registration-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Re-enter Password"
                    value={reenterPassword}
                    onChange={(e) => setReenterPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
