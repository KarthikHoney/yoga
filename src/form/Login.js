import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ onLogin }) {
    const navigate = useNavigate();

    const goToReg = () => {
        navigate('/registration');
    }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Set default login credentials
    const defaultCredentials = {
        name: 'prasath',
        upassword: 'password'
    };

    const initialFormData = {
        name: defaultCredentials.name,
        upassword: defaultCredentials.upassword,
        role: '' // Added role for radio buttons
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if(value){
            setErrors({...errors, [name] : ""});
        }
    };

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.upassword) tempErrors.upassword = "Password is required";
        if (!formData.role) tempErrors.role = "Role is required"; // Added validation for role
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Check against default credentials for temporary login
            if (formData.name === defaultCredentials.name && formData.upassword === defaultCredentials.upassword) {
                toast("Login Successfully", { autoClose: 2000 });
                setFormData(initialFormData);
                if (onLogin) onLogin(); // Call the onLogin function passed as a prop
            } else {
                toast.error("Invalid credentials");
            }
        }
    };

    return (
        <div className='login-page d-flex justify-content-center align-items-center min-vh-100'>
            <Form autoComplete='off' onSubmit={handleSubmit}>
                <h2 className="text-center my-3">Login Page</h2>
                <div className="col-12 form-controls">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='mb-2'
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="col-12 form-controls">
                    <label htmlFor="upassword">Password</label>
                    <div className='input-group mb-2'>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="upassword"
                            name="upassword"
                            value={formData.upassword}
                            onChange={handleChange}
                            className='form-control'
                        />
                        <span className="input-group-text" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </span>
                    </div>
                    {errors.upassword && <div className="error">{errors.upassword}</div>}
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <input
                            type="radio"
                            id="individualstudent"
                            name="role"
                            className="w-auto"
                            value="individualstudent"
                            checked={formData.role === "individualstudent"}
                            onChange={handleChange}
                        />
                        <label htmlFor="individualstudent" className="m-0">Student</label>
                    </div>
                    <div className="col-md-6 d-flex">
                        <input
                            type="radio"
                            id="trainerstudent"
                            name="role"
                            className="w-auto"
                            value="trainerstudent"
                            checked={formData.role === "trainerstudent"}
                            onChange={handleChange}
                        />
                        <label htmlFor="trainerstudent" className="m-0">Trainer Student</label>
                    </div>
                    {errors.role && <div className="error">{errors.role}</div>}
                </div>
                <a href="#" className='text-right' onClick={goToReg}>Create an Account?</a>
                <button type='submit' className='mt-3 ht_btn'>Submit</button>

            </Form>
            <ToastContainer />
        </div>
    );
}
