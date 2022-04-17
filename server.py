from dataclasses import dataclass
from re import S
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

lessons = {
    "1" : {
        "lesson_id": "1",
        "next_lesson":"2",
        "chord":"C Major",
        "notes":["C","E","G"],
        "note_nums":["1,5,8"]
    },
    "2" : {
        "lesson_id": "2",
        "next_lesson":"3",
        "chord":"D Minor",
        "notes":["D","F","A"],
        "note_nums":["3,7,10"]
    },
    "3" : {
        "lesson_id": "3",
        "next_lesson":"4",
        "chord":"E Minor",
        "notes":["E","G","B"],
        "note_nums":["5","9","12"]
    },
    "4" : {
        "lesson_id": "4",
        "next_lesson":"end",
        "chord":"F Major",
        "notes":["F","A","C"],
        "note_nums":["6","10","13"]
    },
<<<<<<< HEAD
]
=======
    "end" : {
        "lesson_id":"end",
        "next_lesson": None,
        "chord": None,
        "notes":[],
        "note_nums":[]
    }
}
>>>>>>> 1bd58b96c8e1b06294f4bae73188346e484a8f63

quizzes = [
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




