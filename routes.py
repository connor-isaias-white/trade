from main import app
from flask import render_template, flash, redirect, url_for, request, session
from forms import nameform
from stocks import stock
from items import items
import random
import json
import sys


@app.route("/name", methods=['GET', 'POST'])
def name():
    form = nameform()
    session['player'] = {}
    if form.validate():
        name = form.name.data
        session['player']['name'] = name
        flash('Hello ' + name)
        return redirect(url_for("location", country="Australia"))
    return render_template("name.html", title="Welcome", form=form)


@app.route("/nyse", methods=['GET', 'POST'])
def nyse():
    if request.args.get('comps'):
        comps = request.args.get('comps').split(",")
        for i in range(len(comps)):
            comps[i] = stock(comps[i]).info()
    else:
        comps = []
    return render_template("location.html", title="The Stock Exchange", items=comps)


@app.route("/location")
def location():
    countries = ["China", "Australia", "France", "America", "England"]
    try:
        session['day'] += 1
        session['daystr'] = str(session['day'])
        session['country'] = countries[countries.index(session['country'])-1]
        if random.random() <= 0.3:
            event = items(countries).random_event(session['items'])
            flash(event[0])
        else:
            event = False
        for i in range(len(session['items'])):
            item = list(session['items'][i].keys())[1]
            session['items'][i]['price'] = items(countries).update_price(
                session['items'][i]['price'], session['daystr'], event, item)
    except KeyError as e:
        # first load
        print(f"key error: {e}")
        session['country'] = "China"
        session['money'] = 1000
        session['day'] = 1
        session['daystr'] = str(session['day'])
        listOfItems = []
        # amount of foods
        for i in range(6):
            listOfItems.append(items(countries).create())
        session['items'] = listOfItems
    if session['day'] >= 52:
        return "Game over"
    else:
        nextLoc = countries[countries.index(session['country'])-1]
        return render_template("location.html", title=session['country'], session=session, nextLoc=nextLoc)


@app.route("/", methods=['GET', 'POST'])
def index():
    return redirect(url_for("name"))


@app.route("/debug")
def debug():
    return "debug"

# Do not mark
@app.route('/universe')
def universe():
    return render_template("universe.html")


@app.route('/session', methods=['GET'])
def givesession():
    sess = session['items']
    sess.append({'day': session['day']})
    return json.dumps(sess)


@app.route('/trade/<data>', methods=['GET'])
def worker(data):
    data = json.loads(data)
    for i in session['items']:
        if i['name'] == data['transaction'][0]:
            if session['money'] >= i['price'][session['country']][-1]*data['transaction'][1]:
                session['money'] -= i['price'][session['country']][-1] * \
                    data['transaction'][1]
                if i['quantity']+data['transaction'][1] >= 0:
                    i['quantity'] += data['transaction'][1]
                    return"true"
                else:
                    return "false"
            else:
                return "false"
    return 'false'
