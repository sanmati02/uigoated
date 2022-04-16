from dataclasses import dataclass
from re import S
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)
current_id = 10

lessons = [
{
    "lesson_id": "1",
    "next_lesson":"2"
    },

    {
    "lesson_id": "2",
    "next_lesson":"3"
    },
     {
    "lesson_id": "3",
    "next_lesson":"4"
    },

     {
    "lesson_id": "4",
    "next_lesson":"5"
    },
     {
    "lesson_id": "5",
    "next_lesson":"end"
    },
     
]

quiz = [
{
    "quiz_id": "1",
    "next_question":"2"
    },

    {
    "quiz_id": "2",
    "next_question":"3"
    },
     {
    "quiz_id": "3",
    "next_question":"4"
    },

     {
    "quiz_id": "4",
    "next_question":"5"
    },
     {
    "quiz_id": "5",
    "next_question":"end"
    },   
]
# ROUTES
@app.route('/')
def welcome():
    return render_template('home.html')   
 

@app.route('/lesson/<lesson_id>')
def learn(lesson_id):
    lesson=lessons[lesson_id]
    return render_template('lesson.html', lesson=lesson)  

@app.route('/quiz/<quiz_id>')
def quiz(quiz_id):
    question=quiz[quiz_id]
    return render_template('lesson.html', question=question)  

if __name__ == '__main__':
   app.run(debug = True)




