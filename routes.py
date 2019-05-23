from main import app  # , nav
from flask import render_template, flash, redirect, url_for, request, session
from forms import nameform
from user import user
from stocks import stock
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
    comps = request.args.get('comps').split(",")
    for i in range(len(comps)):
        comps[i] = stock(comps[i]).info()
    return render_template("nyse.html", title="The Stock Exchange", comps=comps)


@app.route("/", methods=['GET', 'POST'])
def index():
    return "index"


@app.route("/debug")
def debug():
    return "debug"
