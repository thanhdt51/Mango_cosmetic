import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const categoryIds = {
  makeup: 1584,
  eyes: 1586,
  lips: 1587,
  face: 1585,
  skincare: 1582,
  mask: 1601,
  cleanser: 1583,
  toner: 2347,
  bodycare: 1592,
  shower: 8212,
  lotion: 1610,
  haircare: 8222,
  shampoo: 1613,
  conditioner: 1616,
};

async function fetchProducts(params) {
  const url = new URL("https://tiki.vn/api/personalish/v1/blocks/listings");
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url);
  const json = await response.json();
  return json;
}

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: {}, page: 1, totalPage: null };
  }

  componentDidMount() {
    const { match } = this.props;
    const { category, subCategory } = match.params;

    fetchProducts({
      limit: 16,
      category: categoryIds[subCategory || category],
      page: 1,
    }).then((result) => {
      this.setState({
        products: { [subCategory || category]: result.data },
        totalPage: result.paging.last_page,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    const { category, subCategory } = match.params;
    const { page } = this.state;

    if (
      prevProps.match.params.category !== category ||
      prevProps.match.params.subCategory !== subCategory ||
      prevState.page !== page
    ) {
      fetchProducts({
        limit: 16,
        category: categoryIds[subCategory || category],
        page,
      }).then((result) => {
        this.setState({
          products: { [subCategory || category]: result.data },
          totalPage: result.paging.last_page,
        });
      });
    }
  }

  handlePageChange = (page) => {
    this.setState({ page });
  };

  render() {
    const { products, totalPage, page } = this.state;
    const { match, location } = this.props;
    const { subCategory, category } = match.params;

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
            {products[subCategory || category]?.map((product) => (
              <React.Fragment key={product.id}>
                <Col xs={6} lg={3}>
                  <Link to={`/products/${product.id}`}>
                    <Product
                      thumbnailUrl={product.thumbnail_url}
                      name={product.name}
                      price={product.price}
                    />
                  </Link>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Container>

        <Pagination
          totalPage={totalPage}
          onPageChange={this.handlePageChange}
          currentPage={page}
        />
      </Layout>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.objectOf(PropTypes.string) })
    .isRequired,
};

export default ProductPage;
