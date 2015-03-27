(function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://mdaines.github.io/viz.js/viz.js');
  script.onload = function() {
    [].forEach.call(document.querySelectorAll('script[type="text/viz"]'), function(s) {
      var code = s.innerText || s.textContent;
      var format = s.getAttribute('data-format') || 'svg';
      var engine = s.getAttribute('data-engine') || 'dot';
      var html = Viz(code, format, engine);
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      s.parentNode.replaceChild(wrapper, s);
    });
  };
  document.head.appendChild(script);
})(this);
