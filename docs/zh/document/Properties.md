# 实例属性


``` Javascript
const t = new Totalizer();

t.add({
    ...
    delay: 200,
    duration: 1000,
})

t.reverse();
t.play();

console.log(t.isReverse); // true
console.log(t.totalTime); // 1200
```

|Properties|Des|
|--|--|
|totalTime|-|
|currentTime|-|
|isReverse|-|
|isAlternate|-|
|isPlaying|-|
|loopTimes|-|