const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LdbSVSFJSmFy0afwLoQRe2My22HM4GVa7TlLXfAYpYmiTeRzpEgfoIxMm2j8PluEwopGzjC8ZkBA6wW5dkfP9Xb00Gk3YNeHu"
);

// API

// App config
const app = express();

// Middlewares
app.use(
  cors({
    origin: true,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.status(200).send("Hello World");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Received: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    payment_method_types: ["card"],
    description: "Software development services",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-e872a/us-central1/api
