const { src, dest, series } = require('gulp');
const del = require('del');

function clean() {
    return del([ 'asset/vendor', 'asset/vendor/**' ], { force: true });
}

function build() {
    return src([
            'node_modules/pdfjs-dist/*(build||web||cmaps)/**',
            'node_modules/pdfjs-dist/LICENSE' ])
        .pipe(dest('asset/vendor/pdf.js/'));
}

exports.clean = clean;
exports.default = series(clean, build);