@echo off

start cmd /k "cd backend && nodemon start"
start cmd /k "cd frontend && npm run start"
