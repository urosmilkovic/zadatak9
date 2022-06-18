import React, { Fragment } from "react";
import { BagSource, JacketSource, SneakersSource } from "../../assets";
import { Showcase } from "../../components/custom";
import { Content } from "../../layouts";
import "./style.scss";

const Cards = [
  {
    main: true,
    title: (
      <Fragment>
        <span>NIKE LUNARGLIDE 6 PRO</span> designed for the runner who
        overpronates
      </Fragment>
    ),
    description:
      "The Nike LunarGlide 6 is a lightweight trainer or racer which adds to its tradition of being a stability shoe with the benefit of plenty of cushioning. The shoe provides a customized fit through design enhancements in the sole and upper which allow for a smooth ride and quick transition for those moderate overpronators.",
    to: "/products",
    src: SneakersSource,
  },
  {
    title: (
      <Fragment>
        NIKE SPORTSWEAR <span>JACKET</span>
      </Fragment>
    ),
    description:
      "The Nike Sportswear Therma-FIT Jacket is a reversible zip-up made with 100% recycled polyester and recycled nylon fibers. ",
    to: "/products",
    src: JacketSource,
  },
  {
    title: (
      <Fragment>
        <span>NIKE HERITAGE</span> BACKPACK
      </Fragment>
    ),
    description:
      "Take your gear to go with the Nike Heritage Backpack. Its spacious main compartment features a sleeve that holds up to a 15'' laptop",
    to: "/products",
    src: BagSource,
  },
];

const Home = () => {
  return (
    <Content>
      <div className="ec-home-showcase">
        {Cards.map((x, y) => (
          <Showcase className="ec-home-showcase-single" key={y} {...x} />
        ))}
      </div>
    </Content>
  );
};

export default Home;
