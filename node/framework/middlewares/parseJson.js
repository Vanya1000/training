const middlewareJsonParser = (req, res, next) => {
  console.log('middlewareJsonParser');
  res.sendMy = (data) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }
  next();
}

export default middlewareJsonParser;