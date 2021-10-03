import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Visitors = (props) => {
    const history = useHistory()
    const {id,title,completed} = props.visitor
    const handlevisitorDetails = () => {
        history.push(`/details/${id}`)
    }
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-between p-2 bg-success m-2 text-light">
                <div className="w-25 text-start">
                    <p className="p-0 m-0">{id}</p>
                </div>
                <div className="w-25 text-start">
                    <p className="p-0 m-0">{title}</p>
                </div>
                <div className="w-25 text-start">
                    <p className="p-0 m-0">{completed.toString()}</p>
                </div>
                <div className="w-25 text-start d-flex align-items-center justify-content-between">
                    {
                        completed ? <p className="m-0 p-0">visitor</p> : <p className="m-0 p-0">Buyer</p>
                    }
                    <Button onClick={handlevisitorDetails} variant="light">Details</Button>
                </div>
            </div>
        </Container>
    );
};

export default Visitors;