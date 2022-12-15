const Dataset = require('../../../database/models/dataset');

const getAll = async (req, res) => {
    let result = {
        datasets: [],
    };
    try{
        // Get datasets stored in the database
        result.datasets =  await Dataset.find().lean();
    }catch(error){
        console.log(error);
    }finally{
        console.log(result)
        res.send(result);
    }
}

module.exports = {
    getAll
}
