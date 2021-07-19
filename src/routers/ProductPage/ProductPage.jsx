import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Product from "../../components/Product";
import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

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
  eyes: {
    title: "EYES",
    description: "Let's get what you lost.",
    imgSrc: {
      desktop: "../../../public/images/makeup-banner.jpg",
      mobile: "../../../public/images/makeup-banner-mobile.jpg",
      default: "../../../public/images/makeup-banner-mobile.jpg",
    },
  },
  lips: {
    title: "LIPS",
    description: "Let's get what you lost.",
    imgSrc: {
      desktop: "../../../public/images/makeup-banner.jpg",
      mobile: "../../../public/images/makeup-banner-mobile.jpg",
      default: "../../../public/images/makeup-banner-mobile.jpg",
    },
  },
  face: {
    title: "FACE",
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
  mask: {
    title: "MASK",
    description: "Care for your Skin, care for your beauty.",
    imgSrc: {
      desktop: "../../../public/images/skincare-banner.jpg",
      mobile: "../../../public/images/skincare-banner-mobile.jpg",
      default: "../../../public/images/skincare-banner-mobile.jpg",
    },
  },
  cleanser: {
    title: "CLEANSER",
    description: "Care for your Skin, care for your beauty.",
    imgSrc: {
      desktop: "../../../public/images/skincare-banner.jpg",
      mobile: "../../../public/images/skincare-banner-mobile.jpg",
      default: "../../../public/images/skincare-banner-mobile.jpg",
    },
  },
  toner: {
    title: "TONER",
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
  shower: {
    title: "SHOWER",
    description: "Because your Skin deserves the best care.",
    imgSrc: {
      desktop: "../../../public/images/bodycare-banner.jpg",
      mobile: "../../../public/images/bodycare-banner-mobile.jpg",
      default: "../../../public/images/bodycare-banner-mobile.jpg",
    },
  },
  lotion: {
    title: "LOTION",
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
  conditioner: {
    title: "CONDITIONER",
    description: "A Good Moments Everyday.",
    imgSrc: {
      desktop: "../../../public/images/haircare-banner.jpg",
      mobile: "../../../public/images/haircare-banner-mobile.jpg",
      default: "../../../public/images/haircare-banner-mobile.jpg",
    },
  },
  shampoo: {
    title: "SHAMPOO",
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
      id: 727090331,
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
      id: 1,
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
      id: 318749251,
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
      id: 134106321,
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
      id: 9020132,
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
      id: 318749252,
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
      id: 134106322,
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
      id: 727090332,
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
      id: 318749253,
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
      id: 134106323,
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
  eyes: [
    {
      id: 727090333,
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
      id: 9020133,
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
      id: 134106324,
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

  skincare: [
    {
      id: 54748894,
      name: "SẠCH MỤN TRÊN DA, SERUM MỤN QUYỀN NĂNG SKIN OCEAN PLUS, QUYÊN ĐI NỖI LO VỀ MỤN.",
      brand_name: "SKIN OCEAN",
      short_description:
        "\nĐây là tin tốt dành cho bạn, serum hỗ trợ trị mụn Skin Ocean Plus cung cấp giải pháp vượt trội sẽ giúp bạn đánh tan các nỗi lo về mụn.\nThật đấy tin tôi đi, Skin Ocean Plus là một loại serum hỗ trợ...",
      price: 189000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b6/8c/ea/b68a52f7907b38c5878881527422d1f0.png",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 1362447,
      name: "Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) - 8394107341305,9318637069637",
      brand_name: "Cetaphil",
      short_description:
        "\nSữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) có công thức không xà phòng đã đạt được nhiều giải thưởng trong lĩnh vực làm đẹp và chăm sóc sức khỏe.\nSữa rửa mặt dịu nhẹ Cetaphil với công thức đặc...",
      price: 285000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/35/e9/fd/de5592b43a5e46550bc06d1aeaa45d63.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 51540051,
      name: "Kem chống nắng dưỡng da dạng sữa bảo vệ hoàn hảo Anessa Perfect UV Sunscreen Skincare Milk SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Kem chống nắng dưỡng da dạng sữa Anessa Perfect UV Sunscreen Skincare Milk - 60mL – SPF 50+/ PA++++ với gần 100 năm nghiên cứu chuyên sâu về chống nắng sẽ mang đến cho bạn:\n\n• Chống trôi trong nước...",
      price: 479000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e2/87/95/7a60144019615283ba4209077cfbe665.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 77305646,
      name: "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml giúp dưỡng da và bảo vệ da tối đa với thành phần tiêu chuẩn 5 không, dịu nhẹ và an toàn với làn da nhạy cảm nhất. Công...",
      price: 474000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9e/ff/b0/72821b5ac0a1d3fa370ad4d4908e93a5.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 96227452,
      name: "Máy Hút Mụn Đa Năng Thế Hệ Mới - Đầu Đen, Cám, Bã Nhờn, Rửa Mặt, Làm Sạch Lỗ Chân Lông, Phun Oxy Dưỡng Ẩm Sáng Mịn Da",
      brand_name: "Mifan",
      short_description:
        "MÁY HÚT MỤN ĐA NĂNG THẾ HỆ MỚI 2020 - HÚT SIÊU SẠCH, ÊM ÁI MỀM MẠI KHÔNG GÂY ĐAU RÁT - TẶNG KÈM 1 LỌ KHOÁNG CHẤT DƯỠNG DA\n \n\nTOP 1 SẢN PHẨM CHĂM SÓC DA TẠI NHÀ CÔNG NGHỆ ÁNH SÁNG XANH TÂN TIẾNBONG...",
      price: 259000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/54/f6/94/27c59a45b74b0fae29f0940e6c885ca0.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
  ],
  toner: [
    {
      id: 54748894,
      name: "SẠCH MỤN TRÊN DA, SERUM MỤN QUYỀN NĂNG SKIN OCEAN PLUS, QUYÊN ĐI NỖI LO VỀ MỤN.",
      brand_name: "SKIN OCEAN",
      short_description:
        "\nĐây là tin tốt dành cho bạn, serum hỗ trợ trị mụn Skin Ocean Plus cung cấp giải pháp vượt trội sẽ giúp bạn đánh tan các nỗi lo về mụn.\nThật đấy tin tôi đi, Skin Ocean Plus là một loại serum hỗ trợ...",
      price: 189000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b6/8c/ea/b68a52f7907b38c5878881527422d1f0.png",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 1362447,
      name: "Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) - 8394107341305,9318637069637",
      brand_name: "Cetaphil",
      short_description:
        "\nSữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) có công thức không xà phòng đã đạt được nhiều giải thưởng trong lĩnh vực làm đẹp và chăm sóc sức khỏe.\nSữa rửa mặt dịu nhẹ Cetaphil với công thức đặc...",
      price: 285000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/35/e9/fd/de5592b43a5e46550bc06d1aeaa45d63.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 51540051,
      name: "Kem chống nắng dưỡng da dạng sữa bảo vệ hoàn hảo Anessa Perfect UV Sunscreen Skincare Milk SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Kem chống nắng dưỡng da dạng sữa Anessa Perfect UV Sunscreen Skincare Milk - 60mL – SPF 50+/ PA++++ với gần 100 năm nghiên cứu chuyên sâu về chống nắng sẽ mang đến cho bạn:\n\n• Chống trôi trong nước...",
      price: 479000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e2/87/95/7a60144019615283ba4209077cfbe665.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 77305646,
      name: "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml giúp dưỡng da và bảo vệ da tối đa với thành phần tiêu chuẩn 5 không, dịu nhẹ và an toàn với làn da nhạy cảm nhất. Công...",
      price: 474000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9e/ff/b0/72821b5ac0a1d3fa370ad4d4908e93a5.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 96227452,
      name: "Máy Hút Mụn Đa Năng Thế Hệ Mới - Đầu Đen, Cám, Bã Nhờn, Rửa Mặt, Làm Sạch Lỗ Chân Lông, Phun Oxy Dưỡng Ẩm Sáng Mịn Da",
      brand_name: "Mifan",
      short_description:
        "MÁY HÚT MỤN ĐA NĂNG THẾ HỆ MỚI 2020 - HÚT SIÊU SẠCH, ÊM ÁI MỀM MẠI KHÔNG GÂY ĐAU RÁT - TẶNG KÈM 1 LỌ KHOÁNG CHẤT DƯỠNG DA\n \n\nTOP 1 SẢN PHẨM CHĂM SÓC DA TẠI NHÀ CÔNG NGHỆ ÁNH SÁNG XANH TÂN TIẾNBONG...",
      price: 259000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/54/f6/94/27c59a45b74b0fae29f0940e6c885ca0.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
  ],
  cleanser: [
    {
      id: 54748894,
      name: "SẠCH MỤN TRÊN DA, SERUM MỤN QUYỀN NĂNG SKIN OCEAN PLUS, QUYÊN ĐI NỖI LO VỀ MỤN.",
      brand_name: "SKIN OCEAN",
      short_description:
        "\nĐây là tin tốt dành cho bạn, serum hỗ trợ trị mụn Skin Ocean Plus cung cấp giải pháp vượt trội sẽ giúp bạn đánh tan các nỗi lo về mụn.\nThật đấy tin tôi đi, Skin Ocean Plus là một loại serum hỗ trợ...",
      price: 189000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b6/8c/ea/b68a52f7907b38c5878881527422d1f0.png",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 1362447,
      name: "Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) - 8394107341305,9318637069637",
      brand_name: "Cetaphil",
      short_description:
        "\nSữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) có công thức không xà phòng đã đạt được nhiều giải thưởng trong lĩnh vực làm đẹp và chăm sóc sức khỏe.\nSữa rửa mặt dịu nhẹ Cetaphil với công thức đặc...",
      price: 285000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/35/e9/fd/de5592b43a5e46550bc06d1aeaa45d63.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 51540051,
      name: "Kem chống nắng dưỡng da dạng sữa bảo vệ hoàn hảo Anessa Perfect UV Sunscreen Skincare Milk SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Kem chống nắng dưỡng da dạng sữa Anessa Perfect UV Sunscreen Skincare Milk - 60mL – SPF 50+/ PA++++ với gần 100 năm nghiên cứu chuyên sâu về chống nắng sẽ mang đến cho bạn:\n\n• Chống trôi trong nước...",
      price: 479000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e2/87/95/7a60144019615283ba4209077cfbe665.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 77305646,
      name: "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml giúp dưỡng da và bảo vệ da tối đa với thành phần tiêu chuẩn 5 không, dịu nhẹ và an toàn với làn da nhạy cảm nhất. Công...",
      price: 474000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9e/ff/b0/72821b5ac0a1d3fa370ad4d4908e93a5.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 96227452,
      name: "Máy Hút Mụn Đa Năng Thế Hệ Mới - Đầu Đen, Cám, Bã Nhờn, Rửa Mặt, Làm Sạch Lỗ Chân Lông, Phun Oxy Dưỡng Ẩm Sáng Mịn Da",
      brand_name: "Mifan",
      short_description:
        "MÁY HÚT MỤN ĐA NĂNG THẾ HỆ MỚI 2020 - HÚT SIÊU SẠCH, ÊM ÁI MỀM MẠI KHÔNG GÂY ĐAU RÁT - TẶNG KÈM 1 LỌ KHOÁNG CHẤT DƯỠNG DA\n \n\nTOP 1 SẢN PHẨM CHĂM SÓC DA TẠI NHÀ CÔNG NGHỆ ÁNH SÁNG XANH TÂN TIẾNBONG...",
      price: 259000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/54/f6/94/27c59a45b74b0fae29f0940e6c885ca0.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
  ],
  mask: [
    {
      id: 54748894,
      name: "SẠCH MỤN TRÊN DA, SERUM MỤN QUYỀN NĂNG SKIN OCEAN PLUS, QUYÊN ĐI NỖI LO VỀ MỤN.",
      brand_name: "SKIN OCEAN",
      short_description:
        "\nĐây là tin tốt dành cho bạn, serum hỗ trợ trị mụn Skin Ocean Plus cung cấp giải pháp vượt trội sẽ giúp bạn đánh tan các nỗi lo về mụn.\nThật đấy tin tôi đi, Skin Ocean Plus là một loại serum hỗ trợ...",
      price: 189000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b6/8c/ea/b68a52f7907b38c5878881527422d1f0.png",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 1362447,
      name: "Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) - 8394107341305,9318637069637",
      brand_name: "Cetaphil",
      short_description:
        "\nSữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) có công thức không xà phòng đã đạt được nhiều giải thưởng trong lĩnh vực làm đẹp và chăm sóc sức khỏe.\nSữa rửa mặt dịu nhẹ Cetaphil với công thức đặc...",
      price: 285000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/35/e9/fd/de5592b43a5e46550bc06d1aeaa45d63.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 51540051,
      name: "Kem chống nắng dưỡng da dạng sữa bảo vệ hoàn hảo Anessa Perfect UV Sunscreen Skincare Milk SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Kem chống nắng dưỡng da dạng sữa Anessa Perfect UV Sunscreen Skincare Milk - 60mL – SPF 50+/ PA++++ với gần 100 năm nghiên cứu chuyên sâu về chống nắng sẽ mang đến cho bạn:\n\n• Chống trôi trong nước...",
      price: 479000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e2/87/95/7a60144019615283ba4209077cfbe665.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 77305646,
      name: "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml",
      brand_name: "ANESSA",
      short_description:
        "Sữa chống nắng dịu nhẹ cho da nhạy cảm và trẻ em Anessa SPF 50+ PA++++ 60ml giúp dưỡng da và bảo vệ da tối đa với thành phần tiêu chuẩn 5 không, dịu nhẹ và an toàn với làn da nhạy cảm nhất. Công...",
      price: 474000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9e/ff/b0/72821b5ac0a1d3fa370ad4d4908e93a5.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
    {
      id: 96227452,
      name: "Máy Hút Mụn Đa Năng Thế Hệ Mới - Đầu Đen, Cám, Bã Nhờn, Rửa Mặt, Làm Sạch Lỗ Chân Lông, Phun Oxy Dưỡng Ẩm Sáng Mịn Da",
      brand_name: "Mifan",
      short_description:
        "MÁY HÚT MỤN ĐA NĂNG THẾ HỆ MỚI 2020 - HÚT SIÊU SẠCH, ÊM ÁI MỀM MẠI KHÔNG GÂY ĐAU RÁT - TẶNG KÈM 1 LỌ KHOÁNG CHẤT DƯỠNG DA\n \n\nTOP 1 SẢN PHẨM CHĂM SÓC DA TẠI NHÀ CÔNG NGHỆ ÁNH SÁNG XANH TÂN TIẾNBONG...",
      price: 259000,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/54/f6/94/27c59a45b74b0fae29f0940e6c885ca0.jpg",
      thumbnail_width: 280,
      thumbnail_height: 280,
      category: 1010,
    },
  ],

  bodycare: [
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
  ],
  shower: [
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
  ],
  lotion: [
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
  ],

  haircare: [
    {
      brand_name: "Dynik",
      id: 71961864,
      name: "Dầu gội nam DYNIK Hương Rêu Sồi Cuốn Hút 650g",
      price: 135000,
      short_description:
        "Dầu gội nam DYNIK Hương Rêu Sồi Cuốn Hút 650g\nKhối lượng tịnh: 650g\nNgày sản xuất: Xem trên bao bì\nHạn sử dụng: 2 năm kể từ ngày sản xuất\n\nCho cảm giác mát lạnh đến từ bạc hà the mát cùng hương thơm...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e5/ee/d2/a4244161e3b9a42236333497ed5e5e7e.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "OEM",
      id: 101905074,
      name: "Lô cuốn tóc, lô uốn tóc gai dính tạo độ phồng sóng bồng bềnh giúp nàng thêm xinh KT31",
      price: 12000,
      short_description:
        "Lô uốn tóc gai dính, lô cuốn tóc mái không dùng nhiệt KT31\n\n\nBạn muốn có một kiểu tóc xoăn mới lạ trong một dịp đặc biệt? Bạn thích mái tóc mình được uốn lọn bồng bềnh mỗi ngày nhưng lo ngại các loại...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/31/18/c5/3c4def69b0440a523eeff3442c02d148.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "Alika",
      id: 100352630,
      name: "Bộ Tứ  Sản Phẩm Chăm Sóc Tóc Chuyên Sâu Alika Cho Nữ, Ngăn Rụng Tóc, Kích Thích Mọc Tóc Nhanh, Dưỡng Mọc Tóc Mềm Mượt",
      price: 1780000,
      short_description:
        "Bộ sản phẩm ALIKA FOR WOMEN giúp giảm rụng và hỗ trợ tóc mọc dày, dài và chắc khỏe hơn. ALIKA FOR WOMEN là sự kết hợp hoàn hảo giữa công nghệ Liposome và các hoạt chất tiên tiến Redensyl, Capixyl,...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/5d/a8/9e/4a4c63f32581ea7939f620154821436e.png",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "OEM",
      id: 101359154,
      name: "Bộ lược chải phủ tóc bạc thông minh thảo dược công nghệ mới nhất ( đen tư nhiên )",
      price: 195000,
      short_description:
        "Bộ lược chải phủ tóc bạc thông minh thảo dược công nghệ mới nhất ( đen tư nhiên ) che phủ tóc bạc hiệu quả nhất chỉ vởi vài thao tác đơn giản bạn có ngay một mái tóc đen tự nhiên.\nDễ dàng đưa thuốc...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9f/93/91/68675988fb68cef38780b7bb57e79cf0.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "TRESemmé",
      id: 17043131,
      name: "Dầu Gội Tresemmé Keratin Smooth Tinh Dầu Argan Và Keratin Vào Nếp Suôn Mượt (850g)",
      price: 172000,
      short_description:
        'Bạn phải "đánh vật" với mái tóc xơ rối mỗi ngày? Nay đã có bí quyết từ chuyên gia tạo mẫu tóc! Dòng sản phẩm TRESemmé Keratine Smooth mới, cho tóc vào nếp suôn mượt đến 48 giờ để bạn tự tin làm chủ...',
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/41/1d/7d/d4048a5e3d6546142e76ed3b457301c6.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
  ],
  shampoo: [
    {
      brand_name: "Dynik",
      id: 71961864,
      name: "Dầu gội nam DYNIK Hương Rêu Sồi Cuốn Hút 650g",
      price: 135000,
      short_description:
        "Dầu gội nam DYNIK Hương Rêu Sồi Cuốn Hút 650g\nKhối lượng tịnh: 650g\nNgày sản xuất: Xem trên bao bì\nHạn sử dụng: 2 năm kể từ ngày sản xuất\n\nCho cảm giác mát lạnh đến từ bạc hà the mát cùng hương thơm...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e5/ee/d2/a4244161e3b9a42236333497ed5e5e7e.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "OEM",
      id: 101905074,
      name: "Lô cuốn tóc, lô uốn tóc gai dính tạo độ phồng sóng bồng bềnh giúp nàng thêm xinh KT31",
      price: 12000,
      short_description:
        "Lô uốn tóc gai dính, lô cuốn tóc mái không dùng nhiệt KT31\n\n\nBạn muốn có một kiểu tóc xoăn mới lạ trong một dịp đặc biệt? Bạn thích mái tóc mình được uốn lọn bồng bềnh mỗi ngày nhưng lo ngại các loại...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/31/18/c5/3c4def69b0440a523eeff3442c02d148.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "Alika",
      id: 100352630,
      name: "Bộ Tứ  Sản Phẩm Chăm Sóc Tóc Chuyên Sâu Alika Cho Nữ, Ngăn Rụng Tóc, Kích Thích Mọc Tóc Nhanh, Dưỡng Mọc Tóc Mềm Mượt",
      price: 1780000,
      short_description:
        "Bộ sản phẩm ALIKA FOR WOMEN giúp giảm rụng và hỗ trợ tóc mọc dày, dài và chắc khỏe hơn. ALIKA FOR WOMEN là sự kết hợp hoàn hảo giữa công nghệ Liposome và các hoạt chất tiên tiến Redensyl, Capixyl,...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/5d/a8/9e/4a4c63f32581ea7939f620154821436e.png",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "OEM",
      id: 101359154,
      name: "Bộ lược chải phủ tóc bạc thông minh thảo dược công nghệ mới nhất ( đen tư nhiên )",
      price: 195000,
      short_description:
        "Bộ lược chải phủ tóc bạc thông minh thảo dược công nghệ mới nhất ( đen tư nhiên ) che phủ tóc bạc hiệu quả nhất chỉ vởi vài thao tác đơn giản bạn có ngay một mái tóc đen tự nhiên.\nDễ dàng đưa thuốc...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9f/93/91/68675988fb68cef38780b7bb57e79cf0.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "TRESemmé",
      id: 17043131,
      name: "Dầu Gội Tresemmé Keratin Smooth Tinh Dầu Argan Và Keratin Vào Nếp Suôn Mượt (850g)",
      price: 172000,
      short_description:
        'Bạn phải "đánh vật" với mái tóc xơ rối mỗi ngày? Nay đã có bí quyết từ chuyên gia tạo mẫu tóc! Dòng sản phẩm TRESemmé Keratine Smooth mới, cho tóc vào nếp suôn mượt đến 48 giờ để bạn tự tin làm chủ...',
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/41/1d/7d/d4048a5e3d6546142e76ed3b457301c6.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
  ],
  conditioner: [
    {
      brand_name: "Dynik",
      id: 71961864,
      name: "Dầu gội nam DYNIK Hương Rêu Sồi Cuốn Hút 650g",
      price: 135000,
      short_description:
        "Dầu gội nam DYNIK Hương Rêu Sồi Cuốn Hút 650g\nKhối lượng tịnh: 650g\nNgày sản xuất: Xem trên bao bì\nHạn sử dụng: 2 năm kể từ ngày sản xuất\n\nCho cảm giác mát lạnh đến từ bạc hà the mát cùng hương thơm...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e5/ee/d2/a4244161e3b9a42236333497ed5e5e7e.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "OEM",
      id: 101905074,
      name: "Lô cuốn tóc, lô uốn tóc gai dính tạo độ phồng sóng bồng bềnh giúp nàng thêm xinh KT31",
      price: 12000,
      short_description:
        "Lô uốn tóc gai dính, lô cuốn tóc mái không dùng nhiệt KT31\n\n\nBạn muốn có một kiểu tóc xoăn mới lạ trong một dịp đặc biệt? Bạn thích mái tóc mình được uốn lọn bồng bềnh mỗi ngày nhưng lo ngại các loại...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/31/18/c5/3c4def69b0440a523eeff3442c02d148.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "Alika",
      id: 100352630,
      name: "Bộ Tứ  Sản Phẩm Chăm Sóc Tóc Chuyên Sâu Alika Cho Nữ, Ngăn Rụng Tóc, Kích Thích Mọc Tóc Nhanh, Dưỡng Mọc Tóc Mềm Mượt",
      price: 1780000,
      short_description:
        "Bộ sản phẩm ALIKA FOR WOMEN giúp giảm rụng và hỗ trợ tóc mọc dày, dài và chắc khỏe hơn. ALIKA FOR WOMEN là sự kết hợp hoàn hảo giữa công nghệ Liposome và các hoạt chất tiên tiến Redensyl, Capixyl,...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/5d/a8/9e/4a4c63f32581ea7939f620154821436e.png",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "OEM",
      id: 101359154,
      name: "Bộ lược chải phủ tóc bạc thông minh thảo dược công nghệ mới nhất ( đen tư nhiên )",
      price: 195000,
      short_description:
        "Bộ lược chải phủ tóc bạc thông minh thảo dược công nghệ mới nhất ( đen tư nhiên ) che phủ tóc bạc hiệu quả nhất chỉ vởi vài thao tác đơn giản bạn có ngay một mái tóc đen tự nhiên.\nDễ dàng đưa thuốc...",
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9f/93/91/68675988fb68cef38780b7bb57e79cf0.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
    {
      brand_name: "TRESemmé",
      id: 17043131,
      name: "Dầu Gội Tresemmé Keratin Smooth Tinh Dầu Argan Và Keratin Vào Nếp Suôn Mượt (850g)",
      price: 172000,
      short_description:
        'Bạn phải "đánh vật" với mái tóc xơ rối mỗi ngày? Nay đã có bí quyết từ chuyên gia tạo mẫu tóc! Dòng sản phẩm TRESemmé Keratine Smooth mới, cho tóc vào nếp suôn mượt đến 48 giờ để bạn tự tin làm chủ...',
      thumbnail_height: 280,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/41/1d/7d/d4048a5e3d6546142e76ed3b457301c6.jpg",
      thumbnail_width: 280,
      category: 1030,
    },
  ],
};

function ProductPage() {
  const { category, subCategory } = useParams();
  const location = useLocation();

  return (
    <Layout>
      <Banner
        className={s.banner}
        title={banners[subCategory || category].title}
        description={banners[category].description}
        imgSrc={banners[category].imgSrc}
        showBackground
      />

      <Container>
        <Breadcrumb pathname={location.pathname} />

        <Row className={s.productList}>
          {products[subCategory || category].map((product) => (
            <React.Fragment key={product.id}>
              <Col xs={6} className="d-block d-lg-none">
                <Product
                  thumbnailUrl={product.thumbnail_url}
                  name={product.name}
                  price={product.price}
                />
              </Col>
              <Col lg={3} className="d-none d-lg-block">
                <Product
                  thumbnailUrl={product.thumbnail_url}
                  name={product.name}
                  price={product.price}
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>

      <Pagination />
    </Layout>
  );
}

export default ProductPage;
