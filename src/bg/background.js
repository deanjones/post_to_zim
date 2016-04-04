// Listen for messages from the content page
chrome.runtime.onMessage.addListener(
  function(request, sender) {
    active_url = request.url
    active_notebook = request.notebook
    console.log("active_url:" + active_url + ", active_notebook:" + active_notebook
    );
  }
);
