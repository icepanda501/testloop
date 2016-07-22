var request = require('request');
var cheerio = require('cheerio');


scrap_linked = function(url){
      var options = {
      method: 'GET',
      url: url,
      headers: {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding':'en, deflate, sdch, br',
        'Accept-Language':'en-US,en;q=0.8,th;q=0.6',
        'accept-charset':'utf-8',
        'Avail-Dictionary':'YFA7RCTS',
        'Cache-Control':'max-age=0',
        'Connection':'keep-alive',
        'Host':'www.linkedin.com',
        'Upgrade-Insecure-Requests':'1',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
      }
    };

    request(options, function (error, response, html) {
    // console.log(response.statusCode);
    // console.log(request);
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html,{
        // decodeEntities: falsetex
      });
      var parsedResults = [];
      var name = $('.profile-overview-content').find("h1");
      var position = name.next();
      var location = $(position.next()).find("dd")
      var education = $(position.next().next().children().children()[2]);

      console.log(name.text());
      console.log(position.text())
      location.each(function(i,e){
        console.log($(this).text());
      });
      console.log(education.find("td").text());

      var browse_people = $('.browse-map').find("ul");
      var people = browse_people.children();


      people.each(function(i,e){
        console.log($(this).find('a')[0].attribs.href);
        // scrap_linked($(this).find('a')[0].attribs.href)
      });


      console.log(parsedResults);
      // console.log(response);
    }
  });
}

scrap_linked("https://www.linkedin.com/in/terdsakp?trk=pub-pbmap");

// for(var i =0;i<10;i++){
//   scrap_linked();
// }
