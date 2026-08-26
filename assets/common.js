// 인공지능 수학 학습 도구 - 공통 헤더/푸터 삽입 스크립트
window.AIMath = (function () {
  function header(opts) {
    opts = opts || {};
    var home = opts.home || "index.html";
    var el = document.getElementById("site-header");
    if (!el) return;
    el.outerHTML =
      '<header class="site-header">' +
      '<a class="brand" href="' + home + '">인공지능 수학 학습 도구</a>' +
      '<a class="home-link" href="' + home + '">전체 목차로</a>' +
      "</header>";
  }

  function footer() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.outerHTML =
      '<footer class="site-footer">인공지능 수학 학습 도구 · 수업 보조 자료</footer>';
  }

  return { header: header, footer: footer };
})();
