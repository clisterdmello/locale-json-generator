#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const excelToJson = require('convert-excel-to-json');
const SOURCEEXCELFILE = path.resolve(__dirname, `../../${process.argv[2]}`);
const DESTINATION = path.resolve(__dirname, `../../${process.argv[3]}`);
const writeJsonFile = require('write-json-file');

const jsonData = excelToJson({
    sourceFile: SOURCEEXCELFILE
});
const currentSheet = Object.keys(jsonData)[0];
const JsonOfCurrentSheet = jsonData[currentSheet];
const headerRow = JsonOfCurrentSheet[0];
let tranlationList = [];

Object.keys(headerRow).forEach(function (col) {
    if (headerRow[col] !== 'key') {
        tranlationList[headerRow[col]] = {};
    }
});

for (let row = 2; row < JsonOfCurrentSheet.length; row++) {
    let jsonKey;

    Object.keys(headerRow).forEach(function (col) {
        if (headerRow[col] === 'Label') {
            jsonKey = JsonOfCurrentSheet[row][col];
        } else if (jsonKey !== undefined) {
            let currentTranslation = {};
            currentTranslation[jsonKey] = JsonOfCurrentSheet[row][col];
            Object.assign(tranlationList[headerRow[col]], currentTranslation);
        }
    });
}


Object.keys(tranlationList).forEach((key) => {
    let path;
    if (key.match(/EN|NL|FR|DE/) !== null) {
        path = `${DESTINATION}/${key.toLowerCase()}.json`;
        // fs.unlink(path);
        writeJsonFile(path, tranlationList[key])
        .then(() => console.log('Translation Done for:', key.toLowerCase()))
        .catch(() => console.log('Translation missing for:', key.toLowerCase()))
    }
});
