// Saves options to chrome.storage
function save_options() {
  var confirm_before = document.getElementById('confirm_before').checked;
  var confirm_after = document.getElementById('confirm_after').checked;
  var gdrive_directory = document.getElementById('gdrive_directory').value;
  var default_notebook = document.getElementById('default_notebook').value;
  document.getElementById('status').textContent = 'Saving ...';

  chrome.storage.sync.set({
      'confirm_before': confirm_before,
      'confirm_after': confirm_after,
      'gdrive_directory': gdrive_directory,
      'default_notebook': default_notebook
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Set default values
  chrome.storage.sync.get({
    'confirm_before': true,
    'confirm_after': true,
    'gdrive_directory': 'Zim'
    'default_notebook': 'incoming'
  }, function(items) {
    if (!chrome.runtime.error) {
      document.getElementById('confirm_before').checked = items.confirm_before;
      document.getElementById('confirm_after').checked = items.confirm_after;
      document.getElementById('gdrive_directory').value = items.gdrive_directory;
      document.getElementById('default_notebook').value = items.default_notebook;
    }
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
