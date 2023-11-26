import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function NavigationButtons() {
  const location = useLocation();

  return (
    <Stack className="col-md-4 mx-auto" direction="vertical" gap={3}>
      {location.pathname !== "/AddSession" && (
        <Link to="/AddSession">
          <Button variant="primary" size="lg">
            Add Session
          </Button>
        </Link>
      )}
      {location.pathname !== "/ViewSessions" && (
        <Link to="/ViewSessions">
          <Button variant="primary" size="lg">
            View Session
          </Button>
        </Link>
      )}
    </Stack>
  );
}
