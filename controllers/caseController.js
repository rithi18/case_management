const db = require("../Config/db");

exports.getCases = (req, res) => {
  db.query("SELECT * FROM cases", (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
};

exports.createCase = (req, res) => {
  const { title, description, completed, dueDate } = req.body;

  const sql = "INSERT INTO cases (title, description, completed, dueDate) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, description, completed || false, dueDate], (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({ message: "Case added successfully ✅" });
    }
  });
};
