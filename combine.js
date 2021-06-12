// Importing the Required Modules
const fs = require('fs');
const readline = require('readline');
const path = require('path');

// const project_path = '.';
const project_path = '../data/';
const slide_config_path = project_path + 'event/2021/4developers/';
const config_filename = 'slides.json';
var cfg = require(slide_config_path + config_filename);
console.log(cfg);

// PAGE
var header = '';
fs.readFile(slide_config_path + cfg.template.page.header, "utf8", function (err, data) {
    header = data;
});
var footer = '';
fs.readFile(slide_config_path + cfg.template.page.footer, "utf8", function (err, data) {
    footer = data;
});

// SLIDE
var before = '';
fs.readFile(slide_config_path + cfg.template.slide.header, "utf8", function (err, data) {
    before = data;
});

var after = '';
fs.readFile(slide_config_path + cfg.template.slide.footer, "utf8", function (err, data) {
    after = data;
});

// console.log(header + before + after +footer);


var file_list = cfg.slides;
var output = project_path + cfg.output;

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

var delays = 0;

function appendToFile(data, filename) {
    let config = {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
    };
    try {
        delays += 50;

        // setTimeout(function () {
        console.log(delays);
        console.log(filename);
        fs.writeFileSync(filename, data, config);
        // }, delays);

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

    // console.log(file_list);
    // return;
    file_list.forEach(function (item, index, array) {
        console.log('item:', item, index);

        var filePath = project_path + item;
        delays += 100;

        console.log(filePath);
        setTimeout(function () {
            console.log(delays);

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
setTimeout(readSelectedFiles, 800);
setTimeout(end, 12000);

