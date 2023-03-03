const plotNetwork = (nodes, links, plotId, className) => {
    
  // determine if node is lonely
    const hasLinks = (d) => {
      const sources = links.map(x => x.source);
      const targets = links.map(x => x.target);
      if (sources.indexOf(d.name) === -1 && targets.indexOf(d.name) === -1) {
        return false;
      } else {
        return true;
      }
    };

    const margin = {
        top: 20,
        right: 200,
        bottom: 90,
        left: 70,
      };
  
      const width = 900;
      const height = 800;
  
      const color = d3.scaleOrdinal(d3.schemeTableau10);
      // Add the svg canvas
      const svg = d3.select(`#${plotId}.${className}`)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
        .attr('class','plot')
        .append('g')
        .attr('transform',
          `translate(${margin.left},${margin.top})`);
  
      const simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id((d) => d.name))
        .force('charge', d3.forceManyBody().strength(-1000))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('y', d3.forceY().y((d) => 0))
        .force("forceX",d3.forceX(width/2).strength(function(d){ return hasLinks(d) ? 0 : 0.05; }) )
        .force("forceY",d3.forceY(height/2).strength(function(d){ return hasLinks(d) ? 0 : 0.05; }) );
  
      const link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('class', 'line')
        .attr('stroke', '#02577b')
        .attr('stroke-opacity', 0.5)
        .attr('stroke-width', (d) => d.thickness);
  
      const node = svg.append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(nodes)
        .enter()
        .append('g');
  
      const circles = node.append('circle')
        .attr('class', 'circle')
        .attr('r', 60)
        .attr('fill', (d,i) => color(i))
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended));
  
      const labels = node.append('text')
        .text((d) => d.name)
        .attr('x', 0)
        .attr('y', 3)
        .attr('font-size', 17)
        .attr('text-anchor', 'middle')
        .attr('fill', 'white');
  
      // tooltip
      const tooltip = d3.select(`#${plotId}`)
        .append('div')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')
        .style('color', 'white')
        .style('padding', '0px 10px')
        .style('background', '#02577b')
        .style('border-radius', '12px')
        .text('hehe'); // it changes, don't worry
  
      circles.on('mouseover', (d) => {
        tooltip.text(`${d.name}: ${d.value} publications`).style('visibility', 'visible');
      })
        .on('mousemove', () => {
          tooltip.style('top', `${d3.event.pageY - 20}px`).style('left', `${d3.event.pageX + 20}px`);
        })
        .on('mouseout', () => {
          tooltip.style('visibility', 'hidden');
        });
  
      link.on('mouseover', (d) => {
        tooltip.text(`${d.name}: ${d.value} collaboration${d.value === 1 ? '' : 's'}`).style('visibility', 'visible');
      })
        .on('mousemove', () => {
          tooltip.style('top', `${d3.event.pageY - 20}px`).style('left', `${d3.event.pageX + 20}px`);
        })
        .on('mouseout', () => {
          tooltip.style('visibility', 'hidden');
        });
  
      simulation
        .nodes(nodes)
        .on('tick', ticked);
  
      simulation.force('link')
        .links(links)
        .distance(400);
  
      function ticked() {
        link
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y);
  
        node
          .attr('transform', (d) => {
            return `translate(${d.x},${d.y})`
          });
      }
  
      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
  
      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }
  
      function dragended(d) {
      //   if (!d3.event.active) simulation.alphaTarget(0);
      //   d.fx = null;
      //   d.fy = null;
      }
};
