const makeShadow = require('shadow-callbag').default;

const interval = period => (start, sink) => {
  if (start !== 0) return;
  let i = 0;
  const shadow = makeShadow('interval');
  const id = setInterval(() => {
    shadow(1, i);
    sink(1, i++);
  }, period);
  function talkback(t) {
    if (t === 2) clearInterval(id);
  }
  sink(0, talkback, shadow);
};

export default interval;
