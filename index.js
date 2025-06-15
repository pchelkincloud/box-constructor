const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 4000;

const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.send('pong');
});

app.post('/orders', upload.any(), (req, res) => {
  console.log('📦 Новый заказ:', req.body);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на порту ${PORT}`);
});
