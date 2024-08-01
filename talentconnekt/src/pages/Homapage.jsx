import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-500 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Welcome to HR Management System</h1>
                    <p className="mt-2 text-lg">Your solution for efficient HR operations.</p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
                        <p className="text-lg text-gray-600">View analytics and insights at a glance.</p>
                        <Link to="/dashboard" className="mt-4 block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md transition duration-300">Go to Dashboard</Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Employees</h2>
                        <p className="text-lg text-gray-600">Manage employee profiles and records.</p>
                        <Link to="/employees" className="mt-4 block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md transition duration-300">View Employees</Link>
                    </div>
                </div>

                {/* New Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Announcements</h2>
                        <p className="text-lg text-gray-600">Stay updated with the latest news and updates.</p>
                        <Link to="/announcements" className="mt-4 block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md transition duration-300">View Announcements</Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Links</h2>
                        <ul className="text-lg text-gray-600">
                            <li><Link to="/leave-requests" className="text-blue-500 hover:underline">Leave Requests</Link></li>
                            <li><Link to="/payroll" className="text-blue-500 hover:underline">Payroll</Link></li>
                            <li><Link to="/benefits" className="text-blue-500 hover:underline">Benefits</Link></li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
                        <p className="text-lg text-gray-600">Check out the upcoming company events.</p>
                        <Link to="/events" className="mt-4 block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md transition duration-300">View Events</Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
                        <p className="text-lg text-gray-600">View and edit your profile information.</p>
                        <Link to="/profile" className="mt-4 block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md transition duration-300">View Profile</Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Support & Help</h2>
                        <p className="text-lg text-gray-600">Get assistance and find answers to your questions.</p>
                        <Link to="/support" className="mt-4 block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md transition duration-300">Get Support</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Homepage;
