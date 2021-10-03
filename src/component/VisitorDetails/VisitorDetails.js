import React, {useContext, useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { NameContext } from '../../App';

const VisitorDetails = () => {
    const magic = useContext(NameContext)
    const history = useHistory()
    const {visitorId} = useParams()
    const [details,setDetails] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${visitorId}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

    const regularity = details.completed;
    const backtoHome = () => {
        history.push('/home')
    }
    const backtoPrivious = () => {
        history.push('/details')
    }

    return (
        <Card style={{ width: '18rem',margin:'0 auto' }}>
            {
                regularity ? <Card.Img variant="top" src="https://media-eng.dhakatribune.com/uploads/2018/05/photo-moheen-reeyad-1526713172729.gif" /> : <Card.Img variant="top" src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" />
            }
            <Card.Body>
                <Card.Title>Id : {details.id}</Card.Title>
                <Card.Text>
                    Title : {details.title} 
                    <br />
                    <p className="text-primary mt-2">dog image for completed value 'true' and cat image for completed value 'false'</p>
                    <br />
                    </Card.Text>
                    <p>{magic}</p>
                <Button onClick={backtoHome} className="m-1" variant="primary">Back to home</Button>
                <Button onClick={backtoPrivious} className="m-1" variant="dark">Previous page</Button>
            </Card.Body>
            </Card>
    );
};

export default VisitorDetails;