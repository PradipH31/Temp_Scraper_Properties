var request = require('request');
var fs = require('fs');
var liveExtractor = require('./DataExtractor');

var fetch = () => {
    var state = '';
    var page = '';
    var options = {
        url: 'http://www.propertynepal.com/listing?area_units=aana&keyword=State%203&keyword2=&max_area=2000&max_price=90&max_price_unit=crore&min_area=0&min_price=0&min_price_unit=thousand&orderby=&orderby=created_at%2Cdesc&property_for=buy&property_types%5B%5D=1&property_types%5B%5D=10&property_types%5B%5D=11&property_types%5B%5D=12&property_types%5B%5D=13&property_types%5B%5D=14&property_types%5B%5D=15&property_types%5B%5D=16&property_types%5B%5D=17&property_types%5B%5D=18&property_types%5B%5D=2&property_types%5B%5D=3&property_types%5B%5D=4&property_types%5B%5D=5&property_types%5B%5D=6&property_types%5B%5D=7&property_types%5B%5D=8&property_types%5B%5D=9&room%5B%5D=&room%5B%5D=1&room%5B%5D=10&room%5B%5D=2&room%5B%5D=3&room%5B%5D=4&room%5B%5D=5&room%5B%5D=6&room%5B%5D=7&room%5B%5D=8&room%5B%5D=9&page=1',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
        }
    };
    request.get(options, (err, response) => {
        fs.writeFile('./assets/content.txt', response.body, (err) => {});
        liveExtractor(response.body);
    });
}

module.exports = fetch;