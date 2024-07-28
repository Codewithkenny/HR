import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [newHiresCount, setNewHiresCount] = useState(0);
    const [departments, setDepartments] = useState([]);
    const [totalDepartments, setTotalDepartments] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
    const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);
    const [employeeForm, setEmployeeForm] = useState({ firstName: '', lastName: '', email: '', position: '', departmentId: '' });
    const [departmentForm, setDepartmentForm] = useState({ name: '', description: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const employeesResponse = await axios.get('http://localhost:5000/api/employees/count');
                setTotalEmployees(employeesResponse.data.total);

                const newHiresResponse = await axios.get('http://localhost:5000/api/employees/new-hires-count');
                setNewHiresCount(newHiresResponse.data.count);

                const departmentsResponse = await axios.get('http://localhost:5000/api/departments');
                if (departmentsResponse.data) {
                    setDepartments(departmentsResponse.data.departments);
                }

                const departmentResponse = await axios.get('http://localhost:5000/api/departments/count');
                setTotalDepartments(departmentResponse.data.total);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddEmployee = async () => {
        try {
            await axios.post('http://localhost:5000/api/employees', employeeForm);
            setEmployeeForm({ firstName: '', lastName: '', email: '', position: '',date_of_hire: '', departmentId: '' });
            setIsEmployeeModalOpen(false);
            toast.success('Employee added successfully!');
        } catch (error) {
            console.error('Error adding employee:', error);
            toast.error('Error adding employee.');
        }
    };

    const handleAddDepartment = async () => {
        try {
            await axios.post('http://localhost:5000/api/departments', departmentForm);
            setDepartmentForm({ name: '', description: '' });
            setIsDepartmentModalOpen(false);
            toast.success('Department added successfully!');
        } catch (error) {
            console.error('Error adding department:', error);
            toast.error('Error adding department.');
        }
    };

    return (
        <div className="flex flex-col p-6 space-y-6">
            <ToastContainer />

            {/* Hero Section with Ad Banner */}
            <section className="bg-blue-600 text-white p-8 rounded-lg shadow-lg mb-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
                    <p className="text-xl mb-4">Check out the latest updates and manage your employees and departments efficiently.</p>
                    <a href="#" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300">Learn More</a>
                </div>
            </section>

            {/* Quick Actions */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setIsEmployeeModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        Add Employee
                    </button>
                    <button
                        onClick={() => setIsDepartmentModalOpen(true)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                    >
                        Add Department
                    </button>
                </div>
            </div>

            {/* Overview Section */}
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 shadow rounded flex items-center">
                            <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
                                <i className="fas fa-users"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Total Employees</h3>
                                <p className="text-2xl font-bold">{totalEmployees}</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 shadow rounded flex items-center">
                            <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">New Hires</h3>
                                <p className="text-2xl font-bold">{newHiresCount}</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 shadow rounded">
                            <h3 className="text-lg font-semibold mb-2">Departments</h3>
                            <p className="text-2xl font-bold">{totalDepartments}</p>
                            <div>
                                {departments.map(dept => (
                                    <p key={dept.id} className="text-lg">{dept.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities/Notifications */}
                    <div className="bg-white p-4 shadow rounded">
                        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                        <ul>
                            <li className="mb-2">Employee John Doe was promoted to Senior Developer.</li>
                            <li className="mb-2">New department Research and Development was created.</li>
                            <li>Employee Jane Smith joined the Marketing team.</li>
                        </ul>
                    </div>
                </>
            )}

            {/* Add Employee Modal */}
            <Transition appear show={isEmployeeModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsEmployeeModalOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add New Employee
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                                <input
                                                    type="text"
                                                    value={employeeForm.firstName}
                                                    onChange={(e) => setEmployeeForm({ ...employeeForm, firstName: e.target.value })}
                                                    className="w-full px-3 py-2 border rounded-md"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                                <input
                                                    type="text"
                                                    value={employeeForm.lastName}
                                                    onChange={(e) => setEmployeeForm({ ...employeeForm, lastName: e.target.value })}
                                                    className="w-full px-3 py-2 border rounded-md"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                                <input
                                                    type="email"
                                                    value={employeeForm.email}
                                                    onChange={(e) => setEmployeeForm({ ...employeeForm, email: e.target.value })}
                                                    className="w-full px-3 py-2 border rounded-md"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Position</label>
                                                <input
                                                    type="text"
                                                    value={employeeForm.position}
                                                    onChange={(e) => setEmployeeForm({ ...employeeForm, position: e.target.value })}
                                                    className="w-full px-3 py-2 border rounded-md"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Department</label>
                                                <select
                                                    value={employeeForm.departmentId}
                                                    onChange={(e) => setEmployeeForm({ ...employeeForm, departmentId: e.target.value })}
                                                    className="w-full px-3 py-2 border rounded-md"
                                                >
                                                    <option value="">Select Department</option>
                                                    {departments.map(dept => (
                                                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEmployeeModalOpen(false)}
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={handleAddEmployee}
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                >
                                                    Add Employee
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Add Department Modal */}
            <Transition appear show={isDepartmentModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsDepartmentModalOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add New Department
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    value={departmentForm.name}
                                                    onChange={(e) => setDepartmentForm({ ...departmentForm, name: e.target.value })}
                                                    className="w-full px-3 py-2 border rounded-md"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                                <textarea
                                                    value={departmentForm.description}
                                                    onChange={(e) => setDepartmentForm({ ...departmentForm, description: e.target.value })}
                                                    className="w-full px-3 py-2 border rounded-md"
                                                />
                                            </div>
                                            <div className="flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDepartmentModalOpen(false)}
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={handleAddDepartment}
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                                >
                                                    Add Department
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Dashboard;
