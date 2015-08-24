import superagent from 'superagent';

export class universalSuperagent {
    constructor() {
        ['get', 'post', 'put', 'patch', 'del'].
            forEach((method) => {
                this[method] = (path, options) => {
                    return new Promise((resolve, reject) => {
                        let request = superagent[method](this.formatUrl(path));
                        if (options && options.params) {
                            request.query(options.params);
                        }

                        if (options && options.data) {
                            request.send(options.data);
                        }
                        request.end((err, res) => {

                            if (err) {
                                reject(res.body || err);
                            } else {
                                resolve(res.body);
                            }
                        });
                    });
                };
            });
    }

    /* This was originally a standalone function outside of this class, but babel kept breaking, and this fixes it  */
    formatUrl(path) {

       let adjustedPath = path[0] !== '/' ? '/' + path : path;
        if (__SERVER__) {

            // Prepend host and port of the API server to the path.
            return 'http://localhost:' + __SERVER_PORT__ + adjustedPath;
        }
        // Prepend `/api` to relative URL, to proxy to API server.
        //return '/api' + adjustedPath;
        return adjustedPath;
    }
}

