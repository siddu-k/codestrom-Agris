const http = require('http');
const https = require('https');

const PORT = 3001;

const server = http.createServer((req, res) => {
    // Handling CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, api-key');

    // Handle Preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/proxy/xiaomi') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            // Forward headers
            const apiKey = req.headers['api-key'];

            const proxyReq = https.request('https://api.xiaomimimo.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey
                }
            }, (proxyRes) => {
                let data = '';
                proxyRes.on('data', chunk => data += chunk);
                proxyRes.on('end', () => {
                    res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
                    res.end(data);
                });
            });

            proxyReq.on('error', (e) => {
                console.error(e);
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Proxy Error' }));
            });

            proxyReq.write(body);
            proxyReq.end();
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Local Proxy running at http://localhost:${PORT}`);
});
