# locale-json-generator
Package to generate locale based JSON from excel sheet.

Assumptions  Made; 
1) You will work on node 6 or above (preferred LTS)
2) The Current Excel sheet will be place in the Folder mentioned in the LOCATION-TO-FOLLDER (please refer below scripts section) when used as a dependency. When used as standalone.
3) You will not change the format of the XL Sheet ( Please refer translation folder for example sheet)
4) By default support to EN, NL, FR, DE
5) I will place a sample excel sheet in translation so that you know the structure of the sheet you need to maintain.

#INSTALL
npm i locale-json-generator -D

#Run the project as standalone
npm start in the command line

#Run the project as dependency to any project
In the package.json file of you project update you scripts part with 
scripts:{
  "translate" :"generate-translation ./LOCATION-TO-FOLLDER/FILE-NAME.xlsx ./LOCATION-TO-DESTINATION/"
}
Type in git bash  npm run translate;
You will see the results in LOCATION-TO-DESTINATION as en.json, nl.json, fr.json, de.json.

#Run the project as standalone
npm start
