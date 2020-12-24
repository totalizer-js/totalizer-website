# Describe Animation

## Single Description

<ClientOnly>
  <Propertys/>
</ClientOnly>

CODE EXAMPLE

``` javascript
const t = new Totalizer();
t.add({
  el: document.getElementById("div"),
  props: {
    translateX: [0, 270],
  },
  delay: 500,
  endDelay: 500,
  duration: 1000,
  easing: "easeOutBounce",
});
```

## Multiple Description

<ClientOnly>
  <Propertys02/>
</ClientOnly>

CODE EXAMPLE

``` javascript
const t = new Totalizer();
const el = document.getElementById("div");
t.add({
  el,
  props: {
    translateX: [0, 270],
  },
  duration: 2000,
});

t.add({
  el,
  props: {
    scale: [1, 2],
  },
  delay:250,
  duration: 500,
});

t.add({
  el,
  props: {
    scale: [2, 1],
  },
  delay:750,
  duration: 500,
});

t.add({
  el,
  props: {
    translateY: [0, 200],
  },
  delay:1000,
  duration: 750,
  easing: "easeOutBounce",
});
```

## API



### el

Type : `DOM`,`SVG`



### props
Type : `JSON`


### delay

Type : `Number`



### endDelay

Type : `Number`


### duration

Type : `Number`


### easing

Type : `String`,`Function`


<ClientOnly>
  <Eases/>
</ClientOnly>

#### Default Easing

`linear`
#### Availabe Easings

`ease` + `[Mode]` + `[EaseName]`

Mode:
* In
* Out
* InOut
* OutIn

EaseName:

* Quad
* Cubic
* Quart
* Quint
* Sine
* Expo
* Circ
* Back
* Bounce

CODE EXAMPLE

``` JSON
{
  easing: 'easeInOutCirc'
}
```