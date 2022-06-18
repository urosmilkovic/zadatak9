import { PeopleAlt, ShoppingCartOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../../context";
import { Button, Image } from "../../ui";
import "./style.scss";

const ProductCard = (item) => {
  const { id, title, image, price, description, category, rating } = item;

  const { addItem, pushSnackbar } = useStoreContext();

  const selectItem = (item) => {
    addItem(item);
    pushSnackbar("success", "Added to shopping cart");
  };

  return (
    <div className="ec-productcard-main">
      <Link className="ec-productcard-image" to={`/product/${id}`}>
        <div className="ec-productcard-image-inner">
          <Image src={image} alt={title} />
        </div>
      </Link>
      <div className="ec-productcard-content">
        <div className="ec-productcard-info">
          <Rating
            className="ec-productcard-rating"
            defaultValue={rating.rate}
            precision={0.1}
            readOnly
          />
          <span className="ec-productcard-count">
            <PeopleAlt />
            {rating.count}
          </span>
        </div>
        <Link className="ec-productcard-title" to={`/product/${id}`}>
          {title}
        </Link>
        <p>{description}</p>
        <span className="ec-productcard-price">{price.toFixed(2)}&euro;</span>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ShoppingCartOutlined />}
          onClick={() => selectItem(item)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
