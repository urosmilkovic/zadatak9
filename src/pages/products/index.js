import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import StoreAPI from "../../api/store";
import { ProductCard } from "../../components/custom";
import { Content } from "../../layouts";
import "./style.scss";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortDir, setSortDir] = useState("asc");

  const { sort } = useParams();

  useEffect(() => {
    (async () => {
      const categoriesRes = await StoreAPI.categories();
      setCategories(categoriesRes);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const categoriesRes = categories.length
        ? categories
        : await StoreAPI.categories();
      setCategories(categoriesRes);
      if (sort) {
        const productsRes = await StoreAPI.category(categoriesRes[sort], {
          sort: sortDir,
        });
        setProducts(productsRes);
      } else {
        const productsRes = await StoreAPI.products({ sort: sortDir });
        setProducts(productsRes);
      }
    })();
  }, [sort, sortDir]);

  return (
    <Content>
      <div className="ec-products-main">
        <div className="ec-products-categories">
          {categories.length ? (
            <NavLink
              className={({ isActive }) =>
                `ec-products-category ${
                  isActive ? "ec-products-category-active" : ""
                }`
              }
              to={`/products`}
              end={true}
            >
              All
            </NavLink>
          ) : null}
          {categories.map((x, y) => (
            <NavLink
              className={({ isActive }) =>
                `ec-products-category ${
                  isActive ? "ec-products-category-active" : ""
                }`
              }
              key={x}
              to={`/products/${y}`}
              end={true}
            >
              {x}
            </NavLink>
          ))}
        </div>
        <div className="ec-products-content">
          <div className="ec-products-title">
            <span key={products}>
              {products.length
                ? `${products.length} items found`
                : "No results"}{" "}
            </span>
            <FormControl className="ec-products-sort">
              <Select
                displayEmpty
                value={sortDir}
                onChange={(a) => setSortDir(a.target.value)}
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="ec-products-all">
            {products.map((x, y) => (
              <ProductCard {...x} key={`${x.id}_${y}`} />
            ))}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Products;
