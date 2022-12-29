exports.healthCheck = (req, res, next) => {
  const data = {
    uptime: process.uptime(),
    message: "OK",
    date: new Date().toLocaleString(),
  };

  res.status(200).send(data);
};
