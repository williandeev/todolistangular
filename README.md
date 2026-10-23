<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,55:450a0a,100:b91c1c&height=180&section=header&text=TODO%20LIST%20ANGULAR&fontSize=46&fontColor=ffffff&fontAlignY=36&desc=Task%20manager%20in%20Angular%20consuming%20a%20Django%20REST%20API&descSize=16&descAlignY=58" width="100%" alt="Todo List Angular" />

<img src="https://img.shields.io/badge/Angular_8-0d1117?style=for-the-badge&logo=angular&logoColor=DD0031" alt="Angular 8" />
<img src="https://img.shields.io/badge/TypeScript-0d1117?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
<img src="https://img.shields.io/badge/RxJS-0d1117?style=for-the-badge&logo=reactivex&logoColor=B7178C" alt="RxJS" />
<img src="https://img.shields.io/badge/Netlify-0d1117?style=for-the-badge&logo=netlify&logoColor=00C7B7" alt="Netlify" />
<img src="https://img.shields.io/badge/License-MIT-b91c1c?style=for-the-badge&labelColor=0d1117" alt="MIT License" />

<br />

<a href="https://todolistangular8.netlify.app/"><img src="https://img.shields.io/badge/LIVE_DEMO-todolistangular8.netlify.app-b91c1c?style=for-the-badge&logo=netlify&logoColor=white&labelColor=0d1117" alt="Live demo" /></a>

</div>

<br />

## ▍ABOUT

The frontend half of a full-stack technical challenge: a to-do list in Angular that talks to a REST API built with Django. The backend lives in **[todo-backend](https://github.com/williandeev/todo-backend)**.

<div align="center">
  <img src="https://github.com/williansnex/todolistangular/assets/120076321/c47dcdb4-0ba3-4345-a566-9937c71e99cf" width="70%" alt="To-do list screen" />
</div>

## ▍FEATURES

- **Create** tasks with title and description (date set automatically)
- **Edit inline** with save / cancel
- **Complete** tasks with a checkbox (completed tasks are struck through)
- **Delete** with a confirmation modal
- **Feedback messages** for success and validation warnings
- **Service layer** (`TodoService`) wrapping `HttpClient` for every CRUD call

## ▍GETTING STARTED

> Angular 8 predates current Node versions, so use **Node.js 12 or 14**.

1. Start the API from [todo-backend](https://github.com/williandeev/todo-backend) at `http://localhost:8000/api/`
2. Run the app:

```bash
git clone https://github.com/williandeev/todolistangular.git
cd todolistangular
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). The API URL is set in `src/environments/environment.ts`.

## ▍PROJECT STRUCTURE

```
src/app/
├── services/   # TodoService: HTTP calls to the Django API
└── todolist/   # To-do list component (template, styles, logic)
```

<br />

<div align="center">

<a href="https://github.com/williandeev"><img src="https://img.shields.io/badge/MADE_BY-WILLIAN_ROBSON-b91c1c?style=for-the-badge&logo=github&logoColor=white&labelColor=0d1117" alt="Made by Willian Robson" /></a>

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:b91c1c,45:450a0a,100:0d1117&height=100&section=footer" width="100%" alt="" />
