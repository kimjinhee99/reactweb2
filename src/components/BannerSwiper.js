import styled from "styled-components";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

import bannerImg01 from '../assets/images/banner01.jpg';
import bannerImg02 from '../assets/images/banner02.jpg';

const path = process.env.PUBLIC_URL;

const Header = styled.div`
  position: relative;
  height: 100vh; width: 100%;
  z-index: 99;

    .bannerImg01 {
      background: url(${bannerImg01}), no-repeat 50% / cover;
      height: 100vh;
      z-index: -1;
      padding-right: 12px;
      padding-left: 12px;
    }
    .bannerImg02 {
      background: url(${bannerImg02}) no-repeat 50% / cover;
      height: 100vh;
      z-index: -1;
      padding-right: 12px;
      padding-left: 12px;
    }
    .bannerTxt {
      height: 100%;
      color: #f7f7f7;
      font-family: 'IropkeBatang';
      font-weight: 300;
      text-align: center;
      display: flex;
      flex-flow: column;
      justify-content: center;
      margin: 0 auto;
      max-width: 600px;
      z-index: 20;
      box-sizing: border-box;
    }
    .bannerImg02 {
      display: flex;
      justify-content: flex-end;
      padding-right: 192px;
    }
    .bannerTxt02 {
      text-align: left;
      margin: 0;
    }
    .bannerTxt h1 {
      font-size: 56px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 1.25;
    }
    .bannerTxt p {
      font-size: 24px;
      margin-top: 30px;
      margin-bottom: 10px;
      line-height: 1.6;
    }
    .bannerBtn {
      margin-top: 3rem;
      box-sizing: border-box;
    }
    .bannerBtn a {
      border: 2px solid #fff;
      font-size: 1rem;
      font-weight: 300;
      line-height: 30px;
      border-radius: 3px;
      padding: 10px 26px;
      padding-right: 3rem;
      padding-left: 3rem;
      text-transform: uppercase;
      transition: all .3s ease-in-out;
    }
    .bannerBtn:hover a {
      background-color: #fff;
      color: #333;
    }
    .swiper-button-prev {
      width: 52px; height: 52px;
      position: absolute;
      top: 50%; left: 0;
      cursor: pointer;
      background-color: rgba(0,0,0,0.3);
      border-radius: 0 3px 0 3px;
      line-height: 50px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 700;
      text-align: center;
      z-index: 10;

      transition: all .3s ease-in-out;
    }
    .swiper-button-prev::after {
      font-size: 20px;
    }
    .swiper-button-next {
      width: 52px; height: 52px;
      position: absolute;
      top: 50%; right: 0;
      cursor: pointer;
      background-color: rgba(0,0,0,0.3);
      border-radius: 3px 0 0 3px;
      line-height: 50px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 700;
      text-align: center;
      z-index: 10;

      transition: all .3s ease-in-out;
    }
    .swiper-button-next::after {
      font-size: 20px;
    }
    .swiper-button-prev:hover {
      background-color: rgba(0,0,0,0.6);
    }
    .swiper-button-next:hover {
      background-color: rgba(0,0,0,0.6);
    }
`;

// const bannerList = [
//   {id: 1, Url: "./images/banner01.jpg", alt: "banner01", Title:"df", txtTitle: "????????? ????????????????????? ??? ?????? ??????."},
//   {id: 1, Url: "./images/banner02.jpg", alt: "banner02", Title:"df"},
// ]

function BannerSwiper() {
  // const path = process.env.PUBLIC_URL;

  return (
      <Header>
        <Swiper
          cssMode={true}
          loop={true}
          autoplay={{
            delay: 6000,
          }}
          navigation
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          > 
            <SwiperSlide>
              <div className="bannerImg01">
                <div className="bannerTxt bannerTxt01">
                  <h1>????????? ????????????<br />
                      ????????? ????????? ??????.<br />
                      ????????? ?????????.</h1>
                  <p>???????????? ?????? ???????????? ?????? ???????????? ?????? ???????????? ??????.<br />
                      ???, ?????? ????????? ?????? ?????? ????????? ????????? ????????????.</p>
                  <div className="bannerBtn">
                    <a href="#">more view</a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bannerImg02">
                <div className="bannerTxt bannerTxt02">
                  <h1>???????????? ??????<br />
                      ????????? ??????<br />
                      ????????? ?????????.</h1>
                  <p>???????????? ?????? ???????????? ?????? ???????????? ?????? ???????????? ??????.<br />
                      ???, ?????? ????????? ?????? ?????? ????????? ????????? ????????????.</p>
                  <div className="bannerBtn">
                    <a href="#">more view</a>
                  </div>
                </div>
              </div>
              </SwiperSlide>

          {/* {bannerList.map( (img) => 
            <SwiperSlide key={img.id}>
              <img src={path + img.Url} alt={img.Title} />
              <div className="bannerTxt">
                <h1>{img.txtTitle}</h1>
                <p>{img.des}</p>
              </div>
              </SwiperSlide>)} */}
        </Swiper>
      </Header>
  );
}

export default BannerSwiper;