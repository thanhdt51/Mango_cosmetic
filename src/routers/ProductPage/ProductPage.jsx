import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Product from "../../components/Product";

import s from "./ProductPage.module.scss";

const banners = {
  makeup: {
    title: "MAKE UP",
    description: "Let's get what you lost.",
    imgSrc: {
      desktop: "../../../public/images/makeup-banner.jpg",
      mobile: "../../../public/images/makeup-banner-mobile.jpg",
      default: "../../../public/images/makeup-banner-mobile.jpg",
    },
  },

  skincare: {
    title: "SKINCARE",
    description: "Care for your Skin, care for your beauty.",
    imgSrc: {
      desktop: "../../../public/images/skincare-banner.jpg",
      mobile: "../../../public/images/skincare-banner-mobile.jpg",
      default: "../../../public/images/skincare-banner-mobile.jpg",
    },
  },

  bodycare: {
    title: "BODYCARE",
    description: "Because your Skin deserves the best care.",
    imgSrc: {
      desktop: "../../../public/images/bodycare-banner.jpg",
      mobile: "../../../public/images/bodycare-banner-mobile.jpg",
      default: "../../../public/images/bodycare-banner-mobile.jpg",
    },
  },

  haircare: {
    title: "HAIRCARE",
    description: "A Good Moments Everyday.",
    imgSrc: {
      desktop: "../../../public/images/haircare-banner.jpg",
      mobile: "../../../public/images/haircare-banner-mobile.jpg",
      default: "../../../public/images/haircare-banner-mobile.jpg",
    },
  },
};

const products = {
  makeup: [
    {
      id: 72709033,
      name: "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm",
      brand_name: "Elyza",
      short_description:
        "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm\nBên cạnh các thỏi son lì và son kem lâu trôi, các nàng cũng nên kết thân với son dưỡng môi có màu nhẹ nhàng giúp đôi môi luôn...",
      price: 246000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b3/1d/9e/d30e5d76eec1f06c1c4d400beeb684d3.png",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 902013,
      name: "Nước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml)",
      brand_name: "L'ORÉAL",
      short_description:
        "\nNước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml) mang đến các tẩy trang, làm sạch, giữ ẩm và dưỡng mềm da đồng thời chỉ trong một sản phẩm. Sản phẩm giúp lấy đi sạch cặn trang điểm nhưng...",
      price: 148000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/f3/59/20/dac6b526119d2aa23afe3245fec8c816.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 31874925,
      name: "Son Kem Lì Black Rouge Air Fit Velvet Tint – Hàn Quốc",
      brand_name: "Black Rouge",
      short_description:
        "Thương hiệu: Black rougeXuất xứ: Hàn Quốc\nBlack Rouge Air Fit Velvet Tint được ra mắt vào những tháng đầu năm 2018 và đã ngay lập tức tạo được cơn sốt không hề nhỏ trong cộng đồng yêu son. Tiếp nối...",
      price: 138200,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/05/ef/71/74e40aca8991bc82f2f5fe001aac7ad2.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 13410632,
      name: "Combo 6 hộp bông tẩy trang Silcot (82 miếng/hộp)",
      brand_name: "Silcot",
      short_description:
        "Bộ 6 hộp Bông tẩy trang Silcot (82 miếng/hộp) là sản phẩm chăm sóc da cao cấp bán chạy số 1 Nhật Bản trong hơn 10 năm liền. Được làm từ 100% sợi bông tự nhiên, bông tẩy trang mềm xốp, êm ái và vô...",
      price: 184000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9f/e9/fc/50517f2d8f7a7806bed8e6666fb29fb5.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 9803066,
      name: "Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kì)",
      brand_name: "Ipek",
      short_description:
        "\nCombo Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kỳ) thành phần 100% bông cotton là bông tẩy trang hữu cơ được sản xuất bởi công ty Ipek Idrofil Pamuk công ty hàng đầu Đông Âu về sản xuất bông an...",
      price: 30000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/6e/78/28/eba2f62da7883bf339be586ab8a75911.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
  ],
  face: [
    {
      id: 72709033,
      name: "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm",
      brand_name: "Elyza",
      short_description:
        "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm\nBên cạnh các thỏi son lì và son kem lâu trôi, các nàng cũng nên kết thân với son dưỡng môi có màu nhẹ nhàng giúp đôi môi luôn...",
      price: 246000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b3/1d/9e/d30e5d76eec1f06c1c4d400beeb684d3.png",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 902013,
      name: "Nước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml)",
      brand_name: "L'ORÉAL",
      short_description:
        "\nNước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml) mang đến các tẩy trang, làm sạch, giữ ẩm và dưỡng mềm da đồng thời chỉ trong một sản phẩm. Sản phẩm giúp lấy đi sạch cặn trang điểm nhưng...",
      price: 148000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/f3/59/20/dac6b526119d2aa23afe3245fec8c816.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 31874925,
      name: "Son Kem Lì Black Rouge Air Fit Velvet Tint – Hàn Quốc",
      brand_name: "Black Rouge",
      short_description:
        "Thương hiệu: Black rougeXuất xứ: Hàn Quốc\nBlack Rouge Air Fit Velvet Tint được ra mắt vào những tháng đầu năm 2018 và đã ngay lập tức tạo được cơn sốt không hề nhỏ trong cộng đồng yêu son. Tiếp nối...",
      price: 138200,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/05/ef/71/74e40aca8991bc82f2f5fe001aac7ad2.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 13410632,
      name: "Combo 6 hộp bông tẩy trang Silcot (82 miếng/hộp)",
      brand_name: "Silcot",
      short_description:
        "Bộ 6 hộp Bông tẩy trang Silcot (82 miếng/hộp) là sản phẩm chăm sóc da cao cấp bán chạy số 1 Nhật Bản trong hơn 10 năm liền. Được làm từ 100% sợi bông tự nhiên, bông tẩy trang mềm xốp, êm ái và vô...",
      price: 184000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9f/e9/fc/50517f2d8f7a7806bed8e6666fb29fb5.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 9803066,
      name: "Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kì)",
      brand_name: "Ipek",
      short_description:
        "\nCombo Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kỳ) thành phần 100% bông cotton là bông tẩy trang hữu cơ được sản xuất bởi công ty Ipek Idrofil Pamuk công ty hàng đầu Đông Âu về sản xuất bông an...",
      price: 30000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/6e/78/28/eba2f62da7883bf339be586ab8a75911.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
  ],
  lips: [
    {
      id: 72709033,
      name: "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm",
      brand_name: "Elyza",
      short_description:
        "Son Dưỡng Môi Không Phai Elyza Hương Thị Siêu Sang – Phiên Bản Bươm Bướm\nBên cạnh các thỏi son lì và son kem lâu trôi, các nàng cũng nên kết thân với son dưỡng môi có màu nhẹ nhàng giúp đôi môi luôn...",
      price: 246000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b3/1d/9e/d30e5d76eec1f06c1c4d400beeb684d3.png",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 902013,
      name: "Nước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml)",
      brand_name: "L'ORÉAL",
      short_description:
        "\nNước Tẩy Trang L'Oreal 3 In 1 Micellar Làm Sạch Sâu (400ml) mang đến các tẩy trang, làm sạch, giữ ẩm và dưỡng mềm da đồng thời chỉ trong một sản phẩm. Sản phẩm giúp lấy đi sạch cặn trang điểm nhưng...",
      price: 148000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/f3/59/20/dac6b526119d2aa23afe3245fec8c816.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 31874925,
      name: "Son Kem Lì Black Rouge Air Fit Velvet Tint – Hàn Quốc",
      brand_name: "Black Rouge",
      short_description:
        "Thương hiệu: Black rougeXuất xứ: Hàn Quốc\nBlack Rouge Air Fit Velvet Tint được ra mắt vào những tháng đầu năm 2018 và đã ngay lập tức tạo được cơn sốt không hề nhỏ trong cộng đồng yêu son. Tiếp nối...",
      price: 138200,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/05/ef/71/74e40aca8991bc82f2f5fe001aac7ad2.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 13410632,
      name: "Combo 6 hộp bông tẩy trang Silcot (82 miếng/hộp)",
      brand_name: "Silcot",
      short_description:
        "Bộ 6 hộp Bông tẩy trang Silcot (82 miếng/hộp) là sản phẩm chăm sóc da cao cấp bán chạy số 1 Nhật Bản trong hơn 10 năm liền. Được làm từ 100% sợi bông tự nhiên, bông tẩy trang mềm xốp, êm ái và vô...",
      price: 184000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9f/e9/fc/50517f2d8f7a7806bed8e6666fb29fb5.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
    {
      id: 9803066,
      name: "Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kì)",
      brand_name: "Ipek",
      short_description:
        "\nCombo Bông Tẩy Trang Ipek 130 Miếng (Thổ Nhĩ Kỳ) thành phần 100% bông cotton là bông tẩy trang hữu cơ được sản xuất bởi công ty Ipek Idrofil Pamuk công ty hàng đầu Đông Âu về sản xuất bông an...",
      price: 30000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/6e/78/28/eba2f62da7883bf339be586ab8a75911.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1000,
    },
  ],
};

function ProductPage() {
  const { category, subCategory } = useParams();

  return (
    <Layout>
      <Banner
        className={s.banner}
        title={banners[category].title}
        description={banners[category].description}
        imgSrc={banners[subCategory || category].imgSrc}
      />
      <Row className={s.productList}>
        {products[category].map((product) => (
          <Col xs={6} key={product.id}>
            <Product
              thumbnailUrl={product.thumbnail_url}
              name={product.name}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default ProductPage;
