const Y = require('yjs');
const WebSocket = require('ws');
const http = require('http');
const { setupWSConnection } = require('./node_modules/y-websocket/bin/utils.cjs');

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
    // 从请求中获取文档名称
    // const ydoc = new Y.Doc();
    setupWSConnection(ws, req);

    // 监听来自客户端的消息
    ws.on('message', (message) => {
        console.log(message);
        //     // 处理消息或进行相应的操作
        //     // 可以将消息广播到所有客户端
        //     wss.clients.forEach((client) => {
        //         if (client.readyState === WebSocket.OPEN) {
        //             client.send(`Broadcast: ${message}`);
        //         }
        //     });
    })
    // // 监听消息事件
    // ws.on('message', (message) => {
    //     console.log('Received:', message.toString('utf-8'));
    //     // Echo 回消息
    //     ws.send(`Echo: ${message}`);
    // });

    // // 监听关闭事件
    // ws.on('close', () => {
    //     console.log('Client disconnected');
    // });
    // 发送欢迎消息
    // ws.send('Welcome to the WebSocket server!');
})

const PORT = 1234;
server.listen(PORT, () => {
    console.log(`WebSocket server is running on port ${PORT}`);
})
