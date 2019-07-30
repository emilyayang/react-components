//react checks the virtual dom and updates the actual dom if needed. reacts to changes that a user is doing

// var GroceryList = props => {
//   //why now curly bracket not ()??
//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = event => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <div>
//       <h2>My Grocery List</h2>
//       <ul>
//         {props.items.map(item => (
//           <li onClick={onListItemClick}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ReactDOM.render(
//   <GroceryList items={['Eggs', 'Milk', 'Pasta', 'Apples']} />,
//   document.getElementById('app')
// );

//////////////
// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props); //have to do super first before this.state
    this.state = {
      hovering: false
    };
  }
  onListItemHoverEnter() {
    //define a method to handle mouse entering item
    this.setState({
      hovering: true
    });
  }
  onListItemHoverLeave() {
    //define a method to handle mouse exiting item
    this.setState({
      hovering: false
    });
  }
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    //what is being rendered
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };
    return (
      // this.props since referring to instance created
      <li
        style={style}
        onMouseLeave={this.onListItemHoverLeave.bind(this)} //so we dont lose context
        onMouseEnter={this.onListItemHoverEnter.bind(this)}
      >
        {this.props.product}
      </li>
    );
  }
}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component! Grocery list component
var GroceryList = props => (
  <ul>
    {props.items.map(item => (
      <GroceryListItem product={item} />
    ))}
  </ul>
);
ReactDOM.render(
  <GroceryList items={['Eggs', 'Milk', 'Pasta', 'Apples']} />, //items are props
  document.getElementById('app')
);
