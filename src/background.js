var data = {
    url: '',
};

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background!')

  console.log('background.js: url=', request.url);

  // data.url = request.url;
  // console.log('Url is: ', request.url);

  // if (request.action == "getSource") {8
  //   console.log(request.source);
  // }
})

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log('Url is: ', request.url);
// });
