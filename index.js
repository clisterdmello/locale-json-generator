#!/usr/bin/env node

const excelToJson = require('convert-excel-to-json');
const excelpath = './source/translations.xlsx';
const jsonData = excelToJson({
    sourceFile: excelpath
});
const currentSheet = Object.keys(jsonData)[0];
const JsonOfCurrentSheet = jsonData[currentSheet];
const headerRow = JsonOfCurrentSheet[0];
let tranlationList = [];

Object.keys(headerRow).forEach(function (col) {
    if(headerRow[col] !=='key'){
        tranlationList[headerRow[col]] = {};
    }    
});


for (let row = 1; row < JsonOfCurrentSheet.length; row++) {
    let jsonKey = null;

    Object.keys(headerRow).forEach(function (col) {
        if(headerRow[col] ==='key'){
            jsonKey = JsonOfCurrentSheet[row][col];
        }else{
            let currentTranslation = {};
                currentTranslation [jsonKey] = JsonOfCurrentSheet[row][col];
                Object.assign(tranlationList[headerRow[col]],currentTranslation);
        }
    });
}
console.log(tranlationList);