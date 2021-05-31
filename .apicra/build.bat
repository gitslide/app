@ECHO OFF
:: Prepare the developer version without minimizing the content in file jloads.min.js
type ".\tom-sapletta\4developers\*.md" > .\jloads.md
type ".\tom-sapletta\about\*.md" >> .\jloads.md
type ".\tom-sapletta\softreck\pl.md" >> .\jloads.md
type ".\entuzjasta\development\*.md" >> .\jloads.md
type ".\entuzjasta\internet\*.md" >> .\jloads.md
type ".\entuzjasta\streaming\*.md" >> .\jloads.md
