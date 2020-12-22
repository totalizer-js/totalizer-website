# Staggering

Demo

<ClientOnly>
  <Staggering/>
</ClientOnly>

``` javascript
const t = new Totalizer();

const els = document.querySelectorAll("#ul li");
els.forEach((el, i) => {
  t.add({
    el: el,
    props: {
      scale: [0.5, 1],
      rotate: [0, 360],
      background: ["#ddd", "#08c"],
    },
    duration: 500,
    delay: (parseInt(i/5) + (i % 5)) * 200,
  });
});

t.loop().alternate().play();
```