#!/bin/zsh

awk 'BEGIN {OFS="\t"}($1!="#" && $1!="\
") {print $1, $3} ($2=="Total"){gsub(/#/, "\\\\", $1); print $1, $5}' scripts.txt > scripts.js