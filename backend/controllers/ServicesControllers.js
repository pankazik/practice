const fs = require("fs");
const path = require("path");

const readServices = () => {
  return JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "/database/services.json"), "utf8")
  );
};

const writeServices = (data) => {
  const services = readServices();
  data.id =
    services.length > 0
      ? Math.max(...services.map((service) => service.id)) + 1
      : 1;
  services.push(data);
  fs.writeFileSync(
    path.join(process.cwd(), "/database/services.json"),
    JSON.stringify(services),
    {
      encoding: "utf-8",
    }
  );
  return services;
};

exports.allServices = (req, res, next) => {
  const services = readServices();

  res.status(200).json(services);
};

exports.addService = (req, res, next) => {
  if (!req.body.serviceName || !req.body.price) {
    return next("Service name and price required");
  }
  if (req.body.serviceName.length < 3 || +req.body.price <= 0) {
    return next(
      "Service name must contain at least 3 characters and price must be higher than 0"
    );
  }
  const { serviceName, price } = req.body;
  writeServices({
    serviceName,
    price: +price,
  });

  res.status(200).json({ status: "success" });
};
