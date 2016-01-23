//
//
function post_to_notebook(notebook) {
    console.log('post_to_notebook(' + notebook + ')');
    chrome.tabs.query({'active': true}, function(tabs) {
	url = tabs[0].url;
	document.getElementById('content').textContent = 'Posting ' + url + ' to notebook ' + notebook ;
    });
}

//
//
function get_options() {
    console.log('get_options');
    chrome.storage.sync.get('default_notebook', function(notebook) {
	post_to_notebook(notebook)
  }); 
}
document.addEventListener('DOMContentLoaded', get_options);

