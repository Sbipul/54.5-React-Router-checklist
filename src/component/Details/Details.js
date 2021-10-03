import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Visitors from '../Visitors/Visitors';

const Details = () => {
    const [visitors,setVisitors] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data => setVisitors(data))
    },[])
    return (
        <div>
            <Container>
                <div className="d-flex align-items-center justify-content-between p-2 bg-primary m-2 text-light">
                    <div className="w-25 text-start">
                    <p className="p-0 m-0">Id</p>
                    </div>
                    <div className="w-25 text-start">
                    <p className="p-0 m-0">title</p>
                    </div>
                    <div className="w-25 text-start">
                    <p className="p-0 m-0">result</p>
                    </div>
                    <div className="w-25 text-start">
                    <p className="p-0 m-0">type</p>
                    </div>
                    
                    
                    
                </div>
            </Container>

            {
                visitors.map(visitor => <Visitors key={visitor.id} visitor={visitor}></Visitors>)
            }
        </div>
    );
};

export default Details;