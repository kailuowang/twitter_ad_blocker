// Saves options to chrome.storage
function saveOptions() {
  const switchToFollowing = document.getElementById('switchToFollowing').checked;
  const removePeopleToFollow = document.getElementById('removePeopleToFollow').checked;
  
  chrome.storage.sync.set(
    { 
      switchToFollowing: switchToFollowing,
      removePeopleToFollow: removePeopleToFollow
    }, 
    function() {
      // Update status to let user know options were saved
      const status = document.getElementById('status');
      status.style.opacity = '1';
      setTimeout(function() {
        status.style.opacity = '0';
      }, 2000);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get(
    {
      switchToFollowing: true,  // default to true
      removePeopleToFollow: false  // default to false
    },
    function(items) {
      document.getElementById('switchToFollowing').checked = items.switchToFollowing;
      document.getElementById('removePeopleToFollow').checked = items.removePeopleToFollow;
    }
  );
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);