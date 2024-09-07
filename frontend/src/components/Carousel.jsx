import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ControlledCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div >
      <div>
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={product.image} alt={product.title} className="w-auto h-auto" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{product.title}</p>
                <p className="text-center">{product.price}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl"></button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ControlledCarousel;
