import React from "react";
import { useParams } from "react-router-dom";

const InvoiceDetail = () => {
  const params = useParams();
  return <div>Invoice {params.id}</div>;
};

export default InvoiceDetail;
