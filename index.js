import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "The Express application is running on the AWS EC2. The code has been modified"
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
