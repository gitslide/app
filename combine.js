// Importing the Required Modules
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const {EOL} = require('os');

// VARIABLE
var delays = 0;

// jsfunc
const create_file = require('./jsfunc/create_file');
const split_file = require('./jsfunc/split_file');
const append_to_file = require('./jsfunc/append_to_file');

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
    create_file('', output);
    append_to_file(header, output);
}




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

            split_file(filePath, prefix, function (content) {
                // console.log(content);

                append_to_file(before + content + after, output);
            });

        }, delays);
    });
}


function end() {
    append_to_file(footer, output);
}


setTimeout(prepareTemplate, 200);
// setTimeout(readAllFiles, 600);
setTimeout(readSelectedFiles, 800);
setTimeout(end, 12000);

