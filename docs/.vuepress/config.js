module.exports = {
  title: "Utility Room",
  base: "/rooms/",
  locales: {
    "/": {
      title: "Utility Room",
      description: "Just utility room"
    },
  },
  themeConfig: {
    locales: {
      "/": {
        sidebar: {
          "": [
            {
              title: "Open Source Project",
              children: [
                "/project",
              ]
            },
            {
              title: "API",
              children: ["/api"]
            }
          ]
        }
      },
    }
  }
};