// Task 2 - Create the Reusable ChartComponent

import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null); // Reference to the canvas element where the chart will be rendered
    const chartInstanceRef = useRef(null); // Tracks Chart.js instance to ensure proper cleanup and avoid redundant initialization

    useEffect(() => {

        const ctx = chartRef.current.getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Create a new chart instance
        chartInstanceRef.current = new Chart(ctx, {
            type,
            data,
            options,
        });

        // Cleanup on unmount
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null; 
            }
        };
    }, [type, data, options]); // Re-run if these props change

    return <canvas ref={chartRef}></canvas>; // Chart.js requires a canvas element
};

export default ChartComponent;
