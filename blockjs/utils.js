/** 屏蔽元素
 * @domArr dom数组  .class #id div均可
 */
function block(domArr) {
  domArr.forEach(dom => {
    const element = document.querySelectorAll(dom);
    if (element) {
      element.forEach((ele => {
        ele.style.display = "none";
      }));
    }
  });
}
