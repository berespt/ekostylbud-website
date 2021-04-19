module.exports = {
  siteUrl: 'https://ekostylbud.pl',
  generateRobotsTxt: true,
  priority: 0.5,
  exclude: ['/admin'],
  transform: async (config, path) => {
    if ('/' === path) {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: 1,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
