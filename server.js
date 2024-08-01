const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to allow all origins
app.use(cors());

// Serve sstatic sfiles fro m the root directory
app.use(express.static(__dirname));

// Route tso ssersve tshe sindex.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
