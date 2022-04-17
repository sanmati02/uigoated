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
]
    "end" : {
        "lesson_id":"end",
        "next_lesson": None,
        "chord": None,
        "notes":[],
        "note_nums":[]
    }
}

quizzes = [
 {
    "quiz_id": "1",
    "next_question":"2",
    "title": "C Major Chord",
    "text": "Pick the notes in the C Major Chord.",
    "answer":["C", "E", "G"],
    "note_nums":["1","5","8"]
    },

   {
    "quiz_id": "2",
    "next_question":"3",
    "title": "D Minor Chord",
    "text": "Pick the notes in the D Minor Chord.",
    "answer":["D", "F", "A"],
    "note_nums":["3","7","10"]
    },
  {
    "quiz_id": "3",
    "next_question":"4",
    "title": "E Minor Chord",
    "text": "Pick the notes in the E Minor Chord.",
    "answer":["E", "G", "B"],
    "note_nums":["5","9","12"]
    },

     {
    "quiz_id": "4",
    "next_question":"5",
    "title": "F Major Chord",
    "text": "Pick the notes in the F Major Chord.",
    "answer":["F", "A", "C"],
    "note_nums":["6","10","13"]
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




