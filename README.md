# count-character 

https://marketplace.visualstudio.com/items?itemName=fuzzylife.character

## Features

Count Specific Character(s) in Selected Text

## Requirements

* [Visual Studio Code](http://code.visualstudio.com/)
* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)


```
npx --package yo --package generator-code -- yo code #git clone https://github.com/animesh/vscode-selected-character-count
cd vscode-selected-character-count 
npm run compile
```

## Extension Settings / Usage

ctr-shift-P / >count

## Known Issues

so far counts occurence of characer ">" representing number of sequences in open Fasta file [format](https://en.wikipedia.org/wiki/FASTA_format)


## Create/contribution steps

https://code.visualstudio.com/api/working-with-extensions/publishing-extension


```git clone https://github.com/animesh/vscode-selected-character-count
npm install -g @vscode/vsce
cd vscode-selected-character-count
vsce package
vsce login fuzzylife #token https://fuzzylife.visualstudio.com/_usersSettings/tokens
vsce publish 

```