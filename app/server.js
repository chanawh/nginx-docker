const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
  res.json({ msg: 'Hello from Node.js' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
