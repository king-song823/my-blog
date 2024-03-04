// docs/.vuepress/config.js

module.exports = {
  //   host: "0.0.0.0", // 生成网页地址（本地调试使用）
  //   port: "22333", // 生成网页端口（本地调试使用）
  title: "KingSong's Blog", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "脱离职业内卷,寻求第二曲线", // meta 中的描述文字，用于SEO
  heroImg: "/banner.png",
  base: "/MyBlogV/",
  dest: "dist",
  repo: "https://github.com/king-song823/MyBlogV1",
  repoLabel: "Github",
  head: [
    ["link", { rel: "icon", href: "/song.svg" }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ], //在移动端，搜索框在获得焦点时会放大
  ],
  theme: "reco", //选择主题‘reco’
  themeConfig: {
    type: "blog", //选择类型博客
    fullscreen: true,
    logo: "/song.svg",
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Categories", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tags", // 默认 “标签111”
      },
      socialLinks: [
        { icon: "reco-github", link: "https://github.com/king-song823" },
        {
          icon: "reco-bilibili",
          link: "https://space.bilibili.com/30538347?spm_id_from=333.999.0.0",
        },
        {
          icon: "reco-juejin",
          link: "https://juejin.cn/user/3153854371987773",
        },
        { icon: "reco-twitter", link: "https://twitter.com/KingSong0823" },
        { icon: "reco-wechat", link: "/AboutMe/wechat.html" },
        { icon: "reco-mail", link: "mailto:yueseduomehao@gmail.com" },
        {
          icon: "reco-douyin",
          link: "https://www.douyin.com/user/self",
        },
      ],
    },
    nav: [
      //导航栏设置
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
    ],
    // displayAllHeaders: true, // 默认值：false
    subSidebar: "auto",
    record: "蜀ICP备20005033号-2",
    recordLink: "https://beian.miit.gov.cn/",
    cyberSecurityRecord: "川公网安备 51110202000301号",
    cyberSecurityLink: "http://www.beian.gov.cn/",
    startYear: "2024", // 项目开始时间，只填写年份
    lastUpdated: "最后更新时间", // string | boolean
    author: "kingsong",
    authorAvatar: "/head.jpg", //作者头像
    // mode: "light", //默认显示白天模式
    mode: "auto", //默认显示白天模式
    smooth: "true", //平滑滚动
    // 评论设置
    valineConfig: {
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
    },

    // friendLink: [
    //   {
    //     title: "vuepress-theme-reco",
    //     desc: "A simple and beautiful vuepress Blog & Doc theme.",
    //     logo: "http://v1.vuepress-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: "http://v1.vuepress-reco.recoluan.com",
    //   },
    // ],
  },
  // markdown: {
  //   lineNumbers: true, //代码显示行号
  // }, // 搜索设置
  search: true,
  searchMaxSuggestions: 10, // 插件
  plugins: [
    ["flowchart"], // 支持流程图
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    // ["vuepress-plugin-code-copy", true], //一键复制代码插件
  ],
};
