import Slider from "react-slick";
import { BsChevronRight } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsChevronRight size={70} />,
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          color: "blue",
          height: "5px",
          backgroundColor: "gray",
          marginRight: "5px",
        }}
      ></div>
    ),
  };
  return (
    <div className="overflow-hidden h-[573px]">
      <Slider {...settings} className="overflow-visible translate-x-[-8%] ">
        <div className="relative">
          <img
          className="object-contain w-full"
            src="https://i.annihil.us/u/prod/marvel/i/mg/a/40/638ed9c5863cd.jpg"
            alt="slider img"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/60 pl-[16%]">
            <div className="w-[60%] my-auto mt-[300px] translate-y-[-50%]">
            <h2>Overlay</h2>
                <h1 className="text-[40px] font-[600]">'WASP' #1 PITS JANET & NADIA AGAINST A CLASSIC SUPER VILLAIN</h1>
                <button>Preview</button>
                
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/7/90/638ed8f0787f4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/0/04/638edc9e2b9fa.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/9/20/638eda7c044c1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/1/30/6385a6866191f.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
