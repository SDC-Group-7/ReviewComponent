#!/usr/bin/env bash
mkfifo fin
mkfifo fout
python server.py < fout > fin &
node seed.js 2>&1 > fout < fin $1 && rm fin && rm fout
