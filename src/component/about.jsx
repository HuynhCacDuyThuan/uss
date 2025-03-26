// About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS cho section giới thiệu
const styles = `
  .about-section {
    padding: 60px 0;
    background-color: #f8f9fa; /* Màu nền nhạt */
  }

  .about-title {
    font-size: 1.0rem;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 20px;
  }

  .about-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
  }

  .about-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  /* CSS cho danh sách <ul> */
  .business-list {
    list-style: none; /* Bỏ dấu đầu dòng mặc định */
    padding-left: 0; /* Xóa khoảng cách trái mặc định */
    margin-top: 10px;
  }

  .business-list li {
    position: relative;
    padding-left: 25px; /* Khoảng cách trái cho icon */
    margin-bottom: 10px; /* Khoảng cách giữa các mục */
    font-size: 1.1rem;
    color: #555; /* Màu chữ nhạt hơn */
    transition: all 0.3s ease; /* Hiệu ứng mượt khi hover */
  }

  .business-list li:before {
    content: "\\2713"; /* Dấu check Unicode */
    position: absolute;
    left: 0;
    color: #007bff; /* Màu xanh cho dấu check */
    font-size: 1.2rem;
    font-weight: bold;
  }

  .business-list li:hover {
    color: #007bff; /* Đổi màu chữ khi hover */
    padding-left: 30px; /* Dịch nhẹ sang phải khi hover */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .about-title {
      font-size: 2rem;
    }

    .about-text {
      font-size: 1rem;
    }

    .about-section {
      padding: 40px 0;
    }

    .about-image {
      margin-top: 20px;
    }

    .business-list li {
      font-size: 1rem;
      padding-left: 20px;
    }

    .business-list li:before {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    .about-title {
      font-size: 1.5rem;
    }

    .business-list li {
      font-size: 0.9rem;
    }
  }
`;
const About = () => {
  return (
    <>
      {/* Inject custom styles */}
      <style>{styles}</style>

      <section className="about-section">
        <Container>
          <Row className="align-items-center">
            {/* Cột nội dung văn bản */}
            <Col md={6} sm={12}>
              <h2 className="about-title">Giới thiệu Công ty TNHH Dược phẩm Quốc tế USS</h2>
              <p className="about-text">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực phân phối Dược phẩm, Thực phẩm dinh dưỡng Y tế cao cấp, 
                Công ty TNHH Dược phẩm Quốc tế USS khởi nguồn từ Hệ thống Nhà thuốc Sài Gòn – nền tảng vững chắc 
                hình thành nên USS PHARMA như ngày nay.
              </p>
              <p className="about-text">
                <strong>Ngành nghề kinh doanh:</strong>
                <ul className="business-list">
                  <li>Mua bán thực phẩm chức năng, yến sào và thực phẩm khác.</li>
                  <li>Bán buôn dược phẩm và dụng cụ y tế.</li>
                </ul>
              </p>
            </Col>

            {/* Cột ảnh */}
            <Col md={6} sm={12}>
              <img
                src="https://ctyduocphamquocteuss.com/wp-content/uploads/2023/11/z4901495649194_90605ac31c3bcb0d060373a8a74a45f8-768x512.jpg"
                alt="Công ty TNHH Dược phẩm Quốc tế USS"
                className="about-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;