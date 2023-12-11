import React from "react";
import ProductDetailscommon from "./ProductDetailscommon";
import ProductComImg from "../assest/product-accessory2-400x400.jpg";

const ProductsDetails = () => {
  return (
    <div>
      <ProductDetailscommon
        Product_img={ProductComImg}
        Product_details_title="Anchor Bracelet"
        Product_price="₹300"
        product_quantity="1"
        Product_categories="Women"
        product_about="Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ."
      />
    </div>
  );
};

export default ProductsDetails;
