import express from 'express'
const app = express();
import cors from 'cors'
import CookieParser from 'cookieparser';

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}
))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

app.use(express.static("public"))
app.use(CookieParser())

export { app }