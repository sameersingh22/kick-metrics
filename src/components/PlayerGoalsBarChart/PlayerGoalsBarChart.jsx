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
        const margin = { top: 20, right: 30, bottom: 80, left: 60 };
        const barWidth = 30; 

        const x = d3.scaleBand()
            .domain(players.map(d => d.name))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const maxGoals = 20; 
        const y = d3.scaleLinear()
            .domain([0, maxGoals]) 
            .nice()
            .range([height - margin.bottom, margin.top]);

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickSize(0))
            .attr('class', 'x-axis')
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .attr('text-anchor', 'end');

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            .attr('class', 'y-axis');

        svg.append('rect') 
            .attr('width', width)
            .attr('height', height)
            .attr('fill', 'wheat'); 

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

        svg.selectAll('.bar-label')
            .data(players)
            .enter()
            .append('text')
            .attr('class', 'bar-label')
            .attr('x', d => x(d.name) + (x.bandwidth() - barWidth) / 2 + barWidth / 2) 
            .attr('y', d => y(d.goals) - 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '0.8rem')
            .attr('fill', '#333')
            .text(d => d.goals);

        svg.append('text')
            .attr('class', 'y-axis-label')
            .attr('text-anchor', 'middle')
            .attr('x', -height / 2) 
            .attr('y', margin.left / 2) 
            .attr('transform', 'rotate(-90)')
            .attr('font-size', '1rem')
            .attr('fill', '#333')
            .text('GOALS');

    }, [players]);

    return (
        <div className="player-goals-bar-chart">
            <svg ref={svgRef} width="800" height="400"></svg>
        </div>
    );
};

export default PlayerGoalsBarChart;