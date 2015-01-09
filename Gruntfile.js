module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* 数据分析系统的皮肤 <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            'global': {
                files: [
                    {
                        src: 'assets/global/global.js',
                        dest: 'dists/global/global.min.js'
                    },
                ]
            }
        },
        watch: {
            'global-css': {
                files: ['assets/global/*.scss'],
                tasks: ['compress-global-css']
            },
            'global-js': {
                files: ['assets/global/*.js'],
                tasks: ['compress-global-js']
            }
        },
        sass: {
            'global': {
                files: [
                    {
                        src: 'assets/global/global.scss',
                        dest: 'assets/global/global.css'
                    }
                ]
            }
        },
        cssmin: {
            'global': {
                files: [
                    {
                        src: 'assets/global/global.css',
                        dest: 'dists/global/global.min.css'
                    }
                ]
            }
        }
    });

    // 加载 uglify 压缩 js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 加载 cssmin 压缩 css
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 加载 replace 文件内容替换
    grunt.loadNpmTasks('grunt-text-replace');
    // 加载 compress 压缩文件
    grunt.loadNpmTasks('grunt-contrib-compress');
    // 加载 sass css预处理器
    grunt.loadNpmTasks('grunt-contrib-sass');
    // 加载 watch 自动执行任务
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 注册事件
    grunt.registerTask('compress-global-css', ['sass:global', 'cssmin:global']);
    grunt.registerTask('compress-global-js', ['uglify:global']);
};
