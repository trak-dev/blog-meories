import fs from "fs";
import https from "https";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/yann-picaud.com/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/yann-picaud.com/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/yann-picaud.com/chain.pem",
  "utf8"
);
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);
const CONNECTION_URL = process.env.MONGO;
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});
const httpsServer = https.createServer(credentials, app);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    httpsServer.listen(8443, () => {
      console.log("HTTPS Server running on port 8443");
    })
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
