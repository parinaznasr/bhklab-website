const Positions = require('../../../database/models/position');

const getAll = async (req, res) => {
    let result = {
        positions: [],
    };
    try{
        // Get positions stored in the database which their content is not null
        let positions =  await Positions.find({$expr: { $gt: [{ $strLenCP: '$title' }, 0] }}).lean();
        positions.forEach(item => {
            if(item.active)
                result.positions.push(item)
        })
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getAll
}
