import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

const port = 10239;

export const serverApp: any = new Promise((resolve, reject) => {
    router.get('/*', async (ctx) => {
        ctx.body = 'Hello World!';
    });

    app.use(router.routes());

    app.listen(port);

    app.on('error', onError);
    app.on('listening', onListening);

    /**
   * Event listener for HTTP server "error" event.
   */

    function onError(error: any) {
        if (error.syscall !== 'listen') {
            reject('app has error');
            throw error;
        }

        var bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                reject(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                reject(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                reject('app has error');
                throw error;
        }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */

    function onListening() {
        resolve(app);
        console.log('Listening on ' + port);
    }
});