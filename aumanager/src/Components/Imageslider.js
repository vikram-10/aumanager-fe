import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './imageslider.css';

const items = [
  {
    src: 'https://www.collegiateparent.com/wp-content/uploads/2020/04/college-landscape2-color-adjusted-e1591220072806.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://asg-architects.com/wp-content/gallery/hcc-hsb-la/4_HCC-HSB-LA_b.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://www.landscapeforms.com/PublishingImages/LF%20Lighting%20Project%20Photos/Rowan%20College%20at%20Burlington%20County/TopSlider/Rowan%20College_header%208.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Imageslider = () => <UncontrolledCarousel className="img-fluid" items={items} />;

export default Imageslider;