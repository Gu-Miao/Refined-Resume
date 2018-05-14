var app = {};

/*
 * appName 暂时没用
 *
 * headerTitle 如果是汉字最多是 8 个汉字，
 *   如果是英文字母或者英文和中文混合，
 *   还没有测试多少个合适
 * 
 * headerLogo 图片是 40 * 40 的图片
 *
 */

app.config = {
  'appName': '管理后台',
  'appContainer': '#admin-app',
  'panelContainer': '.admin-app-stage',
  'headerTitle': 'R.R.管理后台',
  // 'headerLogo': 'url()',
};

/* menuData 是左侧菜单栏数据，
 *   菜单栏只支持二级菜单
 */
app.menuData = [
  {
    'title': '门店管理',
    'icon': 'icon-mendianguanli',
    'items': [
      {
        'title': '门店列表',
        'url': '#/store-list'
      }
    ]
  },
];

