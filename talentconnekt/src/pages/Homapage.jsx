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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            </main>

          
        </div>
    );
};

export default Homepage;
