
// Ugly hack - see #2574 for more information
if (!(document.getElementById('b642733c-06a0-4f34-825a-63af2a49e857')) && !(document.getElementById('_anim_imgNone'))) {
  console.log("Creating DOM nodes dynamically for assumed nbconvert export. To generate clean HTML output set HV_DOC_HTML as an environment variable.")
  var htmlObject = document.createElement('div');
  htmlObject.innerHTML = `<div id='b642733c-06a0-4f34-825a-63af2a49e857' style='display: table; margin: 0 auto;'>
<div class="bk-root">
    <div class="bk-plotdiv" id="e6c241c1-ab16-4748-b94d-44b5330dba60"></div>
</div></div>`;
  var scriptTags = document.getElementsByTagName('script');
  var parentTag = scriptTags[scriptTags.length-1].parentNode;
  parentTag.append(htmlObject)
}
(function(root) {
  function embed_document(root) {
    
  var render_items = [{"docid":"bf09f324-61bf-48d5-a3be-5c69e6f614b7","elementid":"e6c241c1-ab16-4748-b94d-44b5330dba60","modelid":"b642733c-06a0-4f34-825a-63af2a49e857"}];
  root.Bokeh.embed.embed_items_notebook(docs_json, render_items);

  }
  if (root.Bokeh !== undefined) {
    embed_document(root);
  } else {
    var attempts = 0;
    var timer = setInterval(function(root) {
      if (root.Bokeh !== undefined) {
        embed_document(root);
        clearInterval(timer);
      }
      attempts++;
      if (attempts > 100) {
        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
        clearInterval(timer);
      }
    }, 10, root)
  }
})(window);