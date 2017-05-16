# gulp-sync-files-one-direction

Syncs files from src to dest where only changed/added/deleted files are processed.

## Configuration

* basePath: base path of `inputPatterns`, e.g. /home/user/repo/src
* destPath: destination, e.g. /home/user/repo/compiled
* ignoreInitial: copy all files on first run: true|false
* inputPatterns: files to work/watch, e.g. all SCSS files /home/user/repo/src/**/*.scss

This keeps the SCSS files in your `src` dir with the ones in `compiled` in sync.
