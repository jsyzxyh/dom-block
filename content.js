function block() {
  const domArr = [  '#aside-ad',
    '[id^="mediago-tb-frs-list"]',
    '[data-field^="{}"]',
    '[id^="mediago-tb-pb-list"]',
    '[ad-dom-img^="true"]',
    '.hover_btn',
    '.EC_result',
    '.j_click_stats',
    '.shield-agent-tb'
    
  ];
  domArr.forEach(dom => {
    const element = document.querySelectorAll(dom);
    console.log(element);
    if (element) {
      element.forEach((ele => {
        ele.style.display = "none";
      }));
    }
  });
}
block();
window.onload = function() {
  block();
}
