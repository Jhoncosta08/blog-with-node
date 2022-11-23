//variables
const express = require('express');
const router = express.Router();
const category_model = require('./categories.model');
const slugify = require('slugify');

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
});


router.post('/categories/save', (req, res) => {
    let title = req.body.title;
    console.log(title);
    if(title !== undefined) {
        category_model.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/');
        }).catch((error) => {
            console.log('Error in create a new category', error);
        });
    }else {
        res.redirect('/admin/categories/new');
    }
});

//exports
module.exports = router;
