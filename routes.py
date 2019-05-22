from main import app
from flask import render_template, flash, redirect, url_for, request, session
from forms import nameform
from user import user


@app.route("/name", methods=['GET', 'POST'])
def name():
    session['player'] = {}
    form = nameform()
    if form.validate():
        name = form.name.data
        session['player']['name'] = name
        flash('Hello ' + name)
        return redirect(url_for("nyse"))
    return render_template("name.html", title="Welcome", form=form)


@app.route("/nyse", methods=['GET', 'POST'])
def nyse():
    return render_template("nyse.html", title="NYSE")


@app.route("/", methods=['GET', 'POST'])
def index():
    return redirect(url_for('name'))


@app.route("/debug")
def debug():
    return "debug"
