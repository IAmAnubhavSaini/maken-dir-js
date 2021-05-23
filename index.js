#!/usr/bin/env node

const {execSync} = require('child_process');

const mkdir = 'mkdir -p';
const combine = '&&';
const enter = 'cd';

const runMaken = dir => {
    try {
        execSync(`${mkdir} ${dir}`);
        execSync(`${enter} ${dir}/`);
    } catch (e) {
        throw new Error(e);
    }
};

const dir = process.argv[2];

if (!dir || dir.length < 1) {
    console.info('USAGE:');
    console.info('makendir <directory-name>\n');
    throw  new Error('Directory name not provided');
}

runMaken(dir);
