// import ItemShop from "../models/ItemShop.js";

// //Add item
// export const addItem = async (req, res) => {
//   try {
//     const { image, title, text, category, price, sale } = req.body;
//     const newProduct = new ItemShop({
//       image,
//       title,
//       text,
//       category,
//       price,
//       sale,
//     });
//     await newProduct.save();
//     res.json({ message: "item create" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ message: "Error in form" });
//   }
// };

// //Update Item
// export const updateItem = async (req, res) => {
//   try {
//     const { image, title, text, category, price, sale, id } = req.body;
//     const item = await ItemShop.findById(id);
//     if (!item) return res.json({ message: "empty" });

//     item.image = image;
//     item.title = title;
//     item.text = text;
//     item.category = category;
//     item.price = price;
//     item.sale = sale;

//     await item.save();
//     res.json(item);
//   } catch (error) {
//     console.log(error.message);
//     res.json({
//       message: "Error in form",
//     });
//   }
// };
// //Delete Item
// export const removeItem = async (req, res) => {
//   try {
//     const item = await ItemShop.findByIdAndDelete(req.body.id);
//     if (!item) return res.json({ message: "empty" });
//     res.json({ message: "Item Delete" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ message: "Error in form" });
//   }
// };
// //Get All Items
// export const getAllItem = async (req, res) => {
//   try {
//     const item = await ItemShop.find();
//     res.json(item);
//   } catch (error) {
//     console.log(error.message);
//     res.json({
//       message: "Error in form",
//     });
//   }
// };