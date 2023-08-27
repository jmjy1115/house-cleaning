import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import dotenv from 'dotenv';

// dotenv 설정
dotenv.config();

// 라우터 로딩

// 시퀄라이즈 로딩
import db from './models/index.js';
const { sequelize } = db;

// express 앱 인스턴스 생성, 포트 설정
const app = express();
app.set('port', process.env.PORT || 8000);

// 데이터베이스 연결
sequelize.sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

// ES6 모듈 사용에 따라 파일 경로, 디렉터리 이름 가져오기
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 미들웨어 셋팅
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

// 라우터 연결

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500,
    }
  });
});

// 서버 시작
app.listen(app.get('port'), () => {
  console.log(app.get('port'), "번 포트에서 대기 중");
});
