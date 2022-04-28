import 'dotenv/config';
import express from 'express';

import { UserService } from './services/user-service.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const userService = new UserService();

  await userService.add(
    {
      name: 'Janon',
      email: 'janon@imagine.com.br',
      password: '123456'
    }
  );

  res.send('IMAGINE SHOP');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});