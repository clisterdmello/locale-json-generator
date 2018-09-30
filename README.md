# locale-json-generator
Package to generate locale based JSON from excel sheet.

Assumptions  Made; 
1) You will work on node 6 or greater (preferred LTS)
2) The Current XL sheet will be place in the Source Folder, this will change in the coming releases to node parameters
3) you will not change the format of the XL Sheet

#INSTALL
npm i locale-json-generator -D

#Run the project as standalone
type npm start in the command line

#Run the project as dependency to any project
In the package.json file of you project update you scripts part with 
scripts:{
  "translate" :"generate-json"
}

Current  State:
It generates an array as below

[ 
  EN: { 
      PBONE: 'one',
      PBONE1: 'one',
      PROB2: 'one'
  },
  NL: { 
      PBONE: 'une',
      PBONE1: 'une',
      PROB2: 'une'
  },
  DE: { 
      PBONE: 'gun',
      PBONE1: 'gun',
      PROB2: 'gun'
  },
  FR: { 
      PBONE: 'une',
      PBONE1: 'une',
      PROB2: 'une'
  }]
