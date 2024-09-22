import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './PlayerGoalsBarChart.scss';

const PlayerGoalsBarChart = ({ playersData }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!playersData) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 800;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;


        const barWidth = 30;

        const x = d3.scaleBand()
            .domain(playersData.map(d => d.name))
            .range([0, innerWidth])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(playersData, d => d.goals)]).nice()
            .range([innerHeight, 0]);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        g.append('g')
            .selectAll('.bar')
            .data(playersData)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.name) + x.bandwidth() / 2 - barWidth / 2)
            .attr('y', d => y(d.goals))
            .attr('width', barWidth)
            .attr('height', d => innerHeight - y(d.goals))
            .style('fill', '#69b3a2');

        g.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(x));

        g.append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(y));

        g.append('text')
            .attr('class', 'x-axis-label')
            .attr('x', innerWidth / 2)
            .attr('y', innerHeight + margin.bottom - 10)
            .attr('text-anchor', 'middle')
            .text('Player');

        g.append('text')
            .attr('class', 'y-axis-label')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left + 10)
            .attr('x', -innerHeight / 2)
            .attr('text-anchor', 'middle')
            .text('Goals');

    }, [playersData]);

    return (
        <div className="player-goals-bar-chart">
            <svg ref={svgRef} width={800} height={400}></svg>
        </div>
    );
};

export default PlayerGoalsBarChart;
