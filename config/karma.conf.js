basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'src/public/javascripts/vendor/jquery-1.9.1.min.js',
    'src/public/javascripts/vendor/angular/angular.js',
    'src/public/javascripts/vendor/angular/angular-*.js',
    'test/lib/angular/angular-mocks.js',
    'src/public/javascripts/vendor/bootstrap.min.js',
    'src/public/javascripts/vendor/modernizr-*.min.js',
    'src/public/javascripts/vendor/ui-bootstrap-0.4.0.min.js',
    'src/public/javascripts/vendor/ui-bootstrap-tpls-0.4.0.min.js',
    'src/public/javascripts/**/*.js',
    'test/unit/**/*.js'
];

exclude = [
    'src/public/javascripts/vendor/ui-bootstrap-0.4.0.js',
    'src/public/javascripts/vendor/ui-bootstrap-tpls-0.4.0.js',
]

singleRun = true;

// for PhantomJS, see install instructions: http://phantomjs.org/download.html
// also see: http://codecuriosity.com/blog/2013/01/30/install-phantomjs-on-ubuntu/
browsers = ['PhantomJS'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite     : 'unit'
};
