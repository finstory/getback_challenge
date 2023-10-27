import React from "react";
import axios from "axios";
import { useRedux } from "../context/useRedux";

export const productsReducer = {
  user: {
    name: "Facu",
    pass: "sd",
  },
};

export const useProductsServices = () => {
  const services = { ...useRedux("products") };
  const { products, setProducts } = services;

  // Add your services (or redux actions)...

  services.changeUserName = () => {
    const { user } = products;
    setProducts({ user: { ...user, name: "Sion" } }, "CHANGE_USER_NAME");
  };

  return { ...services };
};
