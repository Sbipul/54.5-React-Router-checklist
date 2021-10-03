import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import ChartTextOne from './ChartTextOne';
import ChartTextTwo from './ChartTextTwo';
import SubChartOne from './SubChartOne';
import SubChartTwo from './SubChartTwo';

const ChartOne = () => {
    

    return (
        <Container>
          <h1 className="fw-bold">Welcome to SRBC GARMENTS LTD</h1>
          <p className="w-50 mx-auto mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis modi obcaecati dolore voluptatum hic quaerat voluptas beatae quasi mollitia ipsum.</p>

            <div className="d-flex justify-content-between">
              <ChartTextOne></ChartTextOne>
              <SubChartOne></SubChartOne>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <SubChartTwo></SubChartTwo>
              <ChartTextTwo></ChartTextTwo>
            </div>
        </Container>
    );
};

export default ChartOne;
