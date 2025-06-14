const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.json());

app.post('/orders', upload.any(), (req, res) => {
  console.log('📦 Новый заказ:', req.body);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`✅ Сервер запущен на http://localhost:${port}`);
});