const middlewareJsonParser = (req, res) => {
  console.log('middlewareJsonParser');
  res.sendMy = (data) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }
}

export default middlewareJsonParser;