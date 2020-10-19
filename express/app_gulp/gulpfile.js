var gulp = require("gulp"),
  uglify = require("gulp-uglify");

gulp.task("taska", () => {
  return gulp.src(["./index.js"]).pipe(uglify()).pipe(gulp.dest("./dist"));
});

gulp.task("observe", () => {
  return gulp.watch("./index.js", gulp.series("taska"));
});
