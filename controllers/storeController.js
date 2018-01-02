exports.myMiddleware = (req, res, next) => {
  req.name = 'Seth';
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('hello');
};
