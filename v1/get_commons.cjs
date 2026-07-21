const https = require('https');

function search(query) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query + ' filetype:bitmap')}&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url&format=json`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const json = JSON.parse(data);
            const pages = json.query.pages;
            for (let id in pages) {
                if (pages[id].imageinfo && pages[id].imageinfo[0].url) {
                    const u = pages[id].imageinfo[0].url;
                    if (u.endsWith('.jpg') || u.endsWith('.JPG')) {
                        console.log(u);
                    }
                }
            }
        });
    }).on('error', console.error);
}

search('Kazakhstan culture quality');
