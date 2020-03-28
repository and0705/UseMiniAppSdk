const fs = require('fs');

const depMap = {};
const rnDepMap = {};

const command = process.argv[2];
const platform = process.argv[process.argv.indexOf('--platform') + 1];
const buildType = process.env.DEV ? 'debug' : 'release';

const outputDirRelease = {
  ios: `${process.env.CONFIGURATION_BUILD_DIR}/${process.env.UNLOCALIZED_RESOURCES_FOLDER_PATH}/`,
  android: 'android/app/build/generated/assets/react/release/',
};
const outputDir = buildType === 'debug' ? '.bundle/' : outputDirRelease[platform];
const outputFileName =
  buildType === 'debug' ? `ReactNative-${platform}.bundle.json` : 'ReactNative.bundle.json';

const getModuleName = absolutePath => {
  return absolutePath.replace(`${__dirname}/`, '');
};

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  ...(command === 'bundle' && {
    serializer: {
      createModuleIdFactory: () => path => {
        const moduleName = getModuleName(path);
        if (!depMap[moduleName]) {
          depMap[moduleName] = {
            moduleName,
            id: Object.keys(depMap).length,
          };
        }
        return depMap[moduleName].id;
      },
      processModuleFilter: m => {
        const moduleName = getModuleName(m.path);
        if (depMap[moduleName] && !depMap[moduleName].code) {
          const dependencies = [];
          m.dependencies.forEach(mm => {
            dependencies.push(getModuleName(mm.absolutePath));
          });
          depMap[moduleName].dependencies = dependencies;
          depMap[moduleName].code = m.output[0].data.code;
          if (Object.values(depMap).filter(mm => !mm.dependencies).length === 0) {
            buildReactNativeDepMap(
              'node_modules/react-native/Libraries/react-native/react-native-implementation.js',
            );
            if (!fs.existsSync(outputDir)) {
              fs.mkdirSync(outputDir);
            }
            fs.writeFileSync(`${outputDir}${outputFileName}`, JSON.stringify(rnDepMap));
          }
        }
        return true;
      },
    },
  }),
};

const buildReactNativeDepMap = moduleName => {
  if (!rnDepMap[moduleName]) {
    rnDepMap[moduleName] = {
      id: Object.keys(rnDepMap).length,
      moduleName,
      dependencies: depMap[moduleName].dependencies,
      code: depMap[moduleName].code,
    };
    depMap[moduleName].dependencies.forEach(d => {
      buildReactNativeDepMap(d);
    });
  }
};
