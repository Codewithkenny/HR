import { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        date: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch events
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

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
            setLoading(true);
            await axios.post('http://localhost:5000/api/events', formData);
            setSubmitStatus('Event added successfully');
            setFormData({ title: '', date: '' });
            const response = await axios.get('http://localhost:5000/api/events');
            setEvents(response.data);
            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        } catch (error) {
            console.error('Error adding event:', error);
            setSubmitStatus('Error adding event');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Event Form */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
                    {submitStatus && <p className="mb-4 text-green-500">{submitStatus}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Event Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Event Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                            {loading ? 'Adding...' : 'Add Event'}
                        </button>
                    </form>
                </div>

                {/* Events List */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                    {loading ? (
                        <p>Loading events...</p>
                    ) : events.length === 0 ? (
                        <p>No events scheduled.</p>
                    ) : (
                        <ul>
                            {events.map(event => (
                                <li key={event.id} className="mb-4 p-4 border-b border-gray-300">
                                    <h3 className="text-xl font-semibold">{event.title}</h3>
                                    <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Events;
