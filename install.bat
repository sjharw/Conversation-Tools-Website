:: Drop old env
call conda deactivate
call conda env remove --name web-app

:: Create conda work env
:: .yml file contains list of dependencies that your project relies on
call conda env create --name web-app --file environment.yml

:: Update conda
call conda update -n base -c defaults conda

:: Activate work rnv
call conda activate web-app

:: Install dependencies listed in requirements.txt
call python -m pip install -r requirements.txt
