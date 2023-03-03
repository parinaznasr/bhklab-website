const formatIntersectionData = (data) => {
    // compiling solo member data - how many publications per person
    const soloSets = [];
  
    // nameStr is for the setName, which makes it easy to compile
    // intersection names (7 letters for 7 members)
    const nameStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(0, data.length);
    data.forEach((x, i) => {
      soloSets.push({
        name: x.name,
        setName: nameStr.substr(i, 1),
        value: x.pubs.length,
        pubs: x.pubs,
      });
    });
  
    // compiling list of intersection names recursively
    // ["A", "AB", "ABC", ...]
    const getIntNames = (start, end, nameStr) => {
      // eg. BCD
      const name = nameStr.substring(start, end);
  
      // when reaching the last letter
      if (name.length === 1) {
        return [name];
      }
      const retArr = getIntNames(start + 1, end, nameStr);
  
      // eg. for name = BCD, would return [B] + [BC,BCD,BD] + [C,CD,D]
      return [name[0]].concat(retArr.map((x) => name[0] + x), retArr);
    };
  
    let intNames = getIntNames(0, nameStr.length, nameStr);
  
    // removing solo names
    intNames = intNames.filter((x) => x.length !== 1);
  
    let intersections = [];
  
    // compile intersections of publications for each intersection name
    intNames.forEach((intName) => {
      // collecting all publications: [pub1arr, pub2arr, ...]
      const pubs = intName.split('').map((set) => soloSets.find((x) => x.setName === set).pubs);
  
      // getting intersection
      // https://stackoverflow.com/questions/37320296/how-to-calculate-intersection-of-multiple-arrays-in-javascript-and-what-does-e
      const result = pubs.reduce((a, b) => a.filter((c) => b.includes(c)));
      intersections.push({
        name: intName.split('').map((set) => soloSets.find((x) => x.setName === set).name).join(' + '),
        setName: intName,
        value: result.length,
        pubs: result,
      });
    });
  
    // taking out all 0s
    intersections = intersections.filter((x) => x.value !== 0);
    return { intersections, soloSets };
};

const formatLabCsvData = (piData, data) => {
  // compiling solo member data - how many publications per person
  const soloSets = [];
  let piSet = null;
  const setNameArr = piData.name.split(' ');
  const len = setNameArr.length;
  let setName = setNameArr[len-1];
  if (len != 1) {
    setNameArr.forEach((n,y) => {
      if (y != len) {
        setName += setNameArr[n].substring(0,1);
      }
    })
  }
  piSet = {
    name: setName,
    setName,
    value: piData.pubs.length,
    pubs: piData.pubs,
  };
  soloSets.push(piSet);
  // nameStr is for the setName, which makes it easy to compile
  // intersection names (7 letters for 7 members)
  data.forEach((x, i) => {
    const setNameArr = x.name.split(' ');
    const len = setNameArr.length;
    let setName = setNameArr[len-1];
    if (len != 1) {
      setNameArr.forEach((n,y) => {
        if (y != len-1) {
          setName += n.substring(0,1);
        }
      })
    }
    soloSets.push({
      name: setName,
      setName,
      value: x.pubs.length,
      pubs: x.pubs,
    });
  });

  let intersections = [];

  // compile intersections of publications for each intersection name
  soloSets.forEach(set => {
    const intName = `${piSet.setName} + ${set.setName}`;
    // collecting all publications: [pub1arr, pub2arr]
    if (set.name != piSet.name) {
      const pubs = [];
      pubs.push(soloSets.find((x) => x.setName === set.setName).pubs);
      pubs.push(piSet.pubs);

      // getting intersection
      // https://stackoverflow.com/questions/37320296/how-to-calculate-intersection-of-multiple-arrays-in-javascript-and-what-does-e
      const result = pubs.reduce((a, b) => a.filter((c) => b.includes(c)));
      intersections.push({
        name: intName,
        setName: intName,
        value: result.length,
        pubs: result,
      });
    }
  });

  // taking out all 0s
  intersections = intersections.filter((x) => x.value !== 0);
  return { intersections, soloSets };
};
  
const formatNetworkData = (intersections, data, className) => {
    let edgesRaw;
    if (className === 'labcsv') {
      edgesRaw = intersections;
    } else {
      edgesRaw = intersections.filter((x) => x.setName.length === 2);
    }
    
  
    // calculating thickness of edge by log scaling
    const max = d3.max(edgesRaw.map((n) => n.value));
    const thickestEdge = 40;
    const b = Math.pow(max, (1 / thickestEdge));
  
    // formatting to [{source: 0, target: 1, thickness: 3, value: 5}, ...]
    const edges = [];
    edgesRaw.forEach((x) => {
      const thickness = (Math.log10(x.value + 1)) / (Math.log10(b));
      edges.push({
        source: x.name.split(' + ')[0],
        target: x.name.split(' + ')[1],
        name: x.name,
        value: x.value,
        thickness,
      });
    });
    return edges;
};
  
const formatCircosDataOrig = (edges, soloSets) => {
    const circosLayoutOrig = [];
    const circosChordsOrig = [];
    const color = d3.scaleOrdinal(d3.schemeTableau10);

    // section for each PI, where x's = where chords are
    // [][][x][x][x][x][x][][] <- len = total length of section
    //    |--------------| <- totalThickness
    //    | <- startFrom
    soloSets.forEach((x,i) => {
      circosLayoutOrig.push({
        id: x.name,
        label: x.name,
        color: color(i),
        len: 0, // calculated based on the person with the most collaborations
        value: x.value,
        totalThickness: 0, // total space for chords
        startFrom: 0, // chords start off from this value
      });
    });
  
    // calculating thickness of edge by log scaling
    const max = d3.max(edges.map((n) => n.value));
    const thickestEdge = 20;
    const b = Math.pow(max, (1 / thickestEdge));
  
    // finding total chord space for each PI
    edges.forEach((x) => {
      // log10(1) = 0, and there are 1s, so I added 1 to each value
      const thickness = (Math.log10(x.value + 1)) / (Math.log10(b));
  
      // find index of source and target to add to thickness
      // adding 0.5 for spacing
      let ind = circosLayoutOrig.findIndex((item) => item.id === x.source);
      circosLayoutOrig[ind].totalThickness += thickness + 0.5;
  
      ind = circosLayoutOrig.findIndex((item) => item.id === x.target);
      circosLayoutOrig[ind].totalThickness += thickness + 0.5;
    });
  
    // find max total thickness for length
    const maxThickness = d3.max(circosLayoutOrig.map((x) => x.totalThickness));
    circosLayoutOrig.forEach((x) => {
      x.len = maxThickness - 0.5;
    });
  
    // finding chord start for every PI
    // starting from the middle of the arc, place all the chords
    // in the middle, so find the half of total thickness and
    // subtract it from the arc middle
    circosLayoutOrig.forEach((x) => {
      x.startFrom = x.len / 2 - x.totalThickness / 2;
    });
  
    edges.forEach((x) => {
      // find index of source and target to add to startFrom
      const sInd = circosLayoutOrig.findIndex((item) => item.id === x.source);
      const tInd = circosLayoutOrig.findIndex((item) => item.id === x.target);
  
      // log10(1) = 0, and there are 1s, so I added 1 to each value
      const thickness = (Math.log10(x.value + 1)) / (Math.log10(b));
  
      circosChordsOrig.push({
        source: {
          id: x.source,
          start: circosLayoutOrig[sInd].startFrom,
          end: circosLayoutOrig[sInd].startFrom + thickness,
        },
        target: {
          id: x.target,
          start: circosLayoutOrig[tInd].startFrom,
          end: circosLayoutOrig[tInd].startFrom + thickness,
        },
        value: x.value,
      });
      // dynamically calculating the next startFrom point
      // and adding 0.5 for spacing
      circosLayoutOrig[sInd].startFrom += thickness + 0.5;
      circosLayoutOrig[tInd].startFrom += thickness + 0.5;
    });
    return { circosLayoutOrig, circosChordsOrig };
};

const formatCircosDataGrad = (edges, soloSets) => {
  const circosLayoutGrad = [];
  const circosChordsGrad = [];
  const memberCollabs = {}; // number of people collabed per person
  const color = d3.scaleOrdinal(d3.schemeTableau10);
  const len = 100;

  // section for each PI, where x's = where chords are
  // [][][x][x][x][x][x][][] <- len = total length of section
  //    |--------------| <- totalThickness
  //    | <- startFrom
  soloSets.forEach((x,i) => {
    circosLayoutGrad.push({
      id: x.name,
      label: x.name,
      color: color(i),
      len: len + 0.5,
      value: x.value,
      totalThickness: 0, // total space for chords
      startFrom: 0, // chords start off from this value
      totalCollabs:0,
    });
    memberCollabs[x.name] = 0;
  });

  // calculate thickness of chords
  // get highest number of people collabed with
  edges.forEach((x) => {
    memberCollabs[x.source] += 1
    memberCollabs[x.target] += 1
  });

  const highestCollabs = Math.max(...Object.values(memberCollabs))
  // thickness of every chord
  const thickness = len/highestCollabs - 0.5; // -0.5 for spacing

  // calculating total thickness for person
  edges.forEach((x) => {
    // find index of source and target to add to thickness
    // adding 0.5 for spacing
    let ind = circosLayoutGrad.findIndex((item) => item.id === x.source);
    circosLayoutGrad[ind].totalThickness += thickness + 0.5;

    ind = circosLayoutGrad.findIndex((item) => item.id === x.target);
    circosLayoutGrad[ind].totalThickness += thickness + 0.5;
  })


  // finding chord start for every PI
  // starting from the middle of the arc, place all the chords
  // in the middle, so find the half of total thickness and
  // subtract it from the arc middle
  circosLayoutGrad.forEach((x) => {
    x.startFrom = x.len / 2 - x.totalThickness / 2;
  });

  // calculating opacity
  const max = d3.max(edges.map((n) => n.value));
  const highestOpacity = 1;
  const b = Math.pow(max, (1 / highestOpacity));

  edges.forEach((x) => {
    // log10(1) = 0, and there are such value=1, so I added 0.1 to each value
    const opacity = (Math.log10(x.value + 0.01)) / (Math.log10(b)) + 0.2;

    // find index of source and target to add to startFrom
    const sInd = circosLayoutGrad.findIndex((item) => item.id === x.source);
    const tInd = circosLayoutGrad.findIndex((item) => item.id === x.target);

    circosChordsGrad.push({
      source: {
        id: x.source,
        start: circosLayoutGrad[sInd].startFrom,
        end: circosLayoutGrad[sInd].startFrom + thickness,
      },
      target: {
        id: x.target,
        start: circosLayoutGrad[tInd].startFrom,
        end: circosLayoutGrad[tInd].startFrom + thickness,
      },
      value: x.value,
      opacity: opacity,
    });
    // dynamically calculating the next startFrom point
    // and adding 0.5 for spacing
    circosLayoutGrad[sInd].startFrom += thickness + 0.5;
    circosLayoutGrad[tInd].startFrom += thickness + 0.5;
  });
  return { circosLayoutGrad, circosChordsGrad };
};
