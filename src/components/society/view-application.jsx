import React from "react";
import { useParams } from "react-router-dom";

export default function ViewApplication() {
  const { applicationId } = useParams();
  return <div>ViewApplication {applicationId}</div>;
}
