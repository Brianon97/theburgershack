// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const FILE = path.join(__dirname, 'submissions.json');

app.use(cors());
app.use(express.json());               // parse JSON bodies
app.use(express.static('.'));          // serve static files (HTML, CSS, JS)

// ---------- POST: receive form ----------
app.post('/submit', (req, res) => {
    const newEntry = {
        id: Date.now(),
        ...req.body,
        timestamp: new Date().toLocaleString()
    };

    // Read current file
    fs.readFile(FILE, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') return res.status(500).json({error: 'Read error'});
        let list = [];
        if (data) {
            try { list = JSON.parse(data); } catch (e) { /* corrupted → start fresh */ }
        }

        list.push(newEntry);

        // Write back
        fs.writeFile(FILE, JSON.stringify(list, null, 2), err => {
            if (err) return res.status(500).json({error: 'Write error'});
            res.json({success: true, entry: newEntry});
        });
    });
});

// ---------- GET: return all submissions (for display) ----------
app.get('/submissions', (req, res) => {
    fs.readFile(FILE, 'utf8', (err, data) => {
        if (err) return res.json([]);
        try { res.json(JSON.parse(data)); }
        catch (e) { res.json([]); }
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));