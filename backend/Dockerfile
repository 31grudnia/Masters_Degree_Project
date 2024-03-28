FROM python:3.11.8-slim as PYTHON_IMAGE

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /masters_degree_project/backend

COPY requirements.txt /masters_degree_project/backend
RUN pip3 install -r requirements.txt

COPY . /masters_degree_project/backend

EXPOSE 8000

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]