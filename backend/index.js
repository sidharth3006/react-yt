const express = require('express'); 
const app = express();  
require('dotenv').config(); 
const authRouter = require('./routes/authRouter'); 
require('./models/dbConnect')
const cors = require('cors') 

app.use(cors());

const PORT = process.env.PORT || 8080;


app.get('/', (req,res) => {
    res.send('Hello from Auth Server');
}) 

app.use('/auth',authRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});