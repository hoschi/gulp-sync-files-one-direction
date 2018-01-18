const filter = require('gulp-filter')
const watch = require('gulp-watch')
const print = require('gulp-print')
const through = require('through2')
const path = require('path')
const del = require('del')
const gulp = require('gulp')

const filterIsDeleted = filter((file) => file.event === 'unlink', {
    restore:true
})

function createSync ({ignoreInitial, inputPatterns, basePath, destPath}) {
    return watch(inputPatterns, {
            ignoreInitial
        })
        .pipe(filterIsDeleted)
        .pipe(print((filepath) => 'deleted ' + filepath))
        .pipe(through.obj((file, enc, done) => {
            let relative = path.relative(basePath, file.path)
            let destPathResolved = path.resolve(destPath, relative)
            del(destPathResolved, done)
        }))
        .pipe(filterIsDeleted.restore)
        .pipe(print((filepath) => 'syncing ' + filepath))
        .pipe(gulp.dest(destPath))
}

module.exports = createSync
