
function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
}

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.ready === "ready") {
    if (confirm('Do you want to save capture of this screen?')) {
      sendResponse({ download: "download" });
    } else {
      sendResponse({ back: "back" });
    }
  }
});

let screenShot = document.getElementById('screenShot');
if (screenShot) {
  screenShot.onclick = function (element) {
    chrome.runtime.sendMessage({ message: "screenShot" });
  }
}

let screenRecording = document.getElementById('screenRecording');
if (screenRecording) {
  screenRecording.onclick = function (element) {
    chrome.runtime.sendMessage({ message: "screenRecording" });
  }
}
