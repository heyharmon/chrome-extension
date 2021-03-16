console.log('Hello from the NEW content/content script!');

// chrome.runtime.sendMessage({
//     url: document.URL
// });

browser.runtime.sendMessage({
    url: document.URL
});

// window.totalTvCount = 2;
// localStorage.setItem('totalTvCount', '12');
// window.localStorage.setItem('totalTvCount', '12');

// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
// });

/**
   * lets create the style attribute
   * by building up an object
   * then using join to combine it
   */
  let node = document.createElement('div');
  let nodeStyleProperties = {
    'background-color': '#000',
    height: '25px',
    left: '5px',
    opacity: 0.5,
    'pointer-events': 'none',
    position: 'fixed',
    top: '5px',
    width: '25px',
    'z-index': '999999',
  };
  let nodeStyle = Object.entries(nodeStyleProperties)
    .map(([key, value]) => {
      return `${key}: ${value}`;
    })
    .join('; ');

  /**
   * apply the style to the node
   * and a class flag (doesn't do anything)
   */
  node.setAttribute('style', nodeStyle);
  node.setAttribute('class', 'chrome-extension-environment-flag');

  /**
   * append the node to the document
   */
  document.body.appendChild(node);
