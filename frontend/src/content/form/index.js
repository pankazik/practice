import { PageWrapper } from "../../common/page-wrapper";
import styled from "styled-components";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  border: 2px black solid;
  flex-direction: column;
  padding: 35px 80px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ServiceForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ serviceName, price }),
    });
  };
  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <PageWrapper>
      <Form onSubmit={handleForm}>
        <label htmlFor="service-name">Service name: </label>
        <input
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          type="text"
          name="service-name"
        ></input>
        <label htmlFor="price">Price: </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
        ></input>
        <button type="submit">Add service</button>
      </Form>
    </PageWrapper>
  );
};
