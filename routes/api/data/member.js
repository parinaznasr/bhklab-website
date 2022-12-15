const Member = require('../../../database/models/member');

const getAll = async (req, res) => {
    let result = {
        members: [],
    };
    try{
        // Get lab members in the database
        result.members =  await Member.find().lean();
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getAll
}
