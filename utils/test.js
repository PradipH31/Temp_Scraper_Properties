var JSSoup = require('jssoup').default;
var soup = new JSSoup('<html><head>hello</head></html>');
var tag = soup.find('head');
console.log(tag.name);
tag.name = 'span';
console.log(tag);