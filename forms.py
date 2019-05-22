from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField, BooleanField, validators, IntegerField
from flask_wtf import FlaskForm


class nameform(FlaskForm):
    name = TextField('Name:', validators=[validators.required()])
    submit = SubmitField("Submit")
