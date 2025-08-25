#!/bin/bash
# Автозапуск FastAPI backend для FTP
cd /workspaces/FTP
while true; do
  uvicorn main:app --host 0.0.0.0 --port 8000 --reload
  sleep 2
done
