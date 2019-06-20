from main import app, nav
from flask_nav.elements import Navbar, View


@nav.navigation()
def mynavbar():
    return Navbar(
        'Trade Game',
        View('Home', 'index'),
        View('Game', 'location', country="Australia"),
        View('Stocks', 'nyse'),
        View('Name', 'name'),
        View('Universe', 'universe')
    )
