# CSS Tricks

## Use CSS To Work With Images

To achieve the text-on-image effects I showed you before, you can use CSS for your websites. Here is example CSS code for some of the effects. Please change it according to your needs.

Overlay the image
```css
.darken {

background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(YOUR IMAGE HERE);

}
```
[Example](http://jsfiddle.net/drpak8vy/1/)

Put text in a box
```css
.text-box {

background-color: rgba(0, 0, 0, 0.5);

color: #fff;

display: inline;

padding: 10px;

}
```
[Example](http://jsfiddle.net/qg83m36p/)

Floor fade
```css
.floor-fade {

background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ), url(YOUR IMAGE HERE);

}
```
[Example](http://jsfiddle.net/gRzPF/409/)