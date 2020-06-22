import * as net from 'net';

import { serverApp } from './server';

let clientArr: Array<any> = [];
const socket = net.createServer();

export function socketApp() {
    let app: any = null;
    socket.on('connection', (person: any) => {
        console.log(clientArr.length);
        // 记录链接的进程
        person.id = clientArr.length;
        clientArr.push(person);
        person.setEncoding('utf8');
        // 客户socket进程绑定事件
        console.log('socket', 'one socket connect success');
        person.on('appOpen', () => {
            if (app && app.listening) {
                clientArr.forEach((val) => {
                    val.write('appIsRunning');
                })
            }
            serverApp().then((result: any) => {
                app = result;
                clientArr.forEach((val) => {
                    val.write('appOpenSuccess');
                })
                console.log('socket', 'app has opened');
            }).cache((message: any) => {
                clientArr.forEach((val) => {
                    val.write('appOpenFail:' + message);
                })
            });
        });
        person.on('appClose', () => {
            if (app && app.listening) {
                app.close(function () {
                    clientArr.forEach((val) => {
                        val.write('appCloseSuccess');
                    });
                    console.log('socket', 'app has closed');
                });
            } else {
                clientArr.forEach((val) => {
                    val.write('appNotRunning');
                });
            }
        });
    })
    socket.listen(10240, function () {
        console.log('socket', 'server listen on 10240');
    });
}