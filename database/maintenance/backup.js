/**
 * Script used to back up current instance of database data.
 * Extracts everything in the database and stores data in json files in the 'data' folder.
 */
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
const mongoose = require("mongoose");
const fs = require("fs");

const Award = require("../models/award");
const Conference = require("../models/conference");
const Dataset = require("../models/dataset");
const Grant = require("../models/grant");
const Index = require("../models");
const Memberproject = require("../models/memberproject");
const Member = require("../models/member");
const News = require("../models/news");
const Otheraccom = require("../models/otheraccom");
const Poster = require("../models/poster");
const Position = require("../models/position");
const Project = require("../models/project");
const Presentation = require("../models/presentation");
const Publication = require("../models/publication");
const Social = require("../models/social");
const Supervision = require("../models/supervision");

const backup = async (output, Model) => {
    const data = await Model.find({}).lean();
    fs.writeFileSync(output, JSON.stringify(data, null, 2));
};

(async () => {
    try {
        await mongoose.connect(process.env.PROD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connection open");
        // // // backup awards
        // await backup("./data/awards.json", Award);
        //
        // // // backup lab conferences
        // await backup("./data/conferences.json", Conference);
        //
        // // // backup lab datasets
        // await backup("./data/datasets.json", Dataset);
        //
        // // // backup lab grants
        // await backup("./data/grants.json", Grant);
        //
        // // backup project indexes
        // await backup("./data/indexes.json", Index);
        //
        // // // // backup lab members
        // await backup("./data/memberprojects.json", Memberproject);
        //
        // // // // backup lab members
        // await backup("./data/members.json", Member);
        //
        // // // backup news
        // await backup("./data/news.json", News);
        //
        // // // backup other accomplishments
        // await backup("./data/otheraccoms.json", Otheraccom);
        //
        // // // backup lab posters
        // await backup("./data/posters.json", Poster);
        //
        // // backup lab positions
        await backup("./data/positions.json", Position);
        //
        // // backup lab presentations
        // await backup("./data/presentations.json", Presentation);
        //
        // // // backup lab projects
        // await backup("./data/projects.json", Project);
        //
        // // // backup lab publications
        // await backup("./data/publications.json", Publication);
        //
        // // // backup lab socials
        // await backup("./data/socials.json", Social);
        //
        // // // backup lab socials
        await backup("./data/supervisions.json", Supervision);

    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.connection.close();
        console.log("connection closed");
    }
})();
