import  { useEffect, useState } from 'react';
import axios from 'axios';

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', date: '', content: '' });

    useEffect(() => {
        // Fetch announcements from backend
        axios.get('http://localhost:5000/api/announcements')
            .then(response => setAnnouncements(response.data))
            .catch(error => console.error('Error fetching announcements:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAnnouncement({ ...newAnnouncement, [name]: value });
    };

    const handleAddAnnouncement = () => {
        axios.post('http://localhost:5000/api/announcements', newAnnouncement)
            .then(response => {
                setAnnouncements([...announcements, response.data]);
                setNewAnnouncement({ title: '', date: '', content: '' });
            })
            .catch(error => console.error('Error adding announcement:', error));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Announcements</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                {announcements.map(announcement => (
                    <div key={announcement.id} className="mb-4">
                        <h2 className="text-2xl font-bold">{announcement.title}</h2>
                        <p className="text-lg text-gray-600">{announcement.date}</p>
                        <p>{announcement.content}</p>
                    </div>
                ))}
                <div className="mt-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newAnnouncement.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                        type="date"
                        name="date"
                        value={newAnnouncement.date}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <textarea
                        name="content"
                        placeholder="Content"
                        value={newAnnouncement.content}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <button onClick={handleAddAnnouncement} className="bg-blue-500 text-white py-2 px-4 rounded-md">
                        Add Announcement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
