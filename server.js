const express = require('express')
const app = express();


app.get('/', function(req, res){
    res.send('<h1> Hello World! </h1>')
})
app.get('/home', function(req,res){
    res.send('<h1>Home Page</h1>')
})

app.get('/cars', function(req,res){
    res.send("Here's my list of cars")
})

app.get('/artist', function(req, res){
res.send('<h2>My favorite comic book artist is Jim Lee!</h2>')
})

app.get('/videogame', function(req, res){
    res.send('<h1>The Video Game I currently playing is Genshin Impact</h1>')
})

app.get('/hobby', function(req, res){
    res.send('<h3>A hobby I have is messing around in Photoshop.</h3>')
})

app.get('/food', function(req, res){
    res.send('<h2>One of my favorite foods is pizza.</h2>')
})

app.get('/drink', function(req, res){
    res.send('<h2>One of my favorite drinks is Spite.</h2>')
})

app.get('/exercise', function(req, res){
    res.send('<h1>My favorite exercise is jogging.</h1>')
})
app.get('/dream', function(req, res){
    res.send('<h2>My dream is to do voice acting.</h2>')
})
//tell the app which port to listen to

app.listen(3000, function(){
    console.log('Listening on port 3000')
})