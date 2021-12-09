exports.homepage = function(req, res, next) {
    res.render('index', { title: 'Products Creta' });
}


exports.dashboard = function(req, res, next) {
    res.render('product/dashboard', { title: 'Products Creta' });
}