import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import "../FeaturedProducts.css"; // Nhúng CSS riêng
const products = [
  { id: 1, name: "Sản phẩm 1", price: "200,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/2896a593928e22d07b9f.jpg" },
  { id: 2, name: "Sản phẩm 2", price: "300,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/BIDI-GOLD-CO-XUONG-KHOP-300x348.png" },
  { id: 3, name: "Sản phẩm 3", price: "250,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/699e8ba79a1d2b43720c5-300x450.jpg" },
  { id: 4, name: "Sản phẩm 4", price: "350,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/1fffb6d3a76916374f784-300x450.jpg" },
  { id: 5, name: "Sản phẩm 5", price: "400,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/39f1cdd9dc636d3d34723-300x450.jpg" },
  { id: 6, name: "Sản phẩm 6", price: "450,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/820cb53ca48615d84c976-300x450.jpg" },
  { id: 7, name: "Sản phẩm 7", price: "500,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/820cb53ca48615d84c976-300x450.jpg" },
  { id: 8, name: "Sản phẩm 8", price: "550,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/820cb53ca48615d84c976-300x450.jpg" },
  { id: 9, name: "Sản phẩm 9", price: "600,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/820cb53ca48615d84c976-300x450.jpg" },
  { id: 10, name: "Sản phẩm 10", price: "650,000đ", img: "https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/820cb53ca48615d84c976-300x450.jpg" },
];
const FeaturedProducts = () => {
    return (
      <div className="container mt-4">
        <h4 className="mb-4 feture"> Sản phẩm nổi bật </h4>
        <Row xs={1} md={5} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="product-card shadow-sm">
                <Card.Img variant="top" src={product.img} className="product-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-name">{product.name}</Card.Title>
                  <Card.Text className="product-price">{product.price}</Card.Text>
                  <Button variant="primary" className="mt-auto buy-button">
                    <FaShoppingCart /> Mua ngay
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
  export default FeaturedProducts;