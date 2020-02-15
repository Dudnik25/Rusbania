import { src, dest, watch, parallel, series } from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import cleanDir from 'gulp-clean';
import uglify from 'gulp-uglify-es';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import rollup from 'gulp-better-rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'gulp-sass';
import normalize from 'node-normalize-scss';
import eslint from 'gulp-eslint';

const path = {
  scss: 'src/scss/index.scss',
  js: 'src/js/index.js',
  image: 'src/image/**/*.*',
  font: 'src/fonts/**/*.*',
  php: 'src/**/*.php',
  html: 'src/**/*.html',
  dest: {
    local: 'app/'
  }
};

browserSync.create();

function cleanDest(cb) {
  src(path.dest.local, {
    allowEmpty: true
  }).pipe(cleanDir());
  cb();
}

function image(cb) {
  src(path.image).pipe(dest(`${path.dest.local}image/`));
  cb();
}

function fonts(cb) {
  src(path.font).pipe(dest(`${path.dest.local}fonts/`));
  cb();
}

function css(cb) {
  src(path.scss)
    .pipe(
      sass({
        includePaths: normalize.includePaths
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(dest(`${path.dest.local}css`))
    .pipe(browserSync.stream());
  cb();
}

function js(cb) {
  src(path.js)
    .pipe(eslint())
    .pipe(
      rollup(
        {
          plugins: [
            resolve(),
            babel({
              babelrc: false,
              exclude: 'node_modules/**',
              runtimeHelpers: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    modules: false,
                    targets: {
                      browsers: ['last 2 versions', 'ie >= 11']
                    },
                    corejs: {
                      version: 3,
                      proposals: false
                    }
                  }
                ]
              ]
            }),
            commonjs()
          ]
        },
        'umd'
      )
    )
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest(`${path.dest.local}js`));
  cb();
}

function php(cb) {
  src(path.php).pipe(dest(path.dest.local));
  cb();
}

function html(cb) {
  src(path.html).pipe(dest(path.dest.local));
  cb();
}

function startWatch(cb) {
  browserSync.init({
    server: {
      baseDir: path.dest.local
    },
    //  proxy: 'http://localhost',
    open: false
  });
  watch('src/scss/**/*.scss', parallel(css)).on('change', browserSync.reload);
  watch('src/js/**/*.js', parallel(js)).on('change', browserSync.reload);
  watch('src/**/*.php', parallel(php)).on('change', browserSync.reload);
  watch('src/**/*.html', parallel(html)).on('change', browserSync.reload);
  cb();
}

export const clean = series(cleanDest);
export const build = series(cleanDest, parallel(html, php, css, js, image, fonts));
const dev = series(parallel(html, php, css, js), startWatch);

export default dev;
