const Publication = require('../../../database/models/publication');

const getAll = async (req, res) => {
    let result = {
        publications: [],
    };
    try{
        // Get publications in the database
        result.publications =  await Publication.find().populate('projects', 'members').lean();
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getAll
}
