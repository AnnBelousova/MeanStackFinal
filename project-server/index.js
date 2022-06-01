const express = require("express");
const dotenv = require("dotenv").config();
const itemsRoute = require("./routes/itemsRoutes");
const contactRoute = require("./routes/contactRoutes");
const policyRoute = require("./routes/policyRoutes");
const helpRoute = require("./routes/helpRoutes");
const customerRoute = require('./routes/customerRoutes');
const giftcardRoute = require('./routes/giftCardRoutes')
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRoutes');
const dealRoute = require('./routes/dealsRoutes');
const connectDB = require('./config/connectDB');
const wishListRoute = require('./routes/wishListRoutesDB');
const app = express();
const cors = require('cors');

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoute);
app.use("/api/customers", customerRoute);
app.use("/api/giftcards", giftcardRoute);
app.use("/api/items", itemsRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/deal", dealRoute);
app.use("/api/policy", policyRoute);
app.use("/api/help", helpRoute);
app.use('/api/wishList', wishListRoute);

const PORT = process.env.PORT | 5001;
app.listen(PORT, () => {
  console.log("server started");
});
