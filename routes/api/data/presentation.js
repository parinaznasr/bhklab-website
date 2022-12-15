const Presentation = require('../../../database/models/presentation');

const getAll = async (req, res) => {
    let result = {
        presentations: [],
    };
    try{
        // Get presentations in the database
        result.presentations =  await Presentation.find().populate('members').lean();
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getAll
}
