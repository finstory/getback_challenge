import React from "react";
import css from "../../../assets/css/components/home/gallery.module.css";
import { Card } from "./Card";

export const Gallery = () => {
  return (
    <section className={css.gallery}>
       <Card /> 
    </section>
  );
};
