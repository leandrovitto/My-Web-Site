/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://leandrovitto.com",
    generateRobotsTxt: true,
    transform: async (config, path) => {
        
        // custom function to remove the /it/ from Italian links
        let newPath = path;
        /* if (path[1] === "i" && path[2] === "t") {
            newPath = path.slice(3, path.length);
        } */

        return {
            loc: newPath, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        };
    }
};
