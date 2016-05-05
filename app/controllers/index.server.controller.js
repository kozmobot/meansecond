/**
 * Created by hbayram on 27.04.2016.
 */
exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Hello, world!'
    })
};