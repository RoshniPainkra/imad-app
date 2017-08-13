var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    title: 'Article-one',
    heading:'Article-1',
    date: '10 April,2013',
    content:`   <p>
                My Article.My Article.My Article.My Article.My Article.My Article.My Article.My Article.
                    My Article.
                        My Article.
                            My Article.
                                My Article.    My Article.
            </p>
            
            <p>
                My Article.My Article.My Article.My Article.My Article.My Article.My Article.
                    My Article.
                        My Article.
                            My Article.
                                My Article.    My Article.
            </p>
            
            <p>
                My Article.
                    My Article.
                        My Article.
                            My Article.
                                My Article.    My Article.
            </p> `
};


function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
        <meta name="viemport" content="width-device-width, initial-scale-1"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h2>${heading}</h2>
        
        <div>
        ${date}
        </div>
        <div>
            ${content1}
        </div>
        </div>
    </body>
</html>



`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
   res.send(createTemplate(article));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
