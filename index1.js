const express = require("express")
  var engines = require('consolidate');
  const nodemailer = require('nodemailer')
  
  const app =  express()
  
  const urlencodedParser = express.urlencoded({extended: false})
  
  app.use(express.static(`${__dirname}`))
  app.engine('html', engines.mustache);
  app.set('view engine', 'html');
  
  async function sendToEmail(messageText){
      let testEmailAccount = await nodemailer.createTestAccount()
  
      let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
          user: 'daniella4@ethereal.email',
          pass: 'ZT4HdG7vaxfv33NaEg'
      }
      })
  
      let result = await transporter.sendMail({
      from: '"Node js" <daniella4@ethereal.email>',
      to: 'daniella4@ethereal.email',
      subject: 'Message from Node js',
      text: messageText
      })
  }
  
  app.post("/send",urlencodedParser,(req,res)=>{
      let ans = req.body
      sendToEmail(ans.email)
     
  })
  
  app.use("/" , (req,res)=>{
      res.render("index.html")
  })
  
  app.listen(8000 , (req,res)=>{
      console.log("ok")
  })