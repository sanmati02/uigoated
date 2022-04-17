from dataclasses import dataclass
from re import S
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

lessons = [
{
    "lesson_id": "1",
    "next_lesson":"2",
    "chord":"C Major",

    },

    {
    "lesson_id": "2",
    "next_lesson":"3",
    "chord":"C Major",
    
    },
     {
    "lesson_id": "3",
    "next_lesson":"4",
    "chord":"C Major",
    
    },

     {
    "lesson_id": "4",
    "next_lesson":"5",
    "chord":"C Major",
    
    },
     {
    "lesson_id": "5",
    "next_lesson":"end",
    "chord":"C Major",
    
    },
]

quizes = [
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
    return render_template('layout.html')   
 

@app.route('/learn/<lesson_id>')
def learn(lesson_id):
    lesson=dict()
    for item in lessons:
        if item.get("lesson_id") == lesson_id:
            lesson = item
            break
    return render_template('learn.html', lesson=lesson)  

@app.route('/quiz/<quiz_id>')
def quiz(quiz_id):
    question=dict()
    for item in quizes:
        if item.get("quiz_id") == quiz_id:
            question = item
            break
    return render_template('quiz.html', question=question)  

if __name__ == '__main__':
   app.run(debug = True)




