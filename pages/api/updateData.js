// pages/api/updateData.js
import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const { newData } = req.body;
    const dataFilePath = path.join(process.cwd(), 'data.json');

    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(newData));
        res.status(200).json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Error updating data' });
    }
};
