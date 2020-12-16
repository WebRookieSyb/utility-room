module.exports = {
  title: "Utility Room",
  base: "/rooms/",
  locales: {
    "/": {
      title: "Utility Room",
      description: "Just utility room",
    },
  },
  themeConfig: {
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
                  children: ["mx","/sjyz",],
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
