const express = require('express');

const userRouter = express.Router();
const { login, signup} = require("../controllers/user.controller");

const { authorization } = require('../middlewares/authorization');
const { CreateQuiz, getQuiz, getQuizByID, updateQuiz, deleteQuiz }=require("../controllers/quiz.controller")

userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.get("/quizzes", authorization, getQuiz);
userRouter.get("/quizzes/:id", authorization, getQuizByID);
userRouter.post("/quizzes", authorization, CreateQuiz);
userRouter.put('/quizzes/:id', authorization, updateQuiz,);
userRouter.delete('/quizzes/:id', authorization,deleteQuiz);





module.exports={
    userRouter
}