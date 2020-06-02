#!/usr/bin/env bash
mkfifo fin
mkfifo fout
python db/seed/server.py < fout > fin &
node db/seed/seed.js 2>&1 > fout < fin $1 && rm fin && rm fout
