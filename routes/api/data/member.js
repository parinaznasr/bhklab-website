const Member = require('../../../database/models/member');

const getAll = async (req, res) => {
    let result = {
        members: [],
    };
    try{
        // Get lab members in the database
        let res=  await Member.find().lean();
        res.forEach(item => result.members.push({
            id: item._id,
            name: item.preferredName? item.preferredName : item.name,
            position : item.position,
            image: item.image,
            status: item.status,
            bio: item.bio,
            startDate: item.startDate,
            endDate: item.endDate
        }))
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

const getOne = async (req, res) => {
    let result = {
        member: {}
    };
    let token = req.params.token;
    try{
        // Get lab member's info
        let res =  await Member.find().lean();
        let member = res.filter(item => item.name.toLowerCase().replace(" ","_") === token)[0];
        if ( member ){
            result.member = {
                name: member.name,
                position : member.position,
                image: member.image,
                bio: member.bio,
            }
        }
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getAll,
    getOne
}
