const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  res.json({
    message: "Optimized API response",
  });
});

app.listen(3001, () => {
  console.log("Optimized server running on port 3001");
});