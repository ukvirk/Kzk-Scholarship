const https = require('https');

function search(query) {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const json = JSON.parse(data);
            json.results.forEach(p => console.log(`${p.id}: ${p.alt_description}`));
        });
    }).on('error', console.error);
}

search('kazakhstan');
