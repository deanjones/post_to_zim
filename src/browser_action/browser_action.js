//
//
function post_to_notebook(notebook) {
    console.log('post_to_notebook(' + notebook + ')');
    chrome.tabs.query({'active': true}, function(tabs) {
      url = tabs[0].url;
      var message;
      if (!notebook) {
        message = 'No Notebook specified';
      } else if (!url) {
        message = 'No URL available';
      } else {
        message = 'Posting ' + url + ' to notebook ' + notebook;
      }
      document.getElementById('content').textContent =  message;
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
