import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(()=>[
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    ],[serviceId])
    return (
        <div>
            <h3>Detail of : {service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p>Description: {service.description}</p>
        </div>
    );
};

export default Booking;