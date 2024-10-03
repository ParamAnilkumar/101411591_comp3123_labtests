const fs = require('fs');
const path = require('path');

const logsFolder = path.join(__dirname, 'Logs');

const createLogs = () => {

    if (!fs.existsSync(logsFolder)) {
        fs.mkdirSync(logsFolder);
        console.log('Logs directory created.');
    }


    process.chdir(logsFolder);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`, 'utf8');
        console.log(`File created: ${fileName}`);
    }

    console.log('Current directory:', process.cwd());
};

createLogs();
