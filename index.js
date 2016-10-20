var express = require('express');
var pug = require('pug');
var app = express();

var dataInMemory = [
{
  title: 'Män som hatar kvinnor',
  slug: 'man-som-hatar-kvinnor',
  imageURL: 'http://bilder.norstedts.se/bilder/Omslag/224/13014080_O_1.jpg',
  authorName: 'Stieg Larsson',
  description: 'Ekonomijournalisten Mikael Blomkvist behöver en time out. Han har precis blivit fälld för förtal av finansmannen Hans-Erik Wennerström och dömts till tre månaders fängelse. Han beslutar sig för att ta en paus från sitt jobb på tidskriften Millennium. I samma veva får han ett ovanligt uppdrag. Henrik Vanger, tidigare en av landets främsta industriledare, vill att Blomkvist ska skriva släkten Vangers historia. Men det visar sig snart att familjekrönikan bara är en täckmantel för Blomkvists verkliga uppgift: att ta reda på vad som hänt Henrik Vangers unga släkting Harriet, som varit spårlöst försvunnen i snart fyrtio år - något som Henrik Vanger aldrig kunnat släppa. Blomkvist åtar sig motvilligt uppdraget, och till sin hjälp får han den unga Lisbeth Salander - en strulig tjej, tatuerad och piercad, men också en utmärkt researcher och en av landets främsta hackers. Tillsammans gräver Blomkvist och Salander allt djupare i familjen Vangers förflutna och möter en mörkare och blodigare historia än någon av dem kunnat ana.',
  numberOfPages: 567
},
 {
  title: 'Flickan som lekte med elden',
  slug: 'flickan-som-lekte-med-elden',
  imageURL: 'https://elilaserochskriver.files.wordpress.com/2009/12/flickansomlektemedelden1.jpg',
  authorName: 'Stieg Larsson',
  description: 'Lisbeth Salander återvänder till Sverige efter en längre tids vistelse utomlands. Hon har kommit över en stor summa pengar vilket innebär att hon för första gången i sitt liv är kvar och det går upp för henne att hon är helt ensam. Samtidigt har Mikael Blomkvist på Millennium fått korn på hett nyhetsstoff. Journalisten Dag Svensson och hans sambo Mia Bergman har hittat avslöjande uppgifter om en omfattande sexhandel mellan Östeuropa och Sverige. Många av de personer som utpekas i traffickinghärvan har höga positioner i samhället. Händelser i Salanders mörka förflutna börjar göra sig påminda. När Dag och Mia blir brutalt mördade riktas misstankarna mot Salander och en stor polisjakt drar igång. Salander bestämmer sig att en gång för alla göra upp med det förgångna och straffa dem som förtjänar det. Återigen korsas Blomkvists och Salanders vägar. Flickan som lekte med elden är den andra delen i Stieg Larssons Millenniumtrilogi.',
  numberOfPages: 632
},

{
  title: 'Luftslottet som sprängdes',
  slug: 'luftslottet-som-sprangdes',
  imageURL: 'https://elilaserochskriver.files.wordpress.com/2009/12/9113015311.jpg',
  authorName: 'Stieg Larsson',
  description: 'Två svårt skadade personer tas in akut på Sahlgrenska sjukhuset i Göteborg. Den ena är Lisbeth Salander, som är efterlyst misstänkt för dubbelmord. Hon har en livshotande skottskada i huvudet och måste opereras omedelbart. Den andre personen heter Alexander Zalachenko, en äldre man som Salander huggit med en yxa. Den tredje och avslutande delen i Millenniumserien tar vid där Flickan som lekte med elden slutade. Lisbeth Salander överlevde visserligen att bli levande begravd, men hennes problem är långt ifrån över. Zalachenko har tidigare varit yrkesmördare i den sovjetiska underrättelsetjänsten. Han är dessutom Salanders far och det är han som försökt ta livet av henne. Starka krafter vill tysta Lisbeth Salander en gång för alla. Samtidigt gräver Mikael Blomkvist i Salanders dolda förflutna och kommer snart sanningen på spåren. Han skriver på ett avslöjande reportage som kommer att rentvå Lisbeth Salander och skaka regeringen, Säpo och hela landet i dess grundvalar.',
  numberOfPages: 703
},
];

var findBook = function(slug) {
  for (var i = 0; i < dataInMemory.length; i++) {
    if (dataInMemory[i].slug === slug) {
      return dataInMemory[i];
    }
  }
};


app.use(express.static('public'));

app.get('/', function(request, response) {
  response.redirect('/books');
});

app.get('/books', function(req, res) {
  console.log('Requesting /books');
  res.send(pug.renderFile('views/homepage.pug', { books: dataInMemory }));
});

app.get('/books/*', function(req, res) {
  console.log('Requesting /book');
  var foundBook = findBook(req.params[0]);
  res.send(pug.renderFile('views/booktemplate.pug', { book: foundBook}));
});


app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
