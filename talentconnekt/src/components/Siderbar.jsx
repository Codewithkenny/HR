
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 h-screen fixed top-0 left-0">
            <nav className="p-4">
                <ul>
                    <li>
                        <Link to="/dashboard" className="block py-2 px-4 text-white hover:bg-gray-700">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/employees" className="block py-2 px-4 text-white hover:bg-gray-700">
                            Employees
                        </Link>
                    </li>
                    <li>
                        <Link to="/attendance" className="block py-2 px-4 text-white hover:bg-gray-700">
                            Attendance
                        </Link>
                    </li>
                    <li>
                        <Link to="/leaves" className="block py-2 px-4 text-white hover:bg-gray-700">
                            Leave Requests
                        </Link>
                    </li>
                    <li>
                        <Link to="/payroll" className="block py-2 px-4 text-white hover:bg-gray-700">
                            Payroll
                        </Link>
                    </li>
                    <li>
                        <Link to="/quiz" className="block py-2 px-4 text-white hover:bg-gray-700">
                            Psychometric Test
                        </Link>
                    </li>
                    <li>
                        <Link to="/results" className="block py-2 px-4 text-white hover:bg-gray-700">
                            Results
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
