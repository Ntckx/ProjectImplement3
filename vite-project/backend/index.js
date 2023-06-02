  var express = require("express");
  var cors = require("cors");
  var app = express();
  var bodyParser = require("body-parser");
  var jsonParser = bodyParser.json();
  const bcrypt = require("bcrypt");
  const saltRounds = 10; //gen password
  var jwt = require("jsonwebtoken");
  const secret = "projectImplementLogin";
  const mysql = require("mysql2");
  app.use(cors({
    origin:"http://localhost:5173"
  }));
  
  app.use(express.json());
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydatabase",
  });
  app.post("/Register", jsonParser, function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      connection.execute(
        "INSERT INTO users(username,password) VALUES(?,?)",
        [req.body.username, hash],
        function (err, results, fields) {
          if (err) {
            res.json({ status: "error", message: err });
            return;
          }
          res.json({ status: "ok" });
        }
      );
    });
  });
  app.post("/Login", jsonParser, function (req, res, next) {
    connection.execute(
      "SELECT * FROM users WHERE username=?",
      [req.body.username],
      function (err, users  ) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        if (users.length == 0) {
          res.json({ status: "error", message: "no user found" });
          return;
        }
        bcrypt.compare(
          req.body.password,
          users[0].password,
          function (err, isLogin) {
            if (isLogin) {
              var token = jwt.sign({ username: users[0].username }, secret);
              res.json({ status: "ok", message: "Login success", token });
            } else {
              res.json({ status: "error", message: "Login failed" });
            }
          }
        );
      }
    );
  });



  app.post("/Authen", jsonParser, function (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      var decoded = jwt.verify(token, secret);
      res.json({ status:'ok',decoded });
    } catch (err) {
      res.json({status:'error',message:err.message})
    }
  });

  app.post("/addCard", (req, res) => {
    const { Destination, Description } = req.body;

    if (!Destination || !Description) {
      res.status(400).json({ error: "Destination and Description are required fields" });
      return;
    }

    const query = "INSERT INTO plancard (Destination, Description) VALUES (?, ?)";
    const values = [Destination, Description];

    connection.query(query, values, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while adding the card" });
        return;
      }

      console.log(result);
      res.json({ Destination, Description });
    });
  });

  app.get("/getCard",(req,res)=>{
    
    connection.query("SELECT * FROM plancard",(error,result)=>{
      if(error){
        res.send({err: error})
        return;
      }
      res.send(result)
    });
  });

  app.get("/Login", (req, res) => {
    if (req.session.users) {
      res.send({ loggedIn: true, user: req.session.users });
    } else {
      res.send({ loggedIn: false });
    }
  });

  app.patch("/editPost/:id", (req, res) => {
    const Destination = req.body.title;
    const Description = req.body.Description;
    const id = req.params.id;
    console.log(id);

    connection.query(
      "UPDATE plancard SET Destination=?, Description=? WHERE id=?",
      [Destination, Description, id],
      (error, result) => {
        if (error) {
          res.send({ err: error });
        }
        res.send(result);
      }
    );
  });


  app.get("/getCard/:id", (req, res) => {
    const id = req.params.id;

    connection.query("SELECT * FROM plancard WHERE id = ?", id, (err, result) => {
      if (err) {
        console.error("Error selecting Post", err);
        res.sendStatus(500);
        return;
      } else {
        if (result) {
          res.send(result[0])
        }
      }
    });
  });
  
  app.delete("/deletePost/:id",(req,res)=>{
    const id = req.params.id;
    connection.query("DELETE FROM plancard WHERE id = ?",id,(err,result)=>{
      if(err){
        console.log("Error deleting Post",err);
        res.sendStatus(500);
        return;
      }
      else{
        if(result){
          return res.send({success:true,result})
        }
      }
    })
  })

  app.patch("/editCard/:id", (req, res) => {
    const Destination = req.body.Destination;
    const Description = req.body.Description;
    const id = req.params.id;
    console.log(id);
    connection.query(
      "UPDATE plancard SET Destination=?, Description=? WHERE id=?",
      [Destination, Description, id],
      (error, result) => {
        if (error) {
          res.send({ err: error });
        }
        res.send(result);
      }
    );
  });
  

  app.listen(3000, function () {
    console.log("CORS-enabled web server listening on port 3000");
  });
