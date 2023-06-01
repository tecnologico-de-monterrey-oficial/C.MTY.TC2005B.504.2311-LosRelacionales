const express = require('express');
const pamController = require('../controllers/pamController');
const bookController = require('../controllers/bookController');
const pageController = require('../controllers/pageController');
const archdioceseController = require('../controllers/archdioceseController');
const zoneController = require('../controllers/zoneController');
const deaneryController = require('../controllers/deaneryController');
const router = express.Router();

router.get('/api/getPams', pamController.getPams);
router.post('/api/addPam', pamController.addPam);
//router.get('/api/getPam/:id', pamController.getPam);
router.put('/api/updatePam/:id', pamController.updatePam);
router.delete('/api/deletePam/:id', pamController.deletePam);
router.get('/api/getBooks', bookController.getBooks);
router.get('/api/getBook/:id', bookController.getBook);
router.post('/api/addBook', bookController.addBook);
router.put('/api/updateBook/:id', bookController.updateBook);
router.delete('/api/deleteBook/:id', bookController.deleteBook);
router.get('/api/getPages', pageController.getPages);
router.get('/api/getPage/:id', pageController.getPage);
router.get('/api/getPageNo/:id/:no', pageController.getPageNo);
router.get('/api/getBookPages/:id', pageController.getBookPages);
router.post('/api/addPage', pageController.addPage);
router.put('/api/updatePage/:id', pageController.updatePage);
router.delete('/api/deletePage/:id', pageController.deletePage);
router.get('/api/getArchdioceses', archdioceseController.getArchdioceses);
router.get('/api/getZones/:id', zoneController.getZones);
router.get('/api/getdeaneries/:id', deaneryController.getDeaneries);


module.exports = router;