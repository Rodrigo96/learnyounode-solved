const net = require('net');

const port = process.argv[2],
      date = new Date();

const server = net.createServer(socket => {
    let dates = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()].map(date => zeroPad(date, 2));
    socket.end(dates.slice(0, 3).join('-') + ' ' + dates.slice(3).join(':') + '\n');
});
server.listen(port);

const zeroPad = (num, len) => {
    num = num.toString();
    if (num.length >= len) return num;
    while (num.length !== len)
        num = '0' + num;

    return num;
};