const News = require('../../../database/models/news');

const getNews = async (req, res) => {
    let result = {
        news: [],
    };
    try{
        // Get news stored in the database which their content is not null
        let news =  await News.find({$expr: { $gt: [{ $strLenCP: '$content' }, 0] }}).lean();
        news.forEach(item => result.news.push({
            subject: item.title,
            content: item.content,
            date: item.date,
        }))
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getNews
}
