// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
  // window.document.getElementById('app').innerText = 'Hello,Mr s sf  sfd jeenify ' + content;
  window.document.getElementById("app").innerHTML =
    '<div class="buleFont"> hello hello test' + content + "</div>";
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;
