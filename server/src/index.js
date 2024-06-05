const express = require('express');
const { router } = require('./routes/formRoutes');

require('dotenv').config();
const app = express();
const PORT = process.env.port || 5000;

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  