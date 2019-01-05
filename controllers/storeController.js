const mongoose = require('mongoose');
const Store = mongoose.model('Store');
exports.homePage = (req, res) =>
{
   console.log = (req.name);
    res.render('index');
};
exports.addStore = (req, res) =>
{
    //res.send('add works!');
    res.render('editStore', {title: 'Add Store'});
};

exports.createStore = async (req, res) => 
{
    //console.log(req.body);
    //res.json(req.body);
    const store = await (new Store(req.body)).save();
    //await store.save();
    req.flash('success', `successfully created amazing ${store.name}. Care to say something to idiots?`);
    res.redirect(`/store/${store.slug}`);
    //console.log('It works Shirin');

};
exports.getStores = async (req, res) => 
{
    const stores = await Store.find();
    //console.log(stores);
    res.render('stores', {title: 'Stores', stores});
};

exports.editStore = async (req, res) => 
{
    //res.json(req.params);
    const store = await Store.findOne({ _id: req.params.id });
    res.json(store);
};