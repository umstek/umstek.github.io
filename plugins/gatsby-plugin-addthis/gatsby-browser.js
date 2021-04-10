exports.onInitialClientRender = (_, options) => {
  var script = document.createElement("script");
  script.src = `https://s7.addthis.com/js/300/addthis_widget.js#pubid=${options.pubid}`;
  script.async = options.async || true;
  script.defer = options.defer || false;
  document.getElementsByTagName("body")[0].appendChild(script);
};
