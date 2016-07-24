var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.route('/')
	.get(function(req, res){
		res.render('new_menu', {
			current_url: req.baseUrl,
		})
	});

module.exports = router;