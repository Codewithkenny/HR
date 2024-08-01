import  { useState } from 'react';
import axios from 'axios';

const Support = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/support', formData);
            setSubmitStatus('Support request submitted successfully');

            // Clear the status message after 3 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);

            // Reset the form fields
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting support request:', error);
            setSubmitStatus('Error submitting support request');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Support & Help</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                {submitStatus && <p className="mb-4 text-green-500">{submitStatus}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            rows="4"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Support;
