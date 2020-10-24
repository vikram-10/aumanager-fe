// This is the card that is used in the homepage!!
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
  <CardTitle>{props.title}</CardTitle>
  <CardSubtitle>{props.subtitle}</CardSubtitle>
  <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;