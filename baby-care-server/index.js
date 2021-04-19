const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const  fileUpload = require('express-fileupload');
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vgg4u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const bookingCollection = client.db("babyCare").collection("bookings");
  const adminCollection = client.db("babyCare").collection("admins");
  const serviceCollection = client.db("babyCare").collection("services");
  const reviewCollection = client.db("babyCare").collection("reviews");

  console.log("Database connected");
  
  app.get('/checkAdmin', (req, res) => {
      
      adminCollection.find({email: req.query.email})
      .toArray((err, documents) => {
          res.send(documents);
      })
  })

  app.post('/addService', (req,res) =>{
    const service = req.body;
    serviceCollection.insertOne(service)
        .then(result => console.log('insert one'))
  })

  app.get('/services', (req, res) => {
      serviceCollection.find({})
      .toArray((err, documents) => {
          res.send(documents);
      })
  })

  app.get('/service/:id', (req, res) => {
    serviceCollection.find({_id: objectId(req.params.id)})
    .toArray((err, documents) => {
        res.send(documents);
    })
  })

  app.post("/addBooking", (req, res) => {
    const booking = req.body;
    bookingCollection.insertOne(booking)
        .then(result => {
            res.send(result.insertedCount > 0);
        })
  })

  app.get("/orders", (req, res) => {
    bookingCollection.find({ email: req.query.email })
        .toArray((err, documents) => {
            res.send(documents);
        })
  })

  app.post("/review", (req, res) => {
    const review = req.body;
    reviewCollection.insertOne(review)
        .then(result => {
            res.send(result.insertedCount > 0);
        })
  })

  app.get("/orderList", (req, res) => {
    bookingCollection.find({})
        .toArray((err, documents) => {
            res.send(documents);
        })
  })

  app.post("/addAdmin", (req, res) => {
    const email = req.body;
    adminCollection.insertOne(email)
        .then(result => {
            res.send(result.insertedCount > 0);
        })
  })

  app.delete('/delete/:id', (req, res) => {
    serviceCollection.deleteOne({ _id: objectId(req.params.id) })
        .then(result => {
            res.send(result.deletedCount > 0);
        })
   })

   app.get("/reviewList", (req, res) => {
    reviewCollection.find({})
        .toArray((err, documents) => {
            res.send(documents);
        })
   })

   app.patch('/update/:id', (req,res) => {
    bookingCollection.updateOne({_id: objectId(req.params.id)}, {
        $set: {status: req.body.status}
      })
      .then(result => {
        res.send(result.modifiedCount>0);
      })
   })

});


app.get('/', (req, res) => {
    res.send("Hello Baby Server Is Working");
})

app.listen(process.env.PORT ||port)