module.exports = {
    moduleDirectories: [
        "node_modules",
        "packages/common",
        "packages/app/src"
    ],
    collectCoverageFrom: [
        // TODO: Правильно ли
        "**/client/src/**",
        "**/server/src/**"
    ],
    preset: 'ts-jest'
}
