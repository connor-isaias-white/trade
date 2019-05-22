from flask_bootstrap import Bootstrap
from flask import Flask
from config import Config
from user import user
app = Flask(__name__)
app.config['SECRET_KEY'] = Config['SECRET_KEY']
bootstrap = Bootstrap(app)

import routes

if __name__ == "__main__":

    app.run()
