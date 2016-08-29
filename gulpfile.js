const gulp = require('gulp');
const cssmin    = require('gulp-cssmin'),
      htmlmin   = require('gulp-htmlmin'),
      uglify    = require('gulp-uglify'),
      imageResize = require('gulp-image-resize'),
      imagemin = require('gulp-imagemin');


var config = {
  "build": "dist",
  "images": {
    "source": "src/img/*",
    "target": "/img",
    "views": "images/"
  },
  "css": {
    "source": "src/css/*",
    "target": "/css"
  },
  "js": {
    "source": "src/js/*",
    "target": "/js"
  },
  "html": {
    "source": "src/*.html",
    "target": "/"
  },
  "views": {
    "images": {
      "source": "src/views/images/*",
      "target": "/views/images"
    },
    "html": {
      "source": "src/views/*.html",
      "target": "/views"
    },
    "css": {
      "source": "src/views/css/*",
      "target": "/views/css"
    },
    "js": {
      "source": "src/views/js/*",
      "target": "/views/js"
    }
  }
};


gulp.task('views-css', function () {
  return gulp.src(config.views.css.source)
  .pipe(cssmin())
  .pipe(gulp.dest(config.build + config.views.css.target))
});

gulp.task('views-html', function () {
  return gulp.src(config.views.html.source)
    .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(config.build + config.views.html.target))
})

gulp.task('views-js', function () {
  return gulp.src(config.views.js.source)
  .pipe(uglify())
  .pipe(gulp.dest(config.build + config.views.js.target))
})

gulp.task('views-img', function() {
  return gulp.src(config.views.images.source)
    .pipe(imageResize({
    width : 340,
    }))
  .pipe(gulp.dest(config.build + config.views.images.target));
});

gulp.task('css', function () {
  return gulp.src(config.css.source)
  .pipe(cssmin())
  .pipe(gulp.dest(config.build + config.css.target))
});

gulp.task('html', function () {
  return gulp.src(config.html.source)
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(config.build + config.html.target))
});

gulp.task('js', function () {
  return gulp.src(config.js.source)
  .pipe(uglify())
  .pipe(gulp.dest(config.build + config.js.target))
});

gulp.task('img', function() {
  return gulp.src(config.images.source)
  .pipe(imageResize({
    width : 340,
    }))
  .pipe(gulp.dest(config.build + config.images.target));
});


gulp.task('build', ['html','css','js','img','views-html','views-css','views-js','views-img']);

gulp.task('default', ['build']);