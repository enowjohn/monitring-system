import express from 'express';


const router = express.Router();

router.get('/logs', (req, res) => {
  res.send('Hello World!');
  console.log('Hello World!');
})

export default router;