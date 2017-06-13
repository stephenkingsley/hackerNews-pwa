let isRunning = false;
/**
* @parma {func} callback - 执行的回调，一定要是promise
* @parma {object} options - 执行scroll事件的一些配置
* @parma {num} options.bottom - 当滑到距离底部的距离时执行回调
*/
export default (cb, options = {}) => {
  const loadMore = () => {
    window.requestAnimationFrame(() => {
      let bottom = getWindowHeight() / 3;
      if (options && Object.hasOwnProperty.call(options, 'bottom')) {
        bottom = options.bottom;
      }

      if (getScrollTop() + getWindowHeight() >= getScrollHeight() - bottom) {
        cb();
      }
    });
  };
  window.addEventListener('scroll', loadMore, false);
};

const getScrollTop = () => {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
};

const getScrollHeight = () => {
  let scrollHeight = 0;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ?
    bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
};

const getWindowHeight = () => {
  let windowHeight = 0;
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
};
