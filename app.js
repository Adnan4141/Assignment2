const express = require('express');
const cors=require('cors');
const bodyParser =require('body');
const app = express();


//middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());;




//home route
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/index/html");
    res.send("Welcome to Home");
});


//Express js server start processing 
const port = 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

const products = [
    { id: 1, name: 'product1' },
    { id: 2, name: 'product2' },
    { id: 3, name: 'product3' },
];


app.get('/',(req,res)=>{
    res.send("Initial stage");
});

app.get('/products',(req,res)=>{
    res.json(products);

});



app.get('/ProductById/:id',(req,res)=>{
const productId =parseInt(req.params.id); 
const product = products.find((p)=> p.id === productId);
res.json(product);

});
