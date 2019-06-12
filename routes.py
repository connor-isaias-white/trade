from main import app
from flask import render_template, flash, redirect, url_for, request, session
from forms import nameform
from user import user
from stocks import stock
from items import items
import sys


@app.route("/name", methods=['GET', 'POST'])
def name():
    form = nameform()
    session['player'] = {}
    if form.validate():
        name = form.name.data
        session['player']['name'] = name
        flash('Hello ' + name)
        return redirect(url_for("nyse"))
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


@app.route("/location/<country>", methods=['GET', 'POST'])
def location(country):
    countries = ["China", "Australia", "France", "America", "England"]
    nextLoc = countries[countries.index(country)-1]
    try:
        session['player']["money"] = session['player']["money"]-1
        session['player']['day'] = session['player']['day']+1
        for i in range(len(session['items'])):
            session['items'][i]['price'] = items().update_price(
                session['items'][i]['price'])
    except KeyError as e:
        print(e)
        session['player'] = {}
        session['player']["money"] = 5000
        session['player']['day'] = 1
        listOfItems = []
        for i in range(8):
            listOfItems.append(items().create())
        session['items'] = listOfItems
    return render_template("location.html", title=country, player=session['player'], items=session['items'], nextLoc=nextLoc)


@app.route("/", methods=['GET', 'POST'])
def index():
    return "index"


@app.route("/debug")
def debug():
    return "debug"
