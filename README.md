# JOWA

JOWA is a full-stack application with an Angular frontend and a Django REST Framework backend.

## Repository layout

- `frontend/` — Angular client (Angular CLI 1.5.6, Angular 5).
- `backend/` — Django 3.1 REST API.

## Run locally

### Backend

Use a Python version compatible with the pinned dependencies in `backend/requirements.txt`.

```sh
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

The settings module reads configuration from the process environment. Set `DJANGO_SECRET_KEY`, `DJANGO_DEBUG`, and `DJANGO_ALLOWED_HOSTS` in your shell or development environment before running Django. `backend/.env.example` documents the expected values; Django does not load `.env` automatically.

```sh
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```

### Frontend

The frontend uses an older Angular CLI toolchain. Install the dependencies with a Node.js version compatible with Angular CLI 1.5.6, then start the dev server:

```sh
cd frontend
npm install
npm start -- --host 127.0.0.1 --port 4201
```

## Configuration and data

Do not commit real credentials, local SQLite databases, or uploaded media. Store deployment secrets in the deployment environment. The local database and uploaded files are intentionally excluded from Git.

## License

No license is currently specified. All rights remain with the copyright holder.
