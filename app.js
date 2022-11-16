var path = require('path');
var express = require('express');

var app = express();

const port = process.env.PORT || 3001;

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.get('/:token_id', function(req, res) {
    const tokenId = parseInt(req.params.token_id).toString()
    const nft = metadata[tokenId]
    const data = {
      'name': nft.name,
      'description': nft.description,
      'image': `${HOST}/${tokenId}.png`
    }
    res.send(data)
})

app.listen(port, () => console.log(`Listening on port ${port}...`));
