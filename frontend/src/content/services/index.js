import { PageWrapper } from "../../common/page-wrapper";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <PageWrapper>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {services.map((service) => {
            return (
              <TableRow key={service.id}>
                <TableCell component="th" scope="row">
                  {service.id}
                </TableCell>
                <TableCell align="center">{service.serviceName}</TableCell>
                <TableCell align="right">{service.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </PageWrapper>
  );
};
