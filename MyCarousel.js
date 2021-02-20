import React from "react";
import "./index.css";
import { Container } from "@material-ui/core";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  carouselView: {
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },

  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },

  mainView: {
    margin: theme.spacing(8),
    padding: theme.spacing(8),
  },

  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function MyCarousel() {
  const Classes = useStyles();

  return (
    <Container class={Classes.carouselView}>
      <Carousel
        pagination={false}
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={5000}
      >
        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>

        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>

        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>

        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>

        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>

        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>

        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>
        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>
        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>
        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>
        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>
        <Item>
          <img
            className="d-block w-100"
            src={"https://source.unsplash.com/random"}
            alt="pic"
          />
        </Item>
      </Carousel>
    </Container>
  );
}

export default MyCarousel;
