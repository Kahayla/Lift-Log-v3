import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function NavigationButtons() {
  return (
    <Stack className="col-md-4 mx-auto" direction="vertical" gap={3}>
      <Link to="/AddSession">
        <Button variant="primary" size="lg">
          Add Session
        </Button>{" "}
      </Link>
      <Link to="/ViewSessions">
        <Button variant="primary" size="lg">
          View Session
        </Button>
      </Link>
    </Stack>
  );
}
