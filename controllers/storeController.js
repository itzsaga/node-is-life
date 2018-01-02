exports.myMiddleware = (req, res, next) => {
  req.name = 'Seth';
  res.cookie('name', 'Seth is awesome.', { maxAge: 9000 });
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('hello');
};
