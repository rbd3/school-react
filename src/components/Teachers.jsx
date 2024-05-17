import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/teachers.css';

const teachers = [
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Founder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Founder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Founder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
  {
    image: 'media/Me.jpg',
    name: 'RABEDESANA Andry Narson',
    occupation: 'Founder and Teacher',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias',
  },
];

function Teachers() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function (i) {
      return (
        <div className="custom-dot">
          <span>&#9679;</span>
        </div>
      );
    },

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="teachers">
      <h2 className="teachers-title">Featured Teachers</h2>
      <Slider {...settings}>
        {teachers.map((teacher, index) => (
          <div key={index}>
            <div className="teachers-card flex">
              <img src={teacher.image} alt="" className="teachers-img" />
              <div className="teachers-info flex column">
                <h3 className="teachers-name">{teacher.name}</h3>
                <h4 className="teachers-occ">{teacher.occupation}</h4>
                <hr />
                <p className="teachers-para">{teacher.info}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Teachers;
