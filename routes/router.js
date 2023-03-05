const express = require('express');
const router = express.Router();

// paths
const dataset = require('./api/data/dataset');
const member = require('./api/data/member');
const news = require('./api/data/news');
const presentation = require('./api/data/presentation');
const project = require('./api/data/project');
const publication = require('./api/data/publication');
const social = require('./api/data/social');
const email = require('./api/mail/sendGrid');
const positions = require('./api/data/positions');
// const auth = require('./api/admin/auth');
const admin = require('./api/admin/admin');


// data routes
router.get('/data/datasets', dataset.getAll);
router.get('/data/members', member.getAll);
router.get('/data/member/:token', member.getOne);
router.get('/data/news', news.getNews);
router.get('/data/positions', positions.getAll);
router.get('/data/presentations', presentation.getAll);
router.get('/data/projects', project.getAll);
router.get('/data/publications', publication.getAll);
router.get('/data/socials', social.getAll);

router.post('/mail/send', email.sendEmail );

// admin authentication and management

router.post('/admin/login', admin.login);
router.post('/admin/signup', admin.signup);

module.exports = router;
