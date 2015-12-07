var bowerJson = require('./bower.json'),
  wiredep = require('wiredep'),
  _ = require('lodash');

module.exports = function () {

  var bowerFiles = {
    dev: wiredep({devDependencies: true}).js,
    depends: wiredep().js
  };

  var projectRoot = process.env.PWD = process.cwd(),
    srcDir = 'src/',
    assetDir = srcDir.concat('assets/'),
    imageDir = assetDir.concat('images/'),
    appleIconDir = assetDir.concat('apple-touch-icon/'),
    stylesDir = srcDir.concat('styles/'),
    scriptsDir = srcDir.concat('scripts/'),
    jsDir = scriptsDir.concat('js/'),
    phpDir = scriptsDir.concat('php/'),
    distDir = 'dist/',
    libDir = 'lib/',
    jsSources = [
      jsDir.concat('**/*.js'),
      jsDir.concat('*.js')
    ],
    templateSources = [
      jsDir.concat('*-template.html'),
      jsDir.concat('**/*-template.html')
    ];

  var config = {
    packageJson: ['./package.json', './bower.json'],
    projectRoot: projectRoot,
    filesets: {
      bowerFiles: bowerFiles,
      projectJS: [
        'gulpfile.js',
        libDir.concat('*.js'),
        libDir.concat('**/*.js')
      ],
      lessSources: [stylesDir.concat('codec-detect-website.less')],
      jsSources: jsSources,
      phpSources: [phpDir.concat('email-details.php')],
      images: [
        imageDir.concat('*.png'),
        imageDir.concat('**/*.png'),
        imageDir.concat('*.gif'),
        imageDir.concat('**/*.gif'),
        imageDir.concat('*.jpeg'),
        imageDir.concat('**/*.jpeg')
      ],
      appleTouchIcons: [
        appleIconDir.concat('**/*.png')
      ],
      html: [
        srcDir.concat('index.html')
      ],
      templateSources: templateSources
    },
    paths: {
      distDir: distDir,
      assetsDir: distDir.concat('assets/'),
      imagesDir: distDir.concat('assets/').concat('images/'),
      stylesDir: distDir.concat('assets/').concat('styles/'),
      scriptsDir: distDir.concat('scripts/'),
      jsDir: distDir.concat('scripts/').concat('js/'),
      vendorsDir: distDir.concat('scripts/').concat('vendors/'),
      phpDir: distDir.concat('scripts/').concat('php/')
    },
    bower: {
      json: bowerJson,
      directory: 'bower_components/',
      ignorePath: '',
      exclude: []
    },
    templateCache: {
      file: 'codec-detect-templates.js',
      opts: {
        module: 'com.codecdetect.Templates',
        root: jsDir,
        standalone: true
      }
    },
    server: {
      HOST: 'local.codec-detect.com',
      PORT: 6400
    },
    watch: {
      index: srcDir.concat('index.html'),
      sources: jsSources,
      templates: templateSources
    }
  };

  return config;

};
