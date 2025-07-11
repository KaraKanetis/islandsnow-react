"use client";

import { Container } from "react-bootstrap";

export default function FullWidthImage() {
  return (
    <Container fluid className="px-0">
      <img
        src="https://courses.ics.hawaii.edu/ics314s25/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"
        className="img-fluid w-100"
        alt="Bridge Image"
      />
    </Container>
  );
}
