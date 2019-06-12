from main import app, nav
from flask_nav.elements import Navbar, View


@nav.navigation()
def mynavbar():
    return Navbar(
        'Trade Game',
        View('Home', 'index'),
        View('Stocks', 'nyse'),
        View('Name', 'name')
    )
