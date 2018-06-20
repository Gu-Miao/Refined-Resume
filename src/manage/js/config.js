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
  'url': 'http://localhost:8000'
  // 'headerLogo': 'url()',
};

/* menuData 是左侧菜单栏数据，
 *   菜单栏只支持二级菜单
 */
app.menuData = [
  {
    'title': '系统管理',
    'icon': 'icon-mendianguanli',
    'items': [
      {
        'title': '概览',
        'url': '#/system-summary'
      },
      {
        'title': '访问日志',
        'url': '#/system-log'
      },
      {
        'title': '模板管理',
        'url': '#/template-manage'
      }
    ]
  },
  {
    'title': '用户管理',
    'icon': 'icon-mendianguanli',
    'items': [
      {
        'title': '用户信息',
        'url': '#/user-information'
      },
      {
        'title': '用户详情',
        'url': '#/user-details'
      }
    ]
  },
  {
    'title': '管理员管理',
    'icon': 'icon-mendianguanli',
    'items': [
      {
        'title': '管理员帐号',
        'url': '#/manage-number'
      },
      {
        'title': '修改密码',
        'url': '#/change-password'
      }
    ]
  },
];

