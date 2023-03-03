const sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const getData = (name, query, url) => new Promise((resolve, reject) => {
  fetch(url, {
      method: 'GET',
      // credentials: 'same-origin',
      // mode: 'cors'
  })
    .then((res) => res.json())
    .then((data) => {
        return resolve({
          name,
          query,
          pubs: data.esearchresult.idlist,
        });
    });
});

const start = (queries, className) => {
    const loadData = (queries, className) => {
        const rawData = [];
        // const queries = [
        //     {
        //     name: 'Haibe-Kains',
        //     query: 'Haibe-Kains+Benjamin[AU]',
        //     }, {
        //     name: 'Pugh',
        //     query: 'Pugh+T%5BAU%5D+AND+%28Marziali%5BAU%5D+OR+Marra%5BAU%5D+OR+Meyerson%5BAU%5D+OR+Getz%5BAU%5D+OR+Rehm%5BAU%5D+OR+Taylor%5BAU%5D+OR+Tsongalis%5BAU%5D%29+OR+%28Pugh+TJ%5BAU%5D+AND+Toronto%5BAD%5D%29',
        //     }, {
        //     name: 'Hoffman',
        //     query: 'Hoffman%20Michael%20M%5Bau%5D%20OR%20Hoffman%20Michael%20M%5Bir%5D%20OR%20International%20Chicken%20Genome%20Sequencing%20Consortium%5Bcn%5D',
        //     }, {
        //     name: 'Liu',
        //     query: 'Liu+G%5BAU%5D+AND+Toronto%5BAD%5D+OR+23291255%5BPMID%5D+NOT+%28Liu+GC%5BAU%5D+OR+Liu+GY%5BAU%5D+OR+Liu+GK%5BAU%5D%29',
        //     }, {
        //     name: 'Minden',
        //     query: 'Minden+MD%5BAU%5D+OR+%28Minden+M%5BAU%5D+AND+Toronto%29+OR+8401592%5BPMID%5D',
        //     }, {
        //     name: 'Moran',
        //     query: 'Moran+MF%5BAU%5D+OR+%28Moran+M%5BAU%5D+AND+Pawson+T%5BAU%5D%29',
        //     },
        //     {
        //     name: 'Xu',
        //     query: '(Xu%2C%20Wei%5BFull%20Author%20Name%5D%20OR%20Wei%2C%20Xu%5BFull%20Author%20Name%5D%20OR%20Xu%2C%20Wei%5BFull%20Investigator%20Name%5D%20OR%20wei%20xu%5BAuthor%5D%20OR%20wei%20xu%5BInvestigator%5D)%20AND%20((princess%5BAll%20Fields%5D%20AND%20margaret%5BAll%20Fields%5D)%20AND%20toronto%5BAll%20Fields%5D)',
        //     },
        // ];
        queries.forEach((x) => {
            // rawData.push(getData(x.name, x.query, `http://localhost:8010/proxy/entrez/eutils/esearch.fcgi?db=pubmed&term=${x.query}&retmax=800&retmode=json`));
            rawData.push(getData(x.name, x.query, `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${x.query}&retmax=800&retmode=json`));
            sleep(500);
        });

        Promise.all(rawData).then((data) => {
            // formatting data
            const { intersections, soloSets } = formatIntersectionData(data);
            const networkEdges = formatNetworkData(intersections, data);
            const { circosLayoutOrig, circosChordsOrig } = formatCircosDataOrig(networkEdges, soloSets);
            const { circosLayoutGrad, circosChordsGrad } = formatCircosDataGrad(networkEdges, soloSets);
            // plotting data
            plotUpset(intersections, soloSets, 'upsetPlot', className);
            plotNetwork(soloSets, networkEdges, 'networkPlot', className);
            plotCircosOrig(circosChordsOrig, circosLayoutOrig, '#originalView', className);
            plotCircosGrad(circosChordsGrad, circosLayoutGrad, '#gradationView', className);
            $('.loading').css('display', 'none');
            // $('.pubs-container').css('display', 'block');
            // $([document.documentElement, document.body]).animate({
            //     scrollTop: $(".pubs-container").offset().top
            // }, 800);
        });
    };
    
    return loadData(queries, className);
};

const startLabCsv = (pi, queries, className) => {
  const loadData = (pi, queries, className) => {
      const rawData = [];
      let piData = null;
      getData(pi.name, pi.query, `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${pi.query}&retmax=800&retmode=json`).then(result => {
        piData = result;
      })
      sleep(500);
      queries.forEach((x) => {
          // rawData.push(getData(x.name, x.query, `http://localhost:8010/proxy/entrez/eutils/esearch.fcgi?db=pubmed&term=${x.query}&retmax=800&retmode=json`));
          rawData.push(getData(x.name, x.query, `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${x.query}&retmax=800&retmode=json`));
          sleep(500);
      });

      Promise.all(rawData).then((data) => {
          // formatting data
          const { intersections, soloSets } = formatLabCsvData(piData, data);
          const networkEdges = formatNetworkData(intersections, data, 'labcsv');
          const { circosLayoutOrig, circosChordsOrig } = formatCircosDataOrig(networkEdges, soloSets);
          const { circosLayoutGrad, circosChordsGrad } = formatCircosDataGrad(networkEdges, soloSets);
          // plotting data
          plotNetwork(soloSets, networkEdges, 'networkPlot', className);
          plotCircosOrig(circosChordsOrig, circosLayoutOrig, '#originalView', className);
          plotCircosGrad(circosChordsGrad, circosLayoutGrad, '#gradationView', className);
          $('.loading').css('display', 'none');
          $(`#originalView.${className}`).find('svg').attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink");
          $(`#originalView.${className}`).find('svg').wrap('<div class="originalViewSvgContainer"></div>');
          $(`#gradationView.${className}`).find('svg').attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink");
          $(`#gradationView.${className}`).find('svg').wrap('<div class="gradationViewSvgContainer"></div>');
          $("#downloadOriginal").click(function(){
              $(this)
              .attr("href", 'data:application/octet-stream;base64,' + btoa($(".originalViewSvgContainer").html()))
              .attr("download", 'originalView' + ".svg")
              })
          $("#downloadGradation").click(function(){
            $(this)
            .attr("href", 'data:application/octet-stream;base64,' + btoa($(".gradationViewSvgContainer").html()))
            .attr("download", 'gradationView' + ".svg")
            })
      });
  };
  
  return loadData(pi, queries, className);
};
