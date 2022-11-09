const express = require ('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors');
const sendEmail = require('./utils/sendEmail');
// const router = require('./Router/route')
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post('/sendEmail', async(req, res) => {
    const{email}=req.body;

    try {
        console.log(email)
        const send_to=email;
        const send_from=process.env.EMAIL_USER;
        const reply_to=email;
        const subject="Test Email";
        const message="This is a test email";        

        await sendEmail(subject,message,send_from,send_to,reply_to)
        res.status(200).json({message:"Email sent successfully"})
    } catch (error) {
        res.status(500).json({message:"Email not sent"})
    }
})


const port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log("connected")
})