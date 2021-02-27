@ECHO OFF
:: Prepare the developer version without minimizing the content in file jloads.min.js
type ".\entuzjasta\streaming\*.md" > .\jloads.md
type ".\entuzjasta\streaming\*.md" > .\jloads.md
xcopy /y/r jloads.js jloads.min.js
