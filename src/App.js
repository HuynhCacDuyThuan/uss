import logo from './logo.svg'; // Nếu không dùng, có thể xóa
import './App.css';

import Slider from './component/Slider';
import Header from './component/header';
import About from './component/about';
import FeaturedProducts from './component/FeaturedProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Slider />
        <About/>
        <FeaturedProducts/>
      </div>
    </div>
  );
}

export default App;