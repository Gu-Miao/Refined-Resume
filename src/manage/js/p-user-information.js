var $userInformationPanel = (function() {
  function show() {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append('<h1>$userInformationPanel</h1>');
  }

  return {show: show};
})();
