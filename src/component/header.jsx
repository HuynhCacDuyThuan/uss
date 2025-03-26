// Header.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const styles = `
  .navbar {
    padding: 1rem 0;
  }

  .navbar-brand img {
    transition: all 0.3s ease-in-out;
    max-width: 100%;
  }

  .nav-link {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  .nav-link:hover {
    color: #007bff !important;
  }

  .badge {
    padding: 0.3em 0.6em;
    font-size: 0.8em;
  }

  /* Remove outline/border on Navbar.Toggle when clicked or focused */
  .navbar-toggler {
    border: none !important; /* Remove default border */
  }

  .navbar-toggler:focus,
  .navbar-toggler:active {
    outline: none !important; /* Remove focus outline */
    box-shadow: none !important; /* Remove any shadow */
  }

  /* Media query for mobile responsiveness */
  @media (max-width: 768px) {
    .navbar-brand img {
      height: 30px;
    }

    .navbar-nav {
      text-align: left; /* Align navigation items to the left */
      padding: 1rem 0;
    }

    .nav-link {
      padding: 0.8rem 1rem;
      font-size: 1.1rem;
    }

    .btn-outline-primary {
      margin: 0.5rem 0;
      width: 50%;
    }

    .cart-link {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 576px) {
    .navbar-brand img {
      height: 25px;
    }
  }
`;

const Header = () => {
  return (
    <>
      {/* Inject custom styles */}
      <style>{styles}</style>

      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          {/* Logo responsive */}
          <Navbar.Brand href="/">
            <img
              src="https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/logo-1024x576.png"
              alt="Logo"
              className="d-inline-block align-top"
              style={{ height: '60px' }} // Controlled via CSS for responsiveness
            />
          </Navbar.Brand>

          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-start">
              <Nav.Link href="/" className="mx-2">Trang chủ</Nav.Link>
              <Nav.Link href="/" className="mx-2">Giới thiệu</Nav.Link>
              <Nav.Link href="/products" className="mx-2">Sản phẩm</Nav.Link>
              <Nav.Link href="/" className="mx-2">Hệ thống phân phối</Nav.Link>
              <Nav.Link href="/" className="mx-2">Tin tức</Nav.Link>
              <Nav.Link href="/" className="mx-2">Liên hệ</Nav.Link>
              <Nav.Link href="/cart" className="mx-2 fw-bold cart-link">
              
                <FaShoppingCart className="ms-1" /> {/* Icon giỏ hàng */}
              </Nav.Link>
              <Button variant="outline-primary" className="mx-2">
              <FaUser style={{ color: "#007bff" }} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;