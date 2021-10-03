import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ChartTextOne = () => {
    const history = useHistory()
    const visitor = () => {
        history.push('/details')
    }
    return (
        <div className="text-start w-50">
            <h3>All Visitors are here</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat deleniti sit modi autem assumenda aspernatur vel atque laboriosam porro voluptatum est dignissimos quidem suscipit harum earum, ipsa perferendis similique consectetur accusamus hic optio blanditiis beatae possimus. Cupiditate rem saepe, magnam veritatis sequi sed officiis quas dolor est pariatur laborum!</p>
            <Button onClick={visitor} variant="primary">View Visitors</Button>
        </div>
    );
};

export default ChartTextOne;