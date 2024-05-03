// pages/api/data.js
import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const dataFilePath = path.join(process.cwd(), 'data.json');
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    res.status(200).json(data);
};
