// 暴露给外部的接口

let list = [{
  name: '1'
},
{
  name: '2'
},
{
  name: '3'
},
{
  name: '4'
},
{
  name: '5'
},
{
  name: '6'
},
{
  name: '7'
},
{
  name: '8'
},
{
  name: '9'
},
{
  name: '10'
},
{
  name: '11'
},
{
  name: '12'
},
{
  name: '13'
}
]

export default list;

module.exports = {
  getTestData: getTestData,
  cells: getTestData(),
  mj: ['ma', 'jian'],
  personalInfo: getPersonalInfoData(),
  friendList: getFriendListData(),
}

function getFriendListData() {
  var list;
  list = [{
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '张三',
      activeTime: 1546999200,
      addState: '通过',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
    {
      avatarUrl: 'http://p1.4499.cn/touxiang/uploadpic/2013-10/13/2013101310332281222.jpg',
      nikeName: '李四',
      activeTime: 1546912800,
      addState: '超时',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
    {
      avatarUrl: 'http://img1.imgtn.bdimg.com/it/u=3370442833,4268965594&fm=26&gp=0.jpg',
      nikeName: '王五',
      activeTime: 1544644800,
      addState: '申请中',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
    {
      avatarUrl: 'https://img2.woyaogexing.com/2019/01/03/e5d288032e7a4ea2a7522a8a888c327d!400x400.jpeg',
      nikeName: '赵六',
      activeTime: 1541188800,
      addState: '通过',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
    {
      avatarUrl: 'http://p1.4499.cn/touxiang/uploadpic/2013-10/13/2013101310332281222.jpg',
      nikeName: '宋七',
      activeTime: 1532829600,
      addState: '申请中',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
    {
      avatarUrl: 'https://img2.woyaogexing.com/2019/01/03/e5d288032e7a4ea2a7522a8a888c327d!400x400.jpeg',
      nikeName: '杜八',
      activeTime: 1509516000,
      addState: '通过',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
    {
      avatarUrl: 'https://img2.woyaogexing.com/2019/01/03/ed7fdb2b03e54eda98c3801bb799edd2!400x400.jpeg',
      nikeName: '马九',
      activeTime: 1505887200,
      addState: '通过',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
    {
      avatarUrl: 'http://img1.imgtn.bdimg.com/it/u=3370442833,4268965594&fm=26&gp=0.jpg',
      nikeName: '老幺',
      activeTime: 1494396000,
      addState: '申请中',
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
    },
  ]
  return list;
}

function getPersonalInfoData() {
  var info;
  info = {
    avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
    catagorys: [{
        catagory: '图片',
        tags: ['自拍', '写真', '男朋友视角', '艺术照', '鬼脸', '美食', 'cos', '美景']
      },
      {
        catagory: '文字',
        tags: ['诗词', '心情签名', '座右铭', '感慨', '立Flag', '昵称', '吐糟', '口头禅', '谜语']
      },
      {
        catagory: '电影',
        tags: ['无双', '指环王3', '星际穿越', '复仇者联盟3', '英雄', '影', '马达机司机', '钢铁侠', '超人']
      },
      {
        catagory: '书籍',
        tags: ['激荡三十年', '安徒生童话', '书评', '节选', '书签', '人类群星闪耀时', '老人与海', '作者', '莫言']
      },
      {
        catagory: '运动',
        tags: ['篮球', '乒乓球', '羽毛球', '足球', '瑜伽', '运动技巧', '健身房', '打卡', '游泳']
      },
      {
        catagory: '游戏',
        tags: ['LOL', '吃鸡', '澄海3C', '拳皇2000', '红色警戒', 'CS', 'CF', '植物大战僵尸', '秘籍']
      },
      {
        catagory: '歌曲',
        tags: ['夜空中最闪亮的星星', '歌迷会', '张韶涵', '寂寞沙洲冷', '专辑', '演唱会', '鸟巢']
      },
    ],
  }
  return info;
}

// 私有方法
function getTestData() {
  var cells;
  cells = [{
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '张三',
      creatTime: 1546999200,
      category: '图片',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试正常，ios会出现拖动图片页面也跟着下滑的尴尬情况。查文档下拉刷新配置默认是关闭的，后经查找文档发现在本页面page.json 配置项可通过刷新配置默认是关闭的，后经查找文档发现在本页面page.json刷新配置默认是关闭的，后经查找文档发现在本页面page.json刷新配置默认是关闭的，后经查找文档发现在本页面page.json刷新配置默认是关闭的，后经',
      pictures: [
        'https://cdn.duitang.com/uploads/item/201512/13/20151213165428_iKvBU.thumb.700_0.jpeg',
        'https://img4.duitang.com/uploads/item/201603/30/20160330190522_zf5sK.thumb.700_0.jpeg',
        'http://www.touxiang.cn/uploads/20130204/04-081928_459.jpg',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
    {
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '李四',
      creatTime: 1546912800,
      category: '旅游',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试',
      pictures: [
        'https://www.easyicon.net/api/resizeApi.php?id=1223561&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223552&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223559&size=128',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
    {
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '俄罗斯',
      creatTime: 1544644800,
      category: '国家',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试正常，ios会出现拖动图片页面也跟着下滑的尴尬情况。查文档下拉刷新配置默认是关闭的，后经查找文档发现在本页面page.json 配置项可通过刷新',
      pictures: [
        'https://www.easyicon.net/api/resizeApi.php?id=1223561&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223552&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223559&size=128',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
    {
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '俄罗斯',
      creatTime: 1541188800,
      category: '国家',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试正常，ios会出现拖动图片页面也跟着下滑的尴尬情况。查文档下拉刷新配置默认是关闭的，后经查找文档发现在本页面page.json 配置项可通过刷新',
      pictures: [
        'https://www.easyicon.net/api/resizeApi.php?id=1223561&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223552&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223559&size=128',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
    {
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '俄罗斯',
      creatTime: 1532829600,
      category: '国家',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试正常，ios会出现拖动图片页面也跟着下滑的尴尬情况。查文档下拉刷新配置默认是关闭的，后经查找文档发现在本页面page.json 配置项可通过刷新',
      pictures: [
        'https://www.easyicon.net/api/resizeApi.php?id=1223561&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223552&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223559&size=128',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
    {
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '俄罗斯',
      creatTime: 1509516000,
      category: '国家',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试正常，ios会出现拖动图片页面也跟着下滑的尴尬情况。查文档下拉刷新配置默认是关闭的，后经查找文档发现在本页面page.json 配置项可通过刷新',
      pictures: [
        'https://www.easyicon.net/api/resizeApi.php?id=1223561&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223552&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223559&size=128',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
    {
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '俄罗斯',
      creatTime: 1505887200,
      category: '国家',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试正常，ios会出现拖动图片页面也跟着下滑的尴尬情况。查文档下拉刷新配置默认是关闭的，后经查找文档发现在本页面page.json 配置项可通过刷新',
      pictures: [
        'https://www.easyicon.net/api/resizeApi.php?id=1223561&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223552&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223559&size=128',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
    {
      avatarUrl: 'http://pic.9ht.com/up/2018-8/2018082016513659505.jpg',
      nikeName: '李四',
      creatTime: 1494396000,
      category: '旅游',
      text: '项目需要做了一个图片拖动指定组件上删除，和排序的功能android测试',
      pictures: [
        'https://www.easyicon.net/api/resizeApi.php?id=1223561&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223552&size=128',
        'https://www.easyicon.net/api/resizeApi.php?id=1223559&size=128',
      ],
      tags: [
        '自拍', '素颜', '假装有数据', '这里有一个tag',
      ],
      scanCount: '200',
      commentCount: '100',
      likeCount: '50',
    },
  ]
  return cells;
}