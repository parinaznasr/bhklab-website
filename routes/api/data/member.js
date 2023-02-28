const Member = require('../../../database/models/member');
const mongoose = require("mongoose");

/**
 * API endpoint to return all members.
 * URL Parameters:
 * Query parameters:
 * @param {*} req
 * @param {*} res
 */
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

const addOne = async (req, res) => {
    try{
        const member = req.body;
        // identify the submitter and make sure there is no duplication

        // insert pipeline
        let newMember= new Member(member);
        await newMember.save();

    }catch(error){
        console.log(error);
        res.status(500);
    }finally{
        res.send({});
    }
}

const deleteOne = async (req, res) => {
    // const admin = req.decoded;
    const admin = true;
    let result = {};
    try{
        if(admin){
            // delete the member document
            await Member.deleteOne({_id: req.body.id});
            result.message = 'The member has been permanently deleted.';
        }
    }catch(err){
        console.log(err);
        result.message = 'An error occurred when deleting the member, please try again.';
        res.status(500);
    }finally{
        res.send(result);
    }
}

const edit = async (req, res) => {
    // const admin = req.decoded;
    const admin = true;
    try{
        let member = req.body;
        if(admin){
            await Member.updateOne({ '_id': member._id }, member, {upsert: true});
        }
    }catch(error){
        console.log(error);
        res.status(500);
    }finally{
        res.send();
    }
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    edit
}
