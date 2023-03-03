const plotCircosOrig = (chords, layout, container, className) => {
    const width = 800;
    const height = 800;
    const circos = new Circos({
        container: '#originalView.' + className,
        width: width,
        height: height,
    });

    circos
        .layout(
            layout,
            {
                innerRadius: width/2 - 80,
                outerRadius: width/2 - 30,
                gap: className === 'labcsv' ? 0.01 : 0.04,
                labels: {
                    position: 'center',
                    display: true,
                    size: className === 'labcsv' ? 8 : 16,
                    color: 'white',
                    radialOffset: 15,
                },
                ticks: {
                    display: false
                }
            }
        )
        .chords(
            'chords',
            chords,
            {
                radius: (d) => {
                    if (d.source.id === 'chr1') {
                    return 0.5;
                    }
                    return null;
                },
                logScale: false,
                opacity: 0.5,
                color: '#1d7597',
                tooltipContent: (d, i) => `${d.source.id} + ${d.target.id}: 
                            ${d.value} publication${d.value === 1 ? '' : 's'}`,
                
            }
        )
        .render()
};

const plotCircosGrad = (chords, layout, container, className) => {
    const width = 800;
    const height = 800;
    const circos = new Circos({
        container: '#gradationView.' + className,
        width: width,
        height: height,
    });

    circos
        .layout(
            layout,
            {
                innerRadius: width/2 - 80,
                outerRadius: width/2 - 30,
                gap: className === 'labcsv' ? 0.01 : 0.04,
                labels: {
                    position: 'center',
                    display: true,
                    size: className === 'labcsv' ? 8 : 16,
                    color: 'white',
                    radialOffset: 5,
                },
                ticks: {
                    display: false
                }
            }
        )
        .chords(
            'chords',
            chords,
            {
                radius: (d) => {
                   return null;
                },
                logScale: false,
                opacity: (d) => {
                    return d.opacity
                },
                color: '#1d7597',
                tooltipContent: (d, i) => `${d.source.id} + ${d.target.id}: 
                            ${d.value} publication${d.value === 1 ? '' : 's'}`,
                
            }
        )
        .render()
}