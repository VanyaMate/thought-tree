# Thought Tree

---
##Технологии

Сборщик: **vite**

### Fontend

- TypeScript
- React
- SCSS
- Redux Toolkit / Redux Toolkit Query
- [возможно будет] three.js

### Backend
- TypeScript
- Nest
- Sequelize ORM
- PostgreSQL

---
##Запуск у себя

> Для этого вам нужен установленный PostgresSQL

- Скопировать репозиторий
```
git clone https://github.com/VanyaMate/thought-tree
```
- Установить зависимости
```
cd thought-tree/ && cd client/ && npm i && cd .. && cd server/ && npm i
```
- Дальше понадобится две консоли для запуска фронта и бека

В первой консоли для старта сервера. Так же настроить .dev.env для соединения с базой
```
npm run start:dev
```
Во второй консоли для старта фронта 
```
cd .. && cd client/ && npm run dev
```