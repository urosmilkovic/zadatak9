import { ShoppingCartOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreAPI } from "../../api";
import { Image, Button } from "../../components/ui";
import { useStoreContext } from "../../context";
import { Content } from "../../layouts";
import "./style.scss";

const Product = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const productRes = await StoreAPI.product(id);
      setProduct(productRes);
    })();
  }, [id]);

  const { addItem, pushSnackbar } = useStoreContext();

  const selectItem = (item) => {
    addItem(item);
    pushSnackbar("success", "Added to shopping cart");
  };

  return (
    <Content>
      <div className="ec-product-content">
        {product ? (
          <Fragment>
            <div className="ec-product-image">
              <div className="ec-product-image-inner">
                {product.image ? (
                  <Image src={product.image} alt="Product" />
                ) : null}
              </div>
            </div>
            <div className="ec-product-info">
              <h1 className="ec-product-title">{product.title}</h1>
              <p className="ec-product-category">{product.category}</p>
              <Rating
                className="ec-product-rating"
                defaultValue={product.rating.rate}
                precision={0.1}
                readOnly
              />
              <div className="ec-product-info-single">
                <span>Description:</span>
                {product.description}
              </div>
              <div className="ec-product-info-single">
                <span>People bought:</span>
                {product.rating.count}
              </div>
              <div className="ec-product-info-single">
                <span>Price:</span>
                <h1>{product.price.toFixed(2)}&euro;</h1>
              </div>
              <Button
                color="primary"
                variant="contained"
                startIcon={<ShoppingCartOutlined />}
                onClick={() => selectItem(product)}
              >
                ADD TO CART
              </Button>
            </div>
          </Fragment>
        ) : null}
      </div>
    </Content>
  );
};

export default Product;
