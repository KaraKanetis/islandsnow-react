"use client";

import { Container } from "react-bootstrap";

export default function MiddleMenu() {
  return (
    <Container className="pt-4">
      <div className="d-flex justify-content-center">
        <div className="px-3">
          <a
            className="fw-bold text-dark text-decoration-none dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            MEN
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Shirts</a></li>
            <li><a className="dropdown-item" href="#">Shorts</a></li>
            <li><a className="dropdown-item" href="#">Shoes</a></li>
          </ul>
        </div>

        <div className="px-3">
          <a
            className="fw-bold text-dark text-decoration-none dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            WOMEN
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Tops</a></li>
            <li><a className="dropdown-item" href="#">Dresses</a></li>
            <li><a className="dropdown-item" href="#">Shoes</a></li>
          </ul>
        </div>

        <div className="px-3">
          <a
            className="fw-bold text-dark text-decoration-none dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            KIDS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Shirts</a></li>
            <li><a className="dropdown-item" href="#">Toys</a></li>
          </ul>
        </div>

        <div className="px-3">
          <a
            className="fw-bold text-dark text-decoration-none dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            BRANDS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nike</a></li>
            <li><a className="dropdown-item" href="#">Adidas</a></li>
          </ul>
        </div>

        <div className="px-3">
          <a className="fw-bold text-dark text-decoration-none" href="#">
            SEARCH
          </a>
        </div>
      </div>
    </Container>
  );
}
