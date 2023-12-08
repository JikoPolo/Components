import { Component } from "react";
import Slider from "react-slick";

// To make this work, you need to install react-slick and slick-carousel and import css into index.html.

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          {/* Slide */}
          <div className="px-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <p>“ test”</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <p>“ test”</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <p>“ test”</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <p>“ test”</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <p>“ test”</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
