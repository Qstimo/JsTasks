import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());



const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    buld: {},
    src: {
        files: '${srcFolder}/files/**/*.*',
    },
    wath:{},
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
};