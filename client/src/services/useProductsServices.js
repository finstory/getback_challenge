import React from "react";
import axios from "axios";
import { useRedux } from "../context/useRedux";
import api from "../../utilities/axios/axiosConfig";

export const productsReducer = {
  products_list: [],
  filters: {
    tag_name: "",
    price: 0,
    price_comparison: ">",
    per_page: 10,
    current_page: 1,
  },
  pages_total: 1,
};

export const useProductsServices = () => {
  const services = { ...useRedux("products") };
  const { products, setProducts } = services;

  // Add your services (or redux actions)...

  services.getAllProducts = async () => {
    api("/products")
      .then((response) => {
        setProducts({ products_list: response.data }, "GET_ALL_PRODUCTS");
      })
      .catch((error) => {
        error.response && alert(error.response.data);
      });
  };

  services.filterProducts = async () => {
    const {
      filters: { tag_name, price, price_comparison, per_page, current_page },
    } = products;
    api(
      `/search?tag_name=${tag_name}&price_value=${price}&price_comparison=${price_comparison}&per_page=${per_page}&current_page=${current_page}`
    )
      .then((response) => {
        setProducts(
          { products_list: response.data.products },
          "FILTER_PRODUCTS"
        );
        setProducts(
          { pages_total: response.data.pagesTotal },
          "SET_PAGES_TOTAL"
        );
      })
      .catch((error) => {
        error.response && alert(error.response.data);
      });
  };

  services.setTagNameFilter = async (tag_name = "") => {
    const { filters } = products;
    setProducts(
      { filters: { ...filters, tag_name, current_page: 1 } },
      "SET_TAG_NAME"
    );
  };

  services.setPriceFilter = async (price = 0) => {
    const { filters } = products;
    setProducts(
      { filters: { ...filters, price, current_page: 1 } },
      "SET_PRICE"
    );
  };

  services.setPriceComparisonFilter = async (price_comparison = ">") => {
    const { filters } = products;
    setProducts(
      { filters: { ...filters, price_comparison, current_page: 1 } },
      "SET_PRICE_COMPARISON"
    );
  };

  services.setCurrentPage = async (current_page = "1") => {
    const { filters } = products;
    setProducts({ filters: { ...filters, current_page } }, "SET_CURRENT_PAGE");
  };

  return { ...services };
};
