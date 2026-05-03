const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  // CPU blocking work
  for (let i = 0; i < 1e8; i++) {}

  res.json({
    message: "Slow API response",
  });
});

app.listen(3000, () => {
  console.log("Slow server running on port 3000");
});