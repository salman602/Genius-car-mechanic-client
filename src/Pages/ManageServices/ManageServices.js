import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://still-hollows-31393.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDeleteService = (id) => {
        const proceed = window.confirm('Are you sure You want to delete?');
        if (proceed) {
            const url = `https://still-hollows-31393.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deleteCount > 0) {
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                        alert('Service deleted successfully.')
                    }
                })
        }
    }
    return (
        <div>
            <h5>This is manage services</h5>
            {
                services.map(service => <div key={service._id}>
                    <h5>Service Title: {service.name}</h5>
                    <button onClick={() => handleDeleteService(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;