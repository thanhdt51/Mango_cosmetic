import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import PropTypes from "prop-types";

import Product from "../Product";

import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import s from "./ProductSwiper.module.scss";

SwiperCore.use(Navigation);

const products = [
  {
    brand_name: "Dove",
    id: 1816469,
    name: "Sữa Tắm Dưỡng Ẩm Dịu Mát Dove Aqua Moisture (900g)",
    price: 172000,
    short_description:
      "\nSữa Tắm Dưỡng Ẩm Dịu Mát Dove Aqua Moisture (900g) mang đến cho bạn làn da mềm mại, mịn màng cùng cảm giác dịu mát đến bất ngờ. Đặc biệt, sản phẩm với công thức dưỡng ẩm vượt trội ngay cả trong nước...",
    thumbnail_height: 280,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2a/e2/af/1dbdb298084579493b760b936859299d.jpg",
    thumbnail_width: 280,
    category: 1020,
  },
  {
    brand_name: "Hồng Hà",
    id: 101477085,
    name: "[COMBO CHỐNG DỊCH] Set 7 lọ Gel rửa tay khô Hồng Hà Kids care+ 50ml (8201)",
    price: 115000,
    short_description:
      "Gel rửa tay khô Hồng Hà Kids care+ 50ml 8201 là sản phẩm không thể thiếu trong balo mỗi khi bé đến trường. Sản phẩm không chỉ giúp các bé làm sạch vi khuẩn trên tay, nhờ thành phần Glycerin có trong...",
    thumbnail_height: 280,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/1d/cc/0e/feba83d099f31fff92623d32eb35ea1f.png",
    thumbnail_width: 280,
    category: 1020,
  },
  {
    brand_name: "Mellsavon",
    id: 101770508,
    name: "Sữa tắm Mellsavon chiết xuất từ bưởi Florida 460ML",
    price: 259000,
    short_description:
      "\nSữa tắm được chiết xuất từ bưởi, vỏ cam, quả chanh vôi từ Florida với thành phần chứa nhiều vitamin, axit xitric… giúp dưỡng ẩm, làm sạch da, là hàng rào bảo vệ làn da. Da sẽ ngày càng săn chắc và...",
    thumbnail_height: 280,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/17/64/ae/5e027246215b9f5f21d98ff3763d7496.jpg",
    thumbnail_width: 280,
    category: 1020,
  },
  {
    brand_name: "Reborn",
    id: 98103417,
    name: "Tẩy Da Chết Rebmặt-Loại Bỏ lớp da sần sùi khô ráp giúp da mịn màng và trắng sáng",
    price: 180000,
    short_description:
      "– Tẩy Da Chết Mặt Reborn Loại bỏ các tế bào da chết và các vùng da thô ráp sần bì.\n– Tẩy Da Chết Mặt Reborn có Hương thơm tự nhiên, mát lạnh giúp da có cảm giác sảng khoái sau khi sử dụng.\n– Giải...",
    thumbnail_height: 280,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/22/23/8f/0e5710fd19b80d970ab360b950efccff.jpg",
    thumbnail_width: 280,
    category: 1020,
  },
  {
    brand_name: "Dove",
    id: 460371,
    name: "Sữa Tắm Dưỡng Thể DOVE Với Dưỡng Chất Thấm Sâu 20274751 (900g)",
    price: 162000,
    short_description:
      "\n\n\n\nLoại sản phẩm\n\nSản phẩm là sữa tắm dưỡng thể chứa tinh chất dưỡng hoàn hảo nuôi dưỡng sâu cho da thêm mềm mại mịn màng.\nThành phần và công dụng\nTinh chất Nutrium MoistureTM giúp nuôi dưỡng làn da...",
    thumbnail_height: 280,
    thumbnail_url:
      "https://salt.tikicdn.com/cache/280x280/ts/product/d6/58/97/3d5dde5b6cf39428ca7845939cbef0b0.jpg",
    thumbnail_width: 280,
    category: 1020,
  },
];

function BestSellerSwiper({ className, title }) {
  return (
    <div className={className}>
      <h3 className={s.titleSwiper}>{title}</h3>
      <div className={s.swiper}>
        <Swiper
          navigation
          slidesPerView={1}
          breakpoints={{ 992: { slidesPerView: 4, spaceBetween: 5 } }}
        >
          {products.map((product) => (
            <SwiperSlide className={s.swiperSlide} key={product.id}>
              <Product
                thumbnailUrl={product.thumbnail_url}
                name={product.name}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

BestSellerSwiper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

BestSellerSwiper.defaultProps = {
  className: null,
  title: null,
};

export default BestSellerSwiper;
