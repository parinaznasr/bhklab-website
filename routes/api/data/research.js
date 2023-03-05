const Research = require('../../../database/models/research');

const getAll = async (req, res) => {
    let result = {
        research: [],
    };
    try{
        // Get research in the database
        result.research =  await Research.find().lean();
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getAll
}
