const mongoose = require("mongoose");
const Product = require("../Models/ProductSchema");
// const uri = 'mongodb+srv://archanakumari202068:<password>@stackoverflow-clone.rhh4ud3.mongodb.net/';
mongoose.connect(
  "mongodb+srv://Ishika123:Ishika123@cluster0.onpvdxd.mongodb.net/emart_database",
  {
    useNewUrlParser: true,
  }
);

var fs = require("fs");
var { parse } = require("csv-parse");

var parser = parse({ columns: true }, async function (err, csvData) {
  await Product.deleteMany();
  csvData.forEach((product) => {
    var new_products = new Product({
      product_img: product.product_img,
      product_details_title: product.products_titles,
      product_price: product.product_price,
      product_quantity: product.product_quantity,
      product_categories: product.Product_categories,
      product_about: product.product_about,
    });

    console.log(new_products);
    // new_products.updateMany()
    new_products
      .save()
      .then((savedProduct) => {
        console.log("Product saved:", savedProduct);
      })
      .catch((error) => {
        console.error("Error saving product:", error);
      });

    // new_products.save();
  });

  if (err) {
    console.log(err);
  }
});
fs.createReadStream(__dirname + "/products.csv").pipe(parser);
