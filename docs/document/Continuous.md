# Continuous

Demo

<ClientOnly>
  <Continuous/>
</ClientOnly>

``` javascript
const t = new Totalizer();
const el = document.getElementById("div");

t.add({
  el,
  props: {
    translateX: [0, 280],
  },
  duration: 500,
  delay: 300,
});
t.add({
  el,
  props: {
    translateY: [0, 150],
  },
  duration: 500,
  delay: t.totalTime,
  easing: 'easeOutBounce'
});
t.add({
  el,
  props: {
    translateX: [280, 0],
  },
  duration: 500,
  delay: t.totalTime
});
t.add({
  el,
  props: {
    translateY: [150, 0],
  },
  duration: 500,
  delay: t.totalTime
});

// 设置为循环播放
t.loop().play();
```