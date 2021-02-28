// Importing the Required Modules
const fs = require('fs');
const readline = require('readline');
const path = require('path');


function createFile(data, filename, ext = ".md") {
    let config = {
        encoding: "utf8",
        flag: "w",
        mode: 0o666
    };
    try {
        fs.writeFileSync(filename + ext, data, config);
        // console.log(fs.readFileSync(filename + ext, config.encoding));
    } catch (err) {
        console.error(err);
    }
}

function splitFile(filepath, dirpath = '') {

    // Creating a readable stream from file
    // readline module reads line by line
    // but from a readable stream only.
    const file = readline.createInterface({
        input: fs.createReadStream(filepath),
        output: process.stdout,
        terminal: false
    });

    // Printing the content of file line by
    //  line to console by listening on the
    // line event which will triggered
    // whenever a new line is read from
    // the stream
    var i = 0;
    var data = "";

    file.on('line', (line) => {
        i += 1;
        var filename = dirpath + path.sep + "" + i.toString();

        if (line.lastIndexOf('##', 0) == 0) {
            console.log(data);
            createFile(data, filename, '.mdt');
            data = "";
        } else {
            // console.log(line);
            data += line + "\n";
        }
    });
}

function readDir(folder, filter = ".md") {

    // Function to get current filenames
    // in directory with specific extension
    fs.readdir(__dirname, (err, files) => {
        if (err)
            console.log(err);
        else {
            console.log("\Filenames with the .txt extension:");
            files.forEach(file => {
                if (path.extname(file) == filter) {
                    // readFile(file);
                    console.log(file);
                }

            })
        }
    });
}


function splitFile2(filePath, dirpath = '', prefix = '#') {

    fs.readFile(filePath, "utf8", function (err, data) {

        // console.log(data);
        var data_splitted = data.split(prefix);
        data_splitted.forEach(function (item, index, array) {

            console.log('item:', item, index);
            console.log("--------filePath:");
            console.log(filePath);
            console.log("--------data_splitted:");
            if (data_splitted[index].length > 2) {
                var content = prefix + data_splitted[index];
                // console.log(content);
                var filename = dirpath + path.sep + index.toString();
                console.log(filename);

                createFile(content, filename);
            }

        });
    });
}

folder_list = [
    // 'api-foundation',
    'entuzjasta',
    // 'jloads',
    // 'softreck',
    // 'tom-sapletta',
];
folder = './';
// readDir(folder);
console.log(__dirname);


// sync version https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
function walkSync(currentDirPath, callback) {
    // var fs = require('fs'),
    //     path = require('path');
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

var filter = '.md';
var newDestList = [];

folder_list.forEach(function (item, index, array) {
    // console.log('item:', item, index);

    walkSync('./' + item, function (filePath, stat) {
        // console.log(path.extname(filePath));
        if (path.extname(filePath) == filter) {
            // readFile(file);
            // var newDest = path.basename(filePath) + path.sep + path.basename(filePath, path.extname(filePath));
            // var newDest = path.basename(path.dirname(filePath));
            var dir = path.basename(filePath, path.extname(filePath));
            var dirpath = path.dirname(filePath);
            var newDest = dirpath + path.sep + dir;

            // console.log(newDest);

            if (!fs.existsSync(newDest)) {
                fs.mkdirSync(newDest, '0777', true);
                newDestList.push(newDest);
                // mkdir save to filePath
                // remove next time before create
            }
            splitFile2(filePath, newDest);
            // console.log(filePath);
        }
        // console.log(stat);
    });

});

console.log(newDestList);

// remove Dirs
function removeDirs() {
    newDestList.forEach(function (item, index, array) {
        console.log('item:', item, index);
        fs.rmdirSync(newDestList[index], {recursive: true});
    });
}
