exports.myMiddleware = (req, res, next) => {
  req.name = 'Seth';
  if(req.name === 'Seth') {
    throw Error('Dumb name');
  }
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('hello');
};
