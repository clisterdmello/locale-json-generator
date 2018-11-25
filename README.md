# locale-json-generator
Package to generate locale based JSON from excel sheet.

Assumptions  Made; 
> You will work on node 6 or above (preferred LTS)
> You will not change the format of the XL Sheet ( Please refer translation folder for example sheet)
> By default support to EN, NL, FR, DE, will add more if ned arises or if anyone requets at clisking@gmail.com.

#INSTALL
npm i locale-json-generator -D

#Run the project as standalone
Goto command line tool and type npm start 

#Run the project as dependency to any project
In the package.json file of you project update you scripts part with 

scripts:{
  "translate" :"generate-translations ./src/FILE.xlsx  ./dest/"
}

Goto command line tool and type npm run translate;
You will see the results in ./dest/ as en.json, nl.json, fr.json, de.json.