Run awk script to pull data from Scripts.txt and save to Scripts.js

```
awk 'BEGIN {OFS="\t"}($1!="#" && $1!="\
") {print $1, $3} ($2=="Total"){gsub(/#/, "\/\/", $1); print $1, $5}' scripts.txt > scripts.js
```

Find/replace to move the name of the script to the comment line with the total
Find: `\t(\w+)\n\/\/\t(\d+)`
Replace: `\n//\t$2 $1`

Find/replace to remove script names from every other line
Find: `(?<=\w)\t\w+`
Replace: ``

Find/replace to surround each script's codepoints with a variable declaration set to the name of the script
Find: `((^.*\n)+?)(\/\/\t\d+ (\w+))`
Replace: `const $4 = [\n$1];\n$3\n`

Find/replace to turn ranges into an array with the first codepoint as the first element and last codepoint as second
Find: `((\w+)\.\.(\w+))`
Replace: `["$2", "$3"],`

Find/replace to convert individual codepoints to strings
Find: `^(\w+)$`
Replace: `"$1",`

