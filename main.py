from flask_bootstrap import Bootstrap
from flask import Flask, session
from config import Config
app = Flask(__name__)
app.config['SECRET_KEY'] = Config['SECRET_KEY']
session['player'] = {}
bootstrap = Bootstrap(app)
import routes


if __name__ == "__main__":
    app.run()
