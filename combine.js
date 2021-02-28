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
        // console.log(fs.readFileSync(filename + ext, config.encoding));
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
        // console.log(fs.readFileSync(filename + ext, config.encoding));
    } catch (err) {
        console.error(err);
    }
}


function splitFile(filePath, prefix = '#', callback) {

    fs.readFile(filePath, "utf8", function (err, data) {

        if (typeof (data) === "undefined") {
            return null;
        }
        if (data.length < 5) {
            return null;
        }

        var data_splitted = data.split(prefix);
        data_splitted.forEach(function (item, index, array) {
            // console.log('item:', item, index);
            console.log("--------filePath:");
            console.log(filePath);
            // console.log("--------data_splitted:");

            if (data_splitted[index].length > 2) {
                var content = prefix + data_splitted[index];
                callback(content);
            }
        });
    });
}

// TODO read only selected files
//  + split content
//  + combine to index.html
function readSelectedFiles() {

    file_list.forEach(function (item, index, array) {
        console.log('item:', item, index);

        var filePath = './' + item;
        // console.log(filePath);

        splitFile(filePath, '#', function (content) {
            // console.log(content);
            appendToFile(before + content + after, output);
        });
    });

}


function end() {
    appendToFile(footer, output);
}


setTimeout(prepareTemplate, 200);
// setTimeout(readAllFiles, 600);
setTimeout(readSelectedFiles, 800);
setTimeout(end, 3500);

