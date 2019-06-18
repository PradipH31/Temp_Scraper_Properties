var fs = require('fs');
var JSSoup = require('jssoup').default;

var names = [];
var prices = [];
var cities = [];
var links = [];

setPrice = (nameSoup) => {
    var propertyPrice = nameSoup.findAll('div', 'details-title');
    for (var i = 0; i < propertyPrice.length; i++) {
        var price = propertyPrice[i].contents[0].contents[0].nextElement.nextElement._text;
        prices.push(price);
    }
}

setNameCity = (nameSoup) => {
    var classes = Array('font-16-resp-767', 'color-white');
    var propertyName = nameSoup.findAll('h3', classes);
    for (var i = 0; i < propertyName.length; i++) {
        if (i % 2 === 0) {
            var name = propertyName[i].contents[0].contents[0]._text;
            names.push(name);
        } else {
            var city = propertyName[i].contents[0]._text;
            cities.push(city);
        }
    }
}

setLinks = (nameSoup) => {
    var classes = Array('col-md-5', 'col-sm-7', 'col-xs-12', 'text-center');
    var propertyURL = nameSoup.findAll('div', classes);
    for (var i = 0; i < propertyURL.length; i++) {
        var linkToTrim = propertyURL[i].nextElement.nextElement.nextElement.nextElement.attrs.onclick;
        var link = "http://www.propertynepal.com/propertydetail/" + linkToTrim.split("(")[2].split("'")[1];
        links.push(link);
    }
}

showDetails = () => {
    for (var i = 0; i < names.length; i++) {
        console.log("Name:" + names[i]);
        console.log("Price:" + prices[i]);
        console.log("City:" + cities[i]);
        console.log("Link:" + links[i]);
        console.log();
    }
}

var fileExtractor = () => {
    fs.readFile('./assets/content.txt', (err, data) => {
        var content = data.toString();
        var soup = new JSSoup(content);
        var classes = Array('col-md-12', 'background-green-imp');
        var propertiesInfo = soup.findAll('div', classes);
        var nameSoup = new JSSoup(propertiesInfo);
        setPrice(nameSoup);
        setNameCity(nameSoup);
        setLinks(nameSoup);
        showDetails();
    })
}

var liveExtractor = (content) => {
    var soup = new JSSoup(content);
    var classes = Array('col-md-12', 'background-green-imp');
    var propertiesInfo = soup.findAll('div', classes);
    var nameSoup = new JSSoup(propertiesInfo);
    setPrice(nameSoup);
    setNameCity(nameSoup);
    setLinks(nameSoup);
    showDetails();
}

module.exports = liveExtractor;