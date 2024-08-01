

const QuickLinks = () => {
    const links = [
        { id: 1, name: 'HR Policies', url: '/hr-policies' },
        { id: 2, name: 'Employee Handbook', url: '/employee-handbook' },
        { id: 3, name: 'Leave Application', url: '/leave-application' }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Quick Links</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <ul>
                    {links.map(link => (
                        <li key={link.id} className="mb-2">
                            <a href={link.url} className="text-blue-500 hover:underline">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QuickLinks;
