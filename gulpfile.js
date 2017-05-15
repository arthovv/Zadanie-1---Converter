var gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('default', function() {
	gulp.run('babel');

});


gulp.task('babel', () => {
    return gulp.src('src/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});
