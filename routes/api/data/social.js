const Social = require('../../../database/models/social');

const getAll = async (req, res) => {
    let result = {
        socials: [],
    };
    try{
        // Get socials in the database
        result.socials =  await Social.find().lean();
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getAll
}
