import { useState, useEffect } from 'react';
import { getEmployees } from '../services/api';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10); // Number of items per page

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees(currentPage, perPage);
            setEmployees(data);
        };
        fetchEmployees();
    }, [currentPage, perPage]);

    // Total pages calculation
    const totalPages = Math.ceil(employees.length / perPage);

    // Handle previous page button click
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    // Handle next page button click
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Employee List</h2>

            {/* Employee Overview */}
            <div className="bg-white p-4 shadow rounded mb-4">
                <h3 className="text-lg font-semibold mb-4">Employee Overview</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Position</th>
                                <th className="px-4 py-2">Department</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    <td className="border px-4 py-2">{employee.id}</td>
                                    <td className="border px-4 py-2">{employee.first_name} {employee.last_name}</td>
                                    <td className="border px-4 py-2">{employee.email}</td>
                                    <td className="border px-4 py-2">{employee.position}</td>
                                    <td className="border px-4 py-2">{employee.Department ? employee.Department.name : 'Not assigned'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Employee List */}
            <table className="min-w-full leading-normal bg-white rounded-lg shadow-md mt-4">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.first_name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.last_name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default EmployeeList;
