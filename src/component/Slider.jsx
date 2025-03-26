// Slider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS cho slideshow
const styles = `
  .carousel {
    max-width: 100%;
    margin: 0 auto;
  }

  .carousel-item img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Đảm bảo ảnh không bị méo */
    max-height: 500px; /* Giới hạn chiều cao tối đa */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .carousel-item img {
      max-height: 300px; /* Giảm chiều cao trên mobile */
    }
  }

  @media (max-width: 576px) {
    .carousel-item img {
      max-height: 200px; /* Giảm thêm trên màn hình nhỏ */
    }
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.5); /* Nền tối cho chữ dễ đọc */
    padding: 10px;
    border-radius: 5px;
  }
`;

const Slider = () => {
  return (
    <>
      {/* Inject custom styles */}
      <style>{styles}</style>

      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/logo-uss-1-scaled.jpg"
            alt="Slide 1"
          />
        
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/logo-uss-1-scaled.jpg"
            alt="Slide 2"
          />
         
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ctyduocphamquocteuss.com/wp-content/uploads/2025/03/logo-uss-1-scaled.jpg"
            alt="Slide 3"
          />
          
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;