from flask import (
    Flask,
    render_template,
    request,
    redirect,
    flash,
)
from werkzeug.utils import secure_filename
import os
import json
from os.path import join
import glob
from configparser import ConfigParser

# ----------------------- Flask app.------------------------ #


# Start Flask app
app = Flask(__name__)


# ------------------------ HTML routes.------------------------ #


# Start Flask app
app = Flask(__name__)


@app.route("/")
@app.route("/home")
def index():
    """
    Start page for all apps.
    """
    return render_template("safeenvironment.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)
