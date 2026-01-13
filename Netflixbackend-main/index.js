const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const mockUser = {
  email: "test@netflix.com",
  password: "123456",
};

app.post("/login", (req, res) => {
  const { username, password } = req.body || {};

  if (
    username === mockUser.email &&
    password === mockUser.password
  ) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
