const alias = (prefix) => ({
  "@domain": `${prefix}/domain`,
  "@application": `${prefix}/application`,
  "@infrastructure": `${prefix}/infrastructure`,
  "@ui": `${prefix}/ui`,
});

const resolvedJestAliases = Object.fromEntries(
  Object.entries(alias("<rootDir>/src")).map(([key, value]) => [
    `^${key}/(.*)$`,
    `${value}/$1`,
  ])
);

module.exports = {
  webpack: {
    alias: alias("src"),
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: resolvedJestAliases,
    },
  },
};
