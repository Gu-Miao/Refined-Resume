$(function() {
  window.onhashchange = function() {
    if(location.hash === '#/logout') {
      $login.show();
    } else if(location.hash === '#/index') {
      $(app.config.appContainer).html('');
      $header.show({
        'title': app.config.headerTitle,
        'logo': app.config.headerLogo
      });
      $menu.show();
      $footer.show();
      $stage.show();
    } else {
      $stage.load(location.hash);
    }
  };

  window.onbeforeunload = function() {
    window.sessionStorage.setItem("m_show", window.location.hash);
  }

  window.onload = function() {
    console.log(window.sessionStorage["m_show"]);
    if(!window.sessionStorage["m_show"]) {
      $login.show();
    } else {
      window.location.hash = window.sessionStorage["m_show"];
        if(window.sessionStorage["m_show"] === '#/logout') {
          $login.show();
        } else if(window.sessionStorage["m_show"] === '#/index') {
          $(app.config.appContainer).html('');
          $header.show({
            'title': app.config.headerTitle,
            'logo': app.config.headerLogo
          });
          $menu.show();
          $footer.show();
          $stage.show();
        } else {
          $(app.config.appContainer).html('');
          $header.show({
            'title': app.config.headerTitle,
            'logo': app.config.headerLogo
          });
          $menu.show();
          $footer.show();
          $stage.show();
          $stage.load(window.sessionStorage["m_show"]);
        }
    }
  }
});


