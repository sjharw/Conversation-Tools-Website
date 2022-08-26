:: LOOK INTO POETRY ::


::--------- Open Git Bash terminal to run each line seperately --------------::
:: What version of Python?
:: python -V

:: install pip for installing python libraries
:: python3 install pip
:: python3 -m pip install --upgrade pip

:: install virtualenv for setting up virtual environment
:: python3 -m pip install virtualenv

:: create new work environment
:: in Python 3.9, immediately upgrade the pip/setuptools versions after creating an environment with "--upgrade-deps"
:: no need to install venv, it comes packed with python installation
python3 -m venv webapp --upgrade-deps 

:: activate environment
.\webapp\Scripts\activate
::source webapp/bin/activate

:: install dependencies (libraries)
python3 -m pip install -r requirements.txt
:: this gives error at packages=setup.find_packages(), AttributeError: 'function' object has no attribute 'find_packages'

:: install jupyterlab (for notebooks)
python3 -m pip install jupyterlab
:: this isn't installing jupyterlab to webapp virtual env
