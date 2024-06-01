import React from 'react';
import ReactStars from 'react-stars';
import css from './Reviews.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const reviewsData = [
  {
    id: 1,
    author: 'Sudhanshu',
    review: 'Best Content Quality!!',
    date: '11-04-2023',
    stars: 5,
  },
  {
    id: 2,
    author: 'Anurag',
    review: 'Very Good in Faculty and great Educators',
    date: '11-04-2023',

    stars: 4.5,
  },
  {
    id: 3,
    author: 'Harsh',
    review: 'Love this ! Definetley gonna watch other courses too!!',
    date: '11-04-2023',
    stars: 4,
  },
  {
    id: 4,
    author: 'Rajat',
    review: `Great Quality Content.. A must try platform!`,
    date: '11-04-2023',
    stars: 5,
  },
  {
    id: 5,
    author: 'Aditya',
    review: `Very Unique and tons of Career boosting courses!!`,
    date: '11-04-2023',
    stars: 5,
  },

];


const Reviews = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className={css.outer}>
      <h2>Students Reviews ( <span className={css.noformat}> {reviewsData.length} </span> )</h2>
      <div className={css.content}>
        <div className={css.reviewsection}>
          <Carousel
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}>

            {reviewsData.map(review => (
              <div key={review.id}
                className={css.items}
              >
                <ReactStars
                  className={css.stars}
                  count={5}
                  size={30}
                  color2={'#0047ba'}
                  edit={false}
                  value={review.stars}
                />
                <div className={css.profile}>
                  <img src='/avatar.jpg' alt={`${review.author}'s Profile `} />
                  <p> <span className={css.namehead}> {review.author} </span> <br /> {`Reviewed on ${review.date} `}</p> </div>
                <p>{review.review}</p>
              </div>
            ))}
            {/* </Slider> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
