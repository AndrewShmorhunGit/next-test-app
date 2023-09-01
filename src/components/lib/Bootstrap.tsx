"use client";
import { palette } from "app/styles/services/palette";
import Form from "react-bootstrap/Form";

export function FormSearch() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupSearch">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Search"
          style={{
            background: palette.background_second,
            color: palette.text_dark,
            fontWeight: 700,
            border: "none",
            fontSize: "1.6rem",
            width: "32rem",
            height: "2.8rem",
            boxShadow: " inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)",
          }}
        />
      </Form.Group>
    </Form>
  );
}
