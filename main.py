from flask_bootstrap import Bootstrap
from flask import Flask, session
from config import Config
from flask_wtf import CSRFProtect
#from flask_nav import Nav

app = Flask(__name__)
csrf = CSRFProtect()
#nav = Nav()
#nav.init_app(app)
app.config['SECRET_KEY'] = Config['SECRET_KEY']
csrf.init_app(app)
bootstrap = Bootstrap(app)
import routes#, navbar


if __name__ == "__main__":

    app.run()
