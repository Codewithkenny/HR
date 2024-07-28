import { Link } from 'react-router-dom';
import CompanyLogo from '../assets/2.png';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 sm:p-6 md:p-8">
            <Link to="/" className="flex items-center">
                <img
                    src={CompanyLogo}
                    alt="Company Logo"
                    className="w-20 h-auto mr-2"
                />
                <h1 className="text-2xl font-bold">TALENT CONNEKT</h1>
            </Link>
        </header>
    );
};

export default Header;
