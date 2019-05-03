module.exports = {
    "verbose": true,
    "rootDir": "./",
    "setupFilesAfterEnv": ["<rootDir>/jest.env.js"],
    "coverageDirectory": "dist/__coverage__",
    "coverageReporters": [
        "html",
    ],
    "testFileExtensions": [
        "js",
        "jsx",
        "sass",
    ],
    "moduleFileExtensions": [
        "js", 
        "jsx", 
        "json", 
        "sass",
    ],
    "moduleDirectories": [
        "node_modules",
    ],
    "modulePathIgnorePatterns": [
        "node_modules", 
        "dist",
    ],
    "modulePaths": [
        "src",
    ],
    "moduleNameMapper": {
        ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve('./src/__mocks__/fileMock'),
        ".*\\.(css|less|sass)$": require.resolve('./src/__mocks__/styleMock'),
    }
};