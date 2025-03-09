#!/bin/bash

set -euo pipefail

git pull origin main
sudo docker pull kennychau/fileshare:latest
sudo docker compose -f docker-compose.yml up -d
sudo docker compose logs -f