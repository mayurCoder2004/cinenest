import React, { useEffect, useState } from 'react'
import './trend.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay } from 'swiper/modules'
import TrendCard from '../components/TrendCard'

const Trend = () => {
    const [slides, setSlides] = useState([]);
    const fetchMovies = async () => {
    fetch('./data/movieData.json')
        .then((response=>response.json()))
        .then((data) => {
            setSlides(data) 
        })
        .catch((error) => {
            console.log(error.message)
        })
    };

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <section id='trend' className='trend'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className='section-title'>
                        Coming Soon
                    </h4>
                </div>
                <div className="row">
                    <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        }
                    }}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className='trendSwiper'
                    >
                        {
                            slides && slides.length > 0 && slides.map(slide => (
                                <SwiperSlide key={slide._id}>
                                    <TrendCard slide={slide} />
                                </SwiperSlide>
                            ))                              
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
  return (
    <div>Trend</div>
  )
}

export default Trend