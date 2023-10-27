import React, { useEffect } from "react";
import css from "../../../../assets/css/components/home/filters.module.css";

export const TagNameFilter = ({ onChange, value, setTagNameFilter }) => {
  const handelTagNameSubmit = () => {
    setTagNameFilter(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTagNameFilter(value);
    }
  };

  useEffect(() => {
    if (value === "") {
      handelTagNameSubmit();
    }
  }, [value]);

  return (
    <div className={css.search}>
      <div className={css.input_wrap}>
        <input
          name="searchByTagName"
          type="text"
          placeholder="BLACK DECKER 20"
          value={value}
          onChange={onChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={css.submit_btn} onClick={handelTagNameSubmit}>
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1698403092/shop-mugs/118251_wap2vv.png"
          alt="glass"
        />
      </div>
    </div>
  );
};
