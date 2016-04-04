//
//
function post_to_notebook(active_notebook) {
    console.log('post_to_notebook(' + active_notebook + ')');
    chrome.tabs.query({'active': true}, function(tabs) {
      active_url = tabs[0].url;
      var message;
      if (!active_notebook) {
        message = 'No Notebook specified';
      } else if (!active_url) {
        message = 'No URL available';
      } else {
        message = 'Posting ' + active_url + ' to notebook ' + active_notebook;
      }
      document.getElementById('content').textContent =  message;
      // send a message to the background page
      chrome.runtime.sendMessage({url: active_url, notebook: active_notebook});
    });
}

//
//
function get_options() {
    console.log('get_options');
    chrome.storage.sync.get('default_notebook', function(result) {
      post_to_notebook(result.default_notebook);
    });
}

document.addEventListener('DOMContentLoaded', get_options);
