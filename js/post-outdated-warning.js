// (function() {
//     let times = document.getElementsByTagName('time');
//     if (times.length === 0) { return; }
//     let posts = document.getElementsByClassName('post-body');
//     if (posts.length === 0) { return; }
  
//     let pubTime = new Date(times[0].dateTime);  /* 文章发布时间戳 */
//     let now = Date.now()  /* 当前时间戳 */
//     let interval = parseInt(now - pubTime)
//     /* 发布时间超过指定时间（毫秒） */
//     if (interval > 3600*24*365*1000){
//       let days = parseInt(interval / 86400000)
//       posts[0].insertAdjacentHTML('afterbegin', '<div class="note warning">' +
//       '<h5>文章时效性提示</h5>' + 
//       '<p>这是一篇发布于 ' + days + ' 天前的文章，部分信息可能已发生改变，请注意甄别。</p>' +
//       '</div>');

//     }

//   })();

(function() {
  const runScript = function() {
      let times = document.getElementsByTagName('time');
      if (times.length === 0) { return; }
      let posts = document.getElementsByClassName('post-body');
      if (posts.length === 0) { return; }
  
      let pubTime = new Date(times[0].dateTime);  /* 文章发布时间戳 */
      let now = Date.now()  /* 当前时间戳 */
      let interval = parseInt(now - pubTime)
      /* 发布时间超过指定时间（毫秒） */
      if (interval > 3600*24*365*1000){
        let days = parseInt(interval / 86400000)
        posts[0].insertAdjacentHTML('afterbegin', '<div class="note warning">' +
        '<h5>文章时效性提示</h5>' + 
        '<p>这是一篇发布于 ' + days + ' 天前的文章，部分信息可能已发生改变，请注意甄别。</p>' +
        '</div>');
      }
  }
  /* 判断是否启用了pjax */
  if (typeof $ !== 'undefined' && typeof (window.Pjax || $.pjax || $.support.pjax) !== 'undefined') {
      $(document).on('pjax:success', function() {
          runScript();
      })
  } else {
      runScript();
  }
})();
