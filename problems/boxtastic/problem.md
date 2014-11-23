Style the element with the ID "box" so that the total space occupied by the element is `200px` by `100px`. You **must** set values for CSS properties `width`, `height`, `padding`, `border` and `margin`. Also, style the box so the border is **dashed** and **red**.

* * *

HTML elements are represented as rectangular boxes. The **box model** describes the content of the space taken by an element.

You can use CSS to manipulate properties of the box model. The diagram below shows the names of the box model properties and where in the box they apply:

```
+ --------------------------------------- +
| margin                                  |
|   + ------------------------------- +   |
|   | border                          |   |
|   |   + ----------------------- +   |   |
|   |   | padding                 |   |   |
|   |   |   + --------------- +   |   |   |
|   |   |   |            ^    |   |   |   |
|   |   |   |            |    |   |   |   |
|   |   |   | <- width --+--> |   |   |   |
|   |   |   |            |    |   |   |   |
|   |   |   |          height |   |   |   |
|   |   |   |            |    |   |   |   |
|   |   |   |            v    |   |   |   |
|   |   |   + --------------- +   |   |   |
|   |   |                         |   |   |
|   |   + ----------------------- +   |   |
|   |                                 |   |
|   + ------------------------------- +   |
|                                         |
+ --------------------------------------- +
```

If you were to set `width: 10px`, `padding: 10px`, `border: 2px` and `margin: 20px` the **total width** occupied by the box would be `74px`.

See the [box model documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) for more info.

* * *

Verify your solution is correct by running: `stylist verify solution.css`
