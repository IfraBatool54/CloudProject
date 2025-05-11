const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { sequelize } = require('./models');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log('Server running on port 5000');
    });
});
