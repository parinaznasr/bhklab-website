let names = [];
let pubmedQueries = [];
// keeping track of number of entries
let numPis = 0;
// keeping track of ids for adding/removing
let numIds = [];
const allIds = [0,1,2,3,4,5,6,7,8,9];

// const exampleNames = ['Haibe-Kains','Pugh','Hoffman','Liu','Minden','Moran','Xu'];
// const exampleQueries = ['Haibe-Kains+Benjamin[AU]',
//             'Pugh+T%5BAU%5D+AND+%28Marziali%5BAU%5D+OR+Marra%5BAU%5D+OR+Meyerson%5BAU%5D+OR+Getz%5BAU%5D+OR+Rehm%5BAU%5D+OR+Taylor%5BAU%5D+OR+Tsongalis%5BAU%5D%29+OR+%28Pugh+TJ%5BAU%5D+AND+Toronto%5BAD%5D%29',                        
//             'Hoffman%20Michael%20M%5Bau%5D%20OR%20Hoffman%20Michael%20M%5Bir%5D%20OR%20International%20Chicken%20Genome%20Sequencing%20Consortium%5Bcn%5D',
//             'Liu+G%5BAU%5D+AND+Toronto%5BAD%5D+OR+23291255%5BPMID%5D+NOT+%28Liu+GC%5BAU%5D+OR+Liu+GY%5BAU%5D+OR+Liu+GK%5BAU%5D%29',
//             'Minden+MD%5BAU%5D+OR+%28Minden+M%5BAU%5D+AND+Toronto%29+OR+8401592%5BPMID%5D', 
//             'Moran+MF%5BAU%5D+OR+%28Moran+M%5BAU%5D+AND+Pawson+T%5BAU%5D%29', 
//             '(Xu%2C%20Wei%5BFull%20Author%20Name%5D%20OR%20Wei%2C%20Xu%5BFull%20Author%20Name%5D%20OR%20Xu%2C%20Wei%5BFull%20Investigator%20Name%5D%20OR%20wei%20xu%5BAuthor%5D%20OR%20wei%20xu%5BInvestigator%5D)%20AND%20((princess%5BAll%20Fields%5D%20AND%20margaret%5BAll%20Fields%5D)%20AND%20toronto%5BAll%20Fields%5D)'
// ]

const exampleNames = ["Lupien","Cescon", "Haibe-Kains","Penn", "Pugh", "Arrowsmith", "Siu", "Wang", "Han", "McIntosh"]
const exampleQueries = [
    "Lupien M[Author] NOT Lupien MA[Author] NOT Lupien MJ[Author]",
    "Cescon D[Author]",
    "Haibe-Kains B[Author]",
    "Penn LZ[Author]",
    "Pugh TJ[Author]",
    "Arrowsmith CH[Author]",
    "(Siu LL[Author]) AND (Toronto)",
    "Wang Bo[Author] AND (Stanford OR Toronto)",
    "Han Kathy[Author]",
    "McIntosh Chris[Author]"
]

/* onclick functions */
const plus = (id) => {
    // if reached limit, disable + signs
    if (numPis === 10) {
        $('.plus').each((i,e) => {
            $(e).css('display', 'none');
        })
    } else {
        // find the first missing id from numIds in the list of allIds
        let idDiv = 0;
        for (let i = 0; i < allIds.length; i++) {
            if (numIds.indexOf(allIds[i]) === -1) {
                idDiv = allIds[i];
                break;
            }
        }
        const htmlStr = `<div class="form-group form-fill fill-${idDiv}">
                <textarea class="names-area form-enter" type="last-names" placeholder="Enter last name"></textarea>
                <textarea class="queries-area form-enter" type="queries" placeholder="Enter PubMed query"></textarea>
                <div class="form-enter-button-group">
                    <span onclick="plus(${idDiv})" id="plus-${idDiv}" class="form-enter-button plus">+</span>
                    <span onclick="minus(${idDiv})" id="minus-${idDiv}" class="form-enter-button minus">-</span>
                </div>
            </div>`;
        numIds.push(idDiv);
        $(`.fill-${id}`).after(htmlStr);
        numPis++;
    }
    // checkIfFirstAreaEmpty();
}

const minus = (id) => {
    
    // remove the form-group
    $(`.fill-${id}`).remove();
    $('.plus').each((i,e) => {
        $(e).css('display', 'block');
    })
    numIds.splice(numIds.indexOf(id),1);
    numPis--;

    // checkIfFirstAreaEmpty();
}

// const checkIfFirstAreaEmpty = () => {
//     // disable submit button if no elements available
//     // or if the text areas are empty
//     const nameSel = $($('.form-fill').first().children()[0])
//     const querySel = $($('.form-fill').first().children()[1])
    
//     if (numPis === 0 || nameSel.val() === "" || querySel.val() === "") {
//        $('.submit').prop('disabled', true).css('background', 'gray').css('cursor', 'default');
//     }

//     // check for every keydown event on the first area
//     let nameAreaEmpty = true;
//     nameSel.on('keyup', () => {
//         if (nameSel.val() !== "") {
//             nameAreaEmpty = false;
//         } else {
//             nameAreaEmpty = true;
//         }
//     })
//     querySel.on('keyup', () => {
//         console.log(querySel.val(), nameSel.val())
//         if (querySel.val() !== "" && !nameAreaEmpty) {
//             $('.submit').prop('disabled', false).css('background', '#ED5D06').css('cursor', 'pointer');
//         } else {
//             $('.submit').prop('disabled', true).css('background', 'gray').css('cursor', 'default');
//         }
//     })
// }

$(document).on('ready', function () {
    
    /* Controls number of entries */
    const onNumberSubmit = () => {
        const elems = [];
        $('.form-fill').each((i,e) => {
            elems.push(e);
        })
        numPis = elems.length;
        
        // edge cases
        if ($('.quantity').val() > 10 || $('.quantity').val() <= 0) {
            $('.na').css('display', 'block');
            return;
        } else {
            $('.na').css('display', 'none');
            $('.submit').prop('disabled', false).css('background', '#ED5D06').css('cursor', 'pointer');

        }

        // if new val greater than old val, then add onto existing
        if (numPis < $('.quantity').val()) {
            const numAdd = $('.quantity').val() - numPis;
            let htmlStr = '';
            for (let i = numPis; i < (parseInt(numPis) + parseInt(numAdd)); i++) {
                htmlStr += `<div class="form-group form-fill fill-${i}">
                        <textarea class="names-area form-enter" type="last-names" placeholder="Enter last name"></textarea>
                        <textarea class="queries-area form-enter" type="queries" placeholder="Enter PubMed query"></textarea>
                        <div class="form-enter-button-group">
                            <span onclick="plus(${i})" id="plus-${i}" class="form-enter-button plus">+</span>
                            <span onclick="minus(${i})" id="minus-${i}" class="form-enter-button minus">-</span>
                        </div>
                    </div>`;
                numIds.push(i);
            }
            $('.fill-container').append(htmlStr);
            // checkIfFirstAreaEmpty();
        } else { // if less, remove last ones
            const numRemove = numPis - $('.quantity').val();
            for (let i = numPis - 1; i >= (numPis-numRemove); i--) {
                elems[i].remove();
                numIds.splice(numIds.indexOf(i),1);
            }
            // checkIfFirstAreaEmpty();
        }
        if (parseInt($('.quantity').val()) === 10 ) {
            $('.plus').each((i,e) => {
                $(e).css('display', 'none');
            })
        } else {
            // show all plus signs
            $('.plus').each((i,e) => {
                $(e).css('display', 'block');
            })
        }
        numPis = $('.quantity').val();
    };
    
    $( '.quantity' ).on( 'keydown', (e) => {
        if( e.keyCode === 13){
            onNumberSubmit();
            return false;
        }
    }); 

    $('.number-submit').click(function() {
        onNumberSubmit();
    });

    /* Handling logic for the example and clear buttons */
    $('.example').click(function() {
        $('.fill-container').empty();
        // numPis = 7;
        numPis = 10;
        for (let i = 0; i < numPis; i++) {
            const htmlStr = `<div class="form-group form-fill">
                    <textarea class="names-area form-enter names-${i}" type="last-names" placeholder="Enter last name"></textarea>
                    <textarea class="queries-area form-enter  queries-${i}" type="queries" placeholder="Enter PubMed query"></textarea>             
                </div>`;
            $('.fill-container').append(htmlStr);
            $(`.names-${i}`).val(exampleNames[i]);
            $(`.queries-${i}`).val(exampleQueries[i]);
        }
        $('.submit').prop('disabled', false).css('background', '#ED5D06').css('cursor', 'pointer');
    });

    $('.clear').click(function() {
        $('.fill-container').empty();
        numPis = 0;
        $('.submit').prop('disabled', true).css('background', 'gray').css('cursor', 'default');
    });

    /* Submitting entries for processing */
    $('.submit').click(function() {
        $('.pubs-container.formview').css('display', 'block');
        $('.loading.formview').css('display', 'block');
        d3.selectAll('.plot').remove();
        d3.select('#circosPlot.formview').remove();
        $("#upsetPlot.formview").after( "<div class='formview' id='circosPlot'><div class='formview' id='originalView'></div><div class='formview' id='gradationView'></div></div>" );
        $(".input-network.formview").prop("checked", true);
        $("#networkPlot.formview").css('display', 'block');
        $('.circos-select.formview').css('display', 'none');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".pubs-container").offset().top
        }, 800).promise().then(() => {
            // resetting stuff
            names = [];
            pubmedQueries = [];

            // putting all the names and queries in
            $('textarea.names-area').each((i,e) => {
                names.push($(e).val());
            })
            $('textarea.queries-area').each((i,e) => {
                pubmedQueries.push($(e).val());
            })

            const queries = [];
            names.forEach((x,i) => {
                // processing duplicates and empty entries here
                // so i can remove things in parallel and not separately
                if (x !== "" && pubmedQueries[i] !== "" && 
                        queries.map((x) => x.name).indexOf(x) === -1 &&
                        queries.map((x) => x.query).indexOf(pubmedQueries[i]) === -1) {
                    queries.push({
                        name: x,
                        query: pubmedQueries[i]
                    })
                }
            })
            /* in plotting.js - formats data and passes to plotting functions */
            start(queries, "formview");
        });
        
        
    });
    /* Controls which plot is shown through radio buttons */
    $("input:radio[name=plotview-formview]").click(function(){
        if ($("input:radio[name=plotview-formview]:checked").val() === "network") {
            $('#networkPlot.formview').css('display', 'block');
            $('#upsetPlot.formview').css('display', 'none');
            $('#circosPlot.formview').css('display', 'none');
            $('.circos-select.formview').css('display', 'none');
        } else if ($("input:radio[name=plotview-formview]:checked").val() === "upset") {
            $('#networkPlot.formview').css('display', 'none');
            $('#upsetPlot.formview').css('display', 'block');
            $('#circosPlot.formview').css('display', 'none');
            $('.circos-select.formview').css('display', 'none');
        } else if ($("input:radio[name=plotview-formview]:checked").val() === "circos") {
            $('#networkPlot.formview').css('display', 'none');
            $('#upsetPlot.formview').css('display', 'none');
            $('#circosPlot.formview').css('display', 'block');
            $('#originalView.formview').css('display', 'block');
            $('#gradationView.formview').css('display', 'none');
            $('.circos-select.formview').css('display', 'block');
        }
        
    });

    /* Controls which circos plot is shown */
    $("input:radio[name=circosview-formview]").click(function(){
        if ($("input:radio[name=circosview-formview]:checked").val() === "original") {
            $('#originalView.formview').css('display', 'block');
            $('#gradationView.formview').css('display', 'none');
        } else if ($("input:radio[name=circosview-formview]:checked").val() === "gradation") {
            $('#originalView.formview').css('display', 'none');
            $('#gradationView.formview').css('display', 'block');
        } 
        
    });

    /* CSV UPLOAD LOGIC */
    $('.submit-csv').prop('disabled', false).css('background', '#ED5D06').css('cursor', 'pointer');
    $('.example-csv').click(function() {
        const exampleString = "Lupien,https://pubmed.ncbi.nlm.nih.gov/?term=Lupien+M[Author]+NOT+Lupien+MA[Author]+NOT+Lupien+MJ[Author]\nCescon,https://pubmed.ncbi.nlm.nih.gov/?term=Cescon+D[Author]\nHaibe-Kains,https://pubmed.ncbi.nlm.nih.gov/?term=Haibe-Kains+B[Author]\nPenn,https://pubmed.ncbi.nlm.nih.gov/?term=Penn+LZ[Author]\nPugh,https://pubmed.ncbi.nlm.nih.gov/?term=Pugh+TJ[Author]\nArrowsmith,https://pubmed.ncbi.nlm.nih.gov/?term=Arrowsmith+CH[Author]\nSiu,https://pubmed.ncbi.nlm.nih.gov/?term=(Siu+LL[Author])+AND+(Toronto)\nWang,https://pubmed.ncbi.nlm.nih.gov/?term=Wang+Bo[Author]+AND+(Stanford+OR+Toronto)\nHan,https://pubmed.ncbi.nlm.nih.gov/?term=Han+Kathy[Author]\nMcIntosh,https://pubmed.ncbi.nlm.nih.gov/?term=McIntosh+Chris[Author]\n";
        $('.csv-area').val(exampleString);
    });

    $('.submit-csv').click(function() {
        $('.pubs-container.csv').css('display', 'block');
        $('.loading.csv').css('display', 'block');
        d3.selectAll('.plot').remove();
        d3.select('#circosPlot.csv').remove();
        $("#upsetPlot.csv").after( "<div class='csv' id='circosPlot'><div class='csv' id='originalView'></div><div class='csv' id='gradationView'></div></div>" );
        $(".input-network.csv").prop("checked", true);
        $("#networkPlot.csv").css('display', 'block');
        $('.circos-select.csv').css('display', 'none');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".pubs-container.csv").offset().top
        }, 800).promise().then(() => {
            // resetting stuff
           const queries = [];
            
            let data = Papa.parse($('.csv-area').val()).data;
            data.forEach((row) => {
                if (row[0] !== "") {
                    queries.push({
                        name: row[0],
                        query: row[1].split("?term=")[1]
                    })
                }
            });
            /* in plotting.js - formats data and passes to plotting functions */
            start(queries, 'csv');
        });
        
        
    });

    $("input:radio[name=plotview-csv]").click(function(){
        if ($("input:radio[name=plotview-csv]:checked").val() === "network") {
            $('#networkPlot.csv').css('display', 'block');
            $('#upsetPlot.csv').css('display', 'none');
            $('#circosPlot.csv').css('display', 'none');
            $('.circos-select.csv').css('display', 'none');
        } else if ($("input:radio[name=plotview-csv]:checked").val() === "upset") {
            $('#networkPlot.csv').css('display', 'none');
            $('#upsetPlot.csv').css('display', 'block');
            $('#circosPlot.csv').css('display', 'none');
            $('.circos-select.csv').css('display', 'none');
        } else if ($("input:radio[name=plotview-csv]:checked").val() === "circos") {
            $('#networkPlot.csv').css('display', 'none');
            $('#upsetPlot.csv').css('display', 'none');
            $('#circosPlot.csv').css('display', 'block');
            $('#originalView.csv').css('display', 'block');
            $('#gradationView.csv').css('display', 'none');
            $('.circos-select.csv').css('display', 'block');
        }
        
    });

    /* Controls which circos plot is shown */
    $("input:radio[name=circosview-csv]").click(function(){
        if ($("input:radio[name=circosview-csv]:checked").val() === "original") {
            $('#originalView.csv').css('display', 'block');
            $('#gradationView.csv').css('display', 'none');
        } else if ($("input:radio[name=circosview-csv]:checked").val() === "gradation") {
            $('#originalView.csv').css('display', 'none');
            $('#gradationView.csv').css('display', 'block');
        } 
        
    });

    /* LAB VIEW LOGIC */
    $('.submit-labcsv').prop('disabled', false).css('background', '#ED5D06').css('cursor', 'pointer');
    $('.example-labcsv').click(function() {
        const examplePi = "Lupien,https://pubmed.ncbi.nlm.nih.gov/?term=Lupien+M[Author]+NOT+Lupien+MA[Author]+NOT+Lupien+MJ[Author]";
        const exampleCollab = "Cescon,https://pubmed.ncbi.nlm.nih.gov/?term=Cescon+D[Author]\nHaibe-Kains,https://pubmed.ncbi.nlm.nih.gov/?term=Haibe-Kains+B[Author]\nPenn,https://pubmed.ncbi.nlm.nih.gov/?term=Penn+LZ[Author]\nPugh,https://pubmed.ncbi.nlm.nih.gov/?term=Pugh+TJ[Author]\nArrowsmith,https://pubmed.ncbi.nlm.nih.gov/?term=Arrowsmith+CH[Author]\nSiu,https://pubmed.ncbi.nlm.nih.gov/?term=(Siu+LL[Author])+AND+(Toronto)\nWang,https://pubmed.ncbi.nlm.nih.gov/?term=Wang+Bo[Author]+AND+(Stanford+OR+Toronto)\nHan,https://pubmed.ncbi.nlm.nih.gov/?term=Han+Kathy[Author]\nMcIntosh,https://pubmed.ncbi.nlm.nih.gov/?term=McIntosh+Chris[Author]\n";
        $('.labcsv-area.collaborators').val(exampleCollab);
        $('.labcsv-area.pi').val(examplePi);
    });

    $('.submit-labcsv').click(function() {
        $('.pubs-container.labcsv').css('display', 'block');
        $('.loading.labcsv').css('display', 'block');
        d3.selectAll('.plot').remove();
        d3.select('#circosPlot.labcsv').remove();
        $("#networkPlot.labcsv").after( "<div class='labcsv' id='circosPlot'><div class='labcsv' id='originalView'></div><div class='labcsv' id='gradationView'></div></div>" );
        $(".input-network.labcsv").prop("checked", true);
        $("#networkPlot.labcsv").css('display', 'block');
        $('.circos-select.labcsv').css('display', 'none');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".pubs-container.labcsv").offset().top
        }, 800).promise().then(() => {
            // resetting stuff
            const queries = [];
            let data = Papa.parse($('.labcsv-area.pi').val()).data;
            const pi = {
                name: data[0][0],
                query: data[0][1].split("?term=")[1]
            };
            data = [];
            data = Papa.parse($('.labcsv-area.collaborators').val()).data;
            data.forEach((row) => {
                if (row[0] !== "") {
                    queries.push({
                        name: row[0],
                        query: row[1].split("?term=")[1]
                    })
                }
            });
            /* in plotting.js - formats data and passes to plotting functions */
            startLabCsv(pi, queries, 'labcsv');
        });
        
        
    });

    $("input:radio[name=plotview-labcsv]").click(function(){
        if ($("input:radio[name=plotview-labcsv]:checked").val() === "network") {
            $('#networkPlot.labcsv').css('display', 'block');
            $('#upsetPlot.labcsv').css('display', 'none');
            $('#circosPlot.labcsv').css('display', 'none');
            $('.circos-select.labcsv').css('display', 'none');
        } else if ($("input:radio[name=plotview-labcsv]:checked").val() === "circos") {
            $('#networkPlot.labcsv').css('display', 'none');
            $('#upsetPlot.labcsv').css('display', 'none');
            $('#circosPlot.labcsv').css('display', 'block');
            $('#originalView.labcsv').css('display', 'block');
            $('#gradationView.labcsv').css('display', 'none');
            $('.circos-select.labcsv').css('display', 'block');
        }
        
    });

    /* Controls which circos plot is shown */
    $("input:radio[name=circosview-labcsv]").click(function(){
        if ($("input:radio[name=circosview-labcsv]:checked").val() === "original") {
            $('#originalView.labcsv').css('display', 'block');
            $('#gradationView.labcsv').css('display', 'none');
        } else if ($("input:radio[name=circosview-labcsv]:checked").val() === "gradation") {
            $('#originalView.labcsv').css('display', 'none');
            $('#gradationView.labcsv').css('display', 'block');
        } 
        
    });
    
    
});