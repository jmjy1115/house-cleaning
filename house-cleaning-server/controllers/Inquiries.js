// import nodemailer from 'nodemailer';

export const sendEmail = async (req, res, next) => {
  const { name, phone, email, address, inquiryDetails } = req.body;
  console.log(name, phone, email, address, inquiryDetails);
  try {
    res.send('OK');
  } catch (err) {
    console.error(err);
    return next(err);
  }

  /* 메일 전송 기능 개발 중
  try {
    let transporter = nodemailer.createTransport({
      service: 'Naver',
      auth: {
        user: process.env.MAIL_SERVICE_EMAIL,
        pass: process.env.MAIL_SERVICE_PASSWORD
      }
    });
  
    let mailOptions = {
      from: 'no-reply@housecleaning.com',
      to: 'abc@naver.com',
      subject: '[테스트] 온라인문의 알림메일입니다.',
      text: `
      온라인문의 내용입니다.
  
      이름: ${name}
      휴대폰번호: ${phone}
      이메일: ${email}
      주소: ${address}
      문의내용: ${inquiryDetails}`
    }
  
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    res.send('Email sent!');

  } catch (err) {
    console.error(err);
    return next(err);
  }
  */
}
