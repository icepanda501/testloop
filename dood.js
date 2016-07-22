var request = require('request');
var cheerio = require('cheerio');


for (var i = 1; i <= 1; i++) {
  request('https://www.linkedin.com/in/shasuree-leesuwatana-7b6234105?trk=pub-pbmap', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var parsedResults = [];
    console.log(html);
    $('div.clearfix').each(function(i, element){
      // Select the previous element
      var a = $(this).prev();
      var title = a.text();
      var url = a.attr('href');
      var metadata = {
        title: title,
        url: url
      };
      parsedResults.push(metadata);
    });
    // console.log(parsedResults);า
  }
});
};
