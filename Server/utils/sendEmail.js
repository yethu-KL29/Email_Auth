const nodemailer = require('nodemailer');
const  sendEmail = async(subject,message,send_from,send_to,reply_to)=>{
    let transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:"587",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        },
        tls:{
            rejectUnauthorized:false
        }
        
    })
    const options = {
        from:send_from,
        to:send_to,
        subject:subject,
        html:message,
        replyTo:reply_to,
        
    }
}