import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './PlayerGoalsBarChart.scss'; 

const PlayerGoalsBarChart = ({ players }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (players.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove(); 

        const width = 800; 
        const height = 400; 
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const barWidth = 30; 

        const x = d3.scaleBand()
            .domain(players.map(d => d.name))
            .range([margin.left, width - margin.right])
            .padding(1);

        const maxGoals = d3.max(players, d => d.goals);
        const y = d3.scaleLinear()
            .domain([0, maxGoals + 3]) 
            .nice()
            .range([height - margin.bottom, margin.top]);

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))
            .attr('class', 'x-axis');

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            .attr('class', 'y-axis');

        svg.append('g')
            .call(xAxis);

        svg.append('g')
            .call(yAxis);

        svg.selectAll('.bar')
            .data(players)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.name) + (x.bandwidth() - barWidth) / 2) 
            .attr('y', d => y(d.goals))
            .attr('width', barWidth)
            .attr('height', d => y(0) - y(d.goals))
            .attr('fill', '#69b3a2'); 

    }, [players]);

    return (
        <div className="player-goals-bar-chart">
            <svg ref={svgRef} width="800" height="400"></svg>
        </div>
    );
};

export default PlayerGoalsBarChart;