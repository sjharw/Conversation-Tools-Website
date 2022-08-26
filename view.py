from flask import (
    Flask,
    render_template,
    request,
    redirect,
    flash,
)

import os

# ----------------------- Flask app.------------------------ #


# Start Flask app
app = Flask(__name__)


# ------------------------ HTML routes.------------------------ #


@app.route("/")


@app.route("/se")
def se():
    """
    se
    """
    return render_template("/safeenvironment.html")

@app.route("/shn")
def shn():
    """
    shn
    """
    return render_template("/sixhumanneeds.html")

@app.route("/sp")
def sp():
    """
    sp
    """
    return render_template("/sharedpool.html")

@app.route("/ha")
def ha():
    """
    sp
    """
    return render_template("/hiddenagendas.html")



# run app
if __name__ == "__main__":
    port = int (
        os.environ.get(
            "PORT",
            5000
        )
    )
    app.run(
        debug= True,
        host= "0.0.0.0",
        port= port
    )
