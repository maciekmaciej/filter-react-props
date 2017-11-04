# filter-react-props ⚛️✔️
Filter allowed React & DOM props to avoid warnings and unnecessary attributes in HTML output.

## Installation

```
yarn add filter-react-props

or

npm install --save filter-react-props
```

## Usage

```jsx
import filterReactProps from 'filter-react-props'

or

const filterReactProps = require('filter-react-props')
```

## Use case
Consider this style component:

```jsx
const Button = props => (
  <button
    style={{ color: props.color }}
    {...props}
  />
)

<Button color="green">My Button</Button>
```

Button will render with unnecessary `color` attribute.

```html
<button color="green" style="color: green;">My Button</button>
```

It can be avoided by destructuring props object:
```jsx
const Button = ({ color, ...props }) => (
  <button
    style={{ color }}
    {...props} // Props without color
  />
)
```


But you can't apply this solution when you don't know what props will be passed. This is use case for this package:

```jsx
import filterReactProps from 'filter-react-props'

const Button = props => (
  <button
    style={getStylesFromProps(props)}
    {...filterReactProps(props)}
  />
)

<Button fontSize={24} color="green">My Button</Button>
```

## Full API

```js
import
// Get new object with allowd React & DOM props.
filterReactProps,
{
  // Array of allowed React & DOM props.
  // List borrowed from `react-emotion` package.
  allowedProps,

  // Regular expression for checkig if given string
  // is allowed React or DOM prop.
  // Necessary for checking data-* and aria-* attributes.
  allowedPropsRegExp,

  // Check if given prop is allowed React or DOM prop.
  isPropAllowed
} from 'filter-react-props'
```

## Used in

[📐 spaced-components](https://github.com/asistapl/spaced-components)
