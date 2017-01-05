#!/usr/bin/env node

'use strict'

const exec = require('child_process').exec
const prompt = require('prompt')

const mkdir = 'mkdir'
const combine = '&&'
const enter = 'cd'

const runMaken = dir => {
    exec(`${mkdir} ${dir} ${combine} ${enter} ${dir}`, (err, stdout, stderr) => {
        if (err) {
            console.log(stderr)
        }
    })
}

prompt.start()
prompt.get(['directory'], (err, res) => {
    if (err) {
        console.log(err)
    }
    runMaken(res.directory)
})
