module.exports = {
  title: "Utility Room",
  base: "/utility/",
  locales: {
    "/": {
      title: "Utility Room",
      description: "Just utility room",
    },
  },
  themeConfig: {
    repo: "webrookiesyb/utility-room",
    locales: {
      "/": {
        sidebar: {
          "": [
            // {
            //   title: "框架和库",
            //   children: [
            //     "/project",
            //   ]
            // },
            // {
            //   title: "模块包",
            //   children: ["/api"]
            // },
            // {
            //   title: "API",
            //   children: ["/api", "/project"]
            // },
            {
              title: "设计模式",
              children: [
                {
                  title: "基本知识",
                  children: ["/mx","/sjyz","/jsyz"],
                },
                '/yxms'
              ],
            },
          ],
        },
      },
    },
  },
};
