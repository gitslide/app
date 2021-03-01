// Importing the Required Modules
const fs = require('fs');
const readline = require('readline');
const path = require('path');


var header = '';
fs.readFile('./header.html', "utf8", function (err, data) {
    header = data;
});
var footer = '';
fs.readFile('./footer.html', "utf8", function (err, data) {
    footer = data;
});

var before = '';
fs.readFile('./before.html', "utf8", function (err, data) {
    before = data;
});

var after = '';
fs.readFile('./after.html', "utf8", function (err, data) {
    after = data;
});

// var output = './event/2021/4developers/index.html';
var file_obj = require('./event/2021/4developers/slides.json');
var file_list = file_obj.slides;
var output = file_obj.output;
console.log(file_obj);

var prefix = '# ';

function prepareTemplate() {
    createFile('', output);
    appendToFile(header, output);
}


function createFile(data, filename) {
    let config = {
        encoding: "utf8",
        flag: "w",
        mode: 0o666
    };
    try {
        fs.writeFileSync(filename, data, config);
    } catch (err) {
        console.error(err);
    }
}


function appendToFile(data, filename) {
    let config = {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
    };
    try {
        fs.writeFileSync(filename, data, config);
    } catch (err) {
        console.error(err);
    }
}

const {EOL} = require('os');

function splitFile(filePath, prefix = '# ', callback) {

    fs.readFile(filePath, "utf8", function (err, data) {

        if (typeof (data) === "undefined") {
            return null;
        }
        if (data.length < 5) {
            return null;
        }

        var data_splitted = data.split(EOL + prefix);
        data_splitted.forEach(function (item, index, array) {
            // console.log('item:', item, index);
            console.log("--------filePath:");
            console.log(filePath);
            // console.log("--------data_splitted:");

            if (data_splitted[index].length > 2) {
                var content = prefix + data_splitted[index] + "\n" + "<!-- " + filePath + ":" + index + "-->" + "\n";
                callback(content);
            }
        });
    });
}

/*
 */




/**
 * read only selected files
 * split content
 * combine to index.html
 */
function readSelectedFiles() {

    var delays = 0;
    file_list.forEach(function (item, index, array) {
        console.log('item:', item, index);

        var filePath = './' + item;

        delays += 200;
        // console.log(filePath);
        setTimeout(function () {

            splitFile(filePath, prefix, function (content) {
                // console.log(content);
                appendToFile(before + content + after, output);
            });

        }, delays);

    });

}


function end() {
    appendToFile(footer, output);
}


setTimeout(prepareTemplate, 200);
// setTimeout(readAllFiles, 600);
setTimeout(readSelectedFiles, 500);
setTimeout(end, 9000);

