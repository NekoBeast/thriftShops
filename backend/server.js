import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/data", (req, res) => {
  res.send("bro don't try to remove me hai🤬");
});

app.listen(port, () => {
  console.log(`server is runnig on port ${port}`);
});
