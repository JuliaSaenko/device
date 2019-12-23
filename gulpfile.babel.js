import gulp from 'gulp';
import del from 'del';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
//import posthtml from 'gulp-posthtml';
//import include from 'posthtml-include';
import csso from 'gulp-csso';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import concat from 'gulp-concat';
//import terser from 'gulp-terser';
import { uglify } from 'rollup-plugin-uglify';

const imagemin = require('gulp-imagemin');

const rollup = require('rollup');

const server = browserSync.create();

gulp.task('html', () => gulp
  .src('source/*.html')
  // .pipe(posthtml([
  //   include(),
  // ]))
  .pipe(gulp.dest('build')));

gulp.task('css', () => gulp.src('source/scss/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream()));

gulp.task('css-build', () => gulp.src('source/scss/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(csso())
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream()));

gulp.task('clean', () => del('build'));

gulp.task('copy', () => gulp.src([
  'source/fonts/**/*.{woff,woff2}',
  'source/img/**/*',
  '!source/img/sprite',
  '!source/img/sprite/*',
], {
  base: 'source',
})
  .pipe(gulp.dest('build')));

gulp.task('copy-build', () => gulp.src([
  'source/fonts/**/*.{woff,woff2}',
  'source/img/**/*.webp',
  'source/img/**/*',
  '!source/img/sprite',
  '!source/img/sprite/*',
], {
  base: 'source',
})
  .pipe(gulp.dest('build')));

gulp.task('images', () => gulp.src(['source/img/**/*.{png,jpg,svg}', '!source/img/sprite/*.svg'])
  .pipe(imagemin([
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.jpegtran({ progressive: true }),
    imagemin.svgo({
      plugins: [
        { removeViewBox: false },
      ],
    }),
  ]))
  .pipe(gulp.dest('build/img')));

gulp.task('sprite', () => gulp.src('source/img/sprite/*.svg')
  .pipe(svgstore({
    inlineSvg: true,
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img')));


// gulp.task('js-vendor-modules', () => rollup.rollup({
//   input: './source/js/vendor.js',
//   plugins: [
//     resolve({
//       mainFields: ['jsnext', 'main'],
//       browser: true,
//     }),
//     commonjs(),
//     babel(),
//   ],
// }).then(bundle => bundle.write({
//   file: './build/js/vendor.js',
//   format: 'iife',
//   name: 'vendor',
//   sourcemap: false,
// })));

// gulp.task('js-libs', () => gulp.src([
//     './source/js/vendor/libs/**/*.js',
//     './build/js/vendor.js'
//   ])
//     .pipe(concat('vendor.js'))
//     .pipe(gulp.dest('build/js'))
// );

// gulp.task('js-libs-build', () => gulp.src([
//     './source/js/vendor/libs/**/*.js',
//     './build/js/vendor.js'
//   ])
//     .pipe(concat('vendor.js'))
//     .pipe(terser())
//     .pipe(gulp.dest('build/js'))
// );

// Без uglify.
gulp.task('js', () => rollup.rollup({
  input: './source/js/app.js',
  plugins: [
    resolve({
      mainFields: ['jsnext', 'main'],
      browser: true,
    }),
    commonjs(),
    babel(),
  ],
}).then(bundle => bundle.write({
  file: './build/js/app.js',
  format: 'iife',
  name: 'main',
  sourcemap: true,
})));

// С uglify.
gulp.task('js-build', () => rollup.rollup({
  input: './source/js/app.js',
  plugins: [
    resolve({
      mainFields: ['jsnext', 'main'],
      browser: true,
    }),
    commonjs(),
    babel(),
    uglify(),
  ],
}).then(bundle => bundle.write({
  file: './build/js/app.js',
  format: 'iife',
  name: 'main',
  sourcemap: true,
})));

gulp.task('server', () => {
  server.init({
    server: 'build/',
  });

  gulp.watch(['source/scss/**/*.{scss,scss}', 'source/blocks/**/*.{scss,scss}'], gulp.series('css', 'refresh'));
  gulp.watch('source/img/sprite/*.svg', gulp.series('sprite', 'html', 'refresh'));
  gulp.watch('source/**/*.html', gulp.series('html', 'refresh'));
  gulp.watch(['source/img/*', 'source/img/*/**', '!source/img/sprite/*.svg'], gulp.series('copy', 'refresh'));
  gulp.watch(['source/js/**/*.js'], gulp.series('js', 'refresh'));
});

gulp.task('refresh', (done) => {
  server.reload();
  done();
});

gulp.task('build', gulp.series(
  'clean',
  //'js-vendor-modules',
  //'js-libs-build',
  'js-build',
  gulp.parallel(
    'copy-build',
    'images',
    'css-build',
    'html',
    'sprite',
  )
));

gulp.task('start', gulp.series(
  'clean',
  //js-vendor-modules',
  //'js-libs',
  'js',
  gulp.parallel(
    'copy',
    'css',
    'html',
    'sprite',
  ),
  'server',
));
