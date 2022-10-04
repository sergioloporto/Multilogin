import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Img from "gatsby-image";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

import '@splidejs/react-splide/css';
import "./slider.scss";

const Slider = ({ data }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 1290px)" });

  return (
    <Splide
      options={{ rewind: true, width: isTablet ? 650 : 522 }}
      aria-label="Testimonials"
    >
      {data.map((el, i) => {
        const { author1, author2, text1, text2, image1, image2 } =
          el.node.frontmatter;

        return (
          <React.Fragment key={author1+i}>
            <SplideSlide>
              <div className="slide-container">
                <div className="single-quote upper-quote">
                  <Img fluid={image1?.childImageSharp.fixed} alt={author1} />
                  <figure className="text-container">
                    <blockquote className="quote">{text1}</blockquote>
                    <figcaption>{author1}</figcaption>
                  </figure>
                </div>

                <div className="single-quote lower-quote">
                  <Img fluid={image2?.childImageSharp.fixed} alt={author2} />
                  <figure className="text-container">
                    <blockquote className="quote">{text2}</blockquote>
                    <figcaption>{author2}</figcaption>
                  </figure>
                </div>
              </div>
            </SplideSlide>
          </React.Fragment>
        );
      })}
    </Splide>
  );
};

Img.propTypes = {
  fluid: PropTypes.object,
};

export { Slider };
