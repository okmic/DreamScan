# 🔐 DreamScan for https://internetlab.ru
# Расшифровка снов с помощью AI 
# Доступно на проду
## http://157.22.205.232
### Просто фронт (БЕЗ БЭКЕНДА) доступен в gb pages - https://okmic.github.io/DreamScan/

## 🛠 Технологии

| Слой | Технологии |
|------|-----------|
| **Frontend** | React, TypeScript, Tailwind CSS
| **Backend** | Node.js, Fastify, TypeScript |
| **Инфраструктура** | Docker, PM2 |

# Dev запуск
### Необходимо создать и заполнить файл .env по образцу из backend/src/pkg/config/appconfig.ts.
### В корневой папке после установки проекта сервер в dev режиме запускается скриптом yarn server:dev или npm run server:dev.
### Также в корневой папке находится клиент на React в папке client. Необходимо установить зависимости, создать и заполнить файл frontend/src/appconfig.ts по образцу:

export default { backendUrl: "http://localhost:порт_бэкенда" }

### Далее установить зависимости и запустить проект используя локальный nodejs 
# ИЛИ
### В корневой папке находится файл docker-compose-dev.yaml, который запускает бэкенд и фронтенд
