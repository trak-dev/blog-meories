const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});
export default mongoose.model("Cart", cartSchema);
