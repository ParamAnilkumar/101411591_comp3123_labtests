const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

const removeLogs = () => {
    if (fs.existsSync(logsDir)) {

        const files = fs.readdirSync(logsDir);
        
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(filePath);  // Remove file
        });

        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
};

removeLogs();
