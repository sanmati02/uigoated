from dataclasses import dataclass
from re import S
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

current_score = 0

lessons = {
    "1" : {
        "lesson_id": "1",
        "prev_lesson":"start",
        "next_lesson":"2",
        "chord":"C Major",
        "notes":["C","E","G"],
        "note_nums":["1,5,8"],
        "text": "The green keys shown below show the notes that make up the C Major chord. This chord has the C as "
                "the root note, the E as the major third, and the G as the fifth. Play around with these notes and "
                "make sure you remember their position! On the next screen you'll get a chance to practice with this "
                "chord. "
    },
    "2" : {
        "lesson_id": "2",
        "prev_lesson":"1",
        "next_lesson":"3",
        "chord":"C Major",
        "notes":["C","E","G"],
        "note_nums":["1,5,8"],
        "text": "The green keys shown below show 2/3 of the notes that make up the C Major chord. This chord has the "
                "C as "
                "the root note and the E as the major third. Press the fifth of this chord to complete this challenge!"
    },
    "3" : {
        "lesson_id": "3",
        "prev_lesson":"2",
        "next_lesson":"4",
        "chord":"D Minor",
        "notes":["D","F","A"],
        "note_nums":["3,7,10"],
        "text": "The green keys shown below show the notes that make up the D Minor chord. This chord has the D as "
                "the root note, the F as the minor third, and the A as the fifth. Play around with these notes and "
                "make sure you remember their position! On the next screen you'll get a chance to practice with this "
                "chord. "
    },
    "4" : {
        "lesson_id": "4",
        "prev_lesson":"3",
        "next_lesson":"5",
        "chord":"D Minor",
        "notes":["D", "A", "F"],
        "note_nums":["3,7,10"],
        "text": "The green keys shown below show 2/3 of the notes that make up the D Minor chord. This chord has the F as "
                "the root note and the A as the fifth. Press the minor third of this chord to complete this challenge!"
    },
    "5" : {
        "lesson_id": "5",
        "prev_lesson":"4",
        "next_lesson":"6",
        "chord":"E Minor",
        "notes":["E","G","B"],
        "note_nums":["5","9","12"],
        "text": "The green keys shown below show the notes that make up the E Minor chord. This chord has the E as "
                "the root note, the G as the minor third, and the B as the fifth. Play around with these notes and "
                "make sure you remember their position! On the next screen you'll get a chance to practice with this "
                "chord. "
    },
    "6" : {
        "lesson_id": "6",
        "prev_lesson":"5",
        "next_lesson":"7",
        "chord":"E Minor",
        "notes":["G","B", "E"],
        "note_nums":["5","9","12"],
        "text": "The green keys shown below show 2/3 of the notes that make up the E Minor chord. This chord has the G as "
                "the minor third and the B as the fifth. Press the root note of this chord to complete this challenge!"
    },
    "7" : {
        "lesson_id": "7",
        "prev_lesson":"6",
        "next_lesson":"8",
        "chord":"F Major",
        "notes":["F","A","highC"],
        "note_nums":["6","10","13"],
        "text": "The green keys shown below show the notes that make up the F Major chord. This chord has the F as "
                "the root note, the A as the major third, and the higher C octave as the fifth. Play around with these notes and "
                "make sure you remember their position! On the next screen you'll get a chance to practice with this "
                "chord. "
    },
    "8" : {
        "lesson_id": "8",
        "prev_lesson":"7",
        "next_lesson":"end",
        "chord":"F Major",
        "notes":["F","A","highC"],
        "note_nums":["6","10","13"],
        "text": "The green keys shown below show 2/3 of the notes that make up the F Major chord. This chord has the F as "
                "the root and the A as the major third. Press the fifth of this chord to complete this challenge!"
    }
}

quizzes = {
    "1": {
    "quiz_id": "1",
    "next_question":"2",
    "chord": "C Major Chord",
    "text": "Pick the notes in the C Major Chord.",
    "answer":["C", "E", "G"],
    "note_nums":["1","5","8"],
    "hint": "Each chord is made up of three notes. The root, the fifth, and the third. In a major chord, the major "
            "third is two whole steps up from the root and the fifth is a whole step and a half up from the third. Each key "
            "on the piano is a half step and a whole step is made up of two half steps! "
    },

    "2": {
    "quiz_id": "2",
    "next_question":"3",
    "chord": "D Minor Chord",
    "text": "Pick the notes in the D Minor Chord.",
    "answer":["D", "F", "A"],
    "note_nums":["3","7","10"],
    "hint": "Each chord is made up of three notes. The root, the fifth, and the third. In a minor chord, the minor third "
            "is a whole step and a half up from the root and the fifth is two whole steps up from the third. "
            "Each key "
            "on the piano is a half step and a whole step is made up of two half steps! "
    },
    "3": {
    "quiz_id": "3",
    "next_question":"4",
    "chord": "E Minor Chord",
    "text": "Pick the notes in the E Minor Chord.",
    "answer":["E", "G", "B"],
    "note_nums":["5","9","12"],
    "hint": "Each chord is made up of three notes. The root, the fifth, and the third. In a minor chord, the minor third "
            "third is a whole step and a half up from the root and the fifth is two whole steps up from the third. "
            "Each key "
            "on the piano is a half step and a whole step is made up of two half steps! "
    },
    "4": {
    "quiz_id": "4",
    "next_question":"end",
    "chord": "F Major Chord",
    "text": "Pick the notes in the F Major Chord.",
    "answer":["F", "A", "highC"],
    "note_nums":["6","10","13"],
    "hint": "Each chord is made up of three notes. The root, the fifth, and the third. In a major chord, the major "
            "third is two whole steps up from the root and the fifth is a whole step and a half up from the third. Each key "
            "on the piano is a half step and a whole step is made up of two half steps! "
    }
}


# ROUTES
@app.route('/')
def welcome():
    return render_template('home.html')   
 
@app.route('/endlearn')
def endlearn():
    return render_template('endlearn.html') 

@app.route('/learn/<lesson_id>')
def learn(lesson_id):
    lesson = lessons[lesson_id]

    return render_template('learn.html', lesson=lesson)  

@app.route('/practice/<lesson_id>')
def practice(lesson_id):
    lesson = lessons[lesson_id]
    return render_template('practice.html', lesson=lesson)  

@app.route('/quiz/<quiz_id>')
def quiz(quiz_id):
    question = quizzes[quiz_id]
    if (quiz_id == "1"):
        print("score is 0")
        score = 0
    else:
        score = current_score
    return render_template('quiz.html', question=question, score=score)  

@app.route('/endquiz')
def endquiz():
    score = current_score
    return render_template('endquiz.html', score=score)

@app.route('/save_score',  methods=['GET', 'POST'])
def save_score():
    global current_score

    json_data = request.get_json()

    current_score = int(json_data)

    return jsonify(score = current_score)



if __name__ == '__main__':
   app.run(debug = True)




