const gulp = require('gulp');

const imagemin = require('gulp-imagemin');

const pngquant = require('imagemin-pngquant');

const mozjpeg = require('imagemin-mozjpeg');

function defaultTask(cb) {
  // place code for your default task here
  gulp.src('src/images/*')
  .pipe(imagemin([
    pngquant({quality: [0.5, 0.5]}),
    mozjpeg({quality: 50})
  ])) 
  .pipe(gulp.dest('dist/images2'))
  cb();
}

exports.default = defaultTask


/*.pipe(imagemin([
  imagemin.gifsicle({interlaced: true}),
  imagemin.mozjpeg({quality: 75, progressive: true}),
  imagemin.optipng({optimizationLevel: 5}),
  imagemin.svgo({
      plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
      ]
  })
]))*/