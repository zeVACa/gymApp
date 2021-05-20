import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';

import './excercisesSlider.css';

import '../../../../node_modules/swiper/swiper-bundle.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function ExcercisesSlider({ trainingPlan, currentDayIndex }) {
  return (
    <div>
      <Swiper
        style={{ paddingBottom: '48px' }}
        grabCursor
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="mySwiper">
        {!trainingPlan[currentDayIndex] ? (
          <h1>План загружается</h1>
        ) : (
          trainingPlan[currentDayIndex].excercises.map((exerciseItem) => {
            return (
              <SwiperSlide
                style={
                  {
                    // display: 'flex',
                    // flexDirection: '',
                    // alignContent: 'stretch',
                    // alignItems: 'flex-end',
                    // height: 'auto',
                  }
                }
                className="swiper__slide">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image
                      image={exerciseItem.photo}
                      title="Contemplative Reptile"
                      height="250px"
                    />
                  </CardActionArea>
                  <CardContent style={{ padding: '24px 16px', height: '100%' }}>
                    <Typography
                      my={2}
                      align="left"
                      color="textPrimary"
                      component="h5"
                      variant="h5"
                      paragraph>{`${exerciseItem.name}`}</Typography>
                    <Typography align="left" paragraph color="textSecondary">
                      {exerciseItem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  );
}
