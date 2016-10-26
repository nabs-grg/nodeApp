var React = require('react');
var Head = require('./head.jsx');

var Index = React.createClass({
  render() {

      return (
        <html>
        <title>{this.props.title}</title>
        <Head />
        <body className='bg'>
        <h1>Saved Jokes</h1>

  {this.props.jokes.map(function(item,i){
console.log(item.id)
    return (
          <form action={'/delete'+ '/'+item.id} method="post">
            <ul>
          <li key={i}>{item.joke.toString()}</li>

          </ul>
            <input type="hidden" name='_method' value="delete" />
            <button className="btn btn-primary btn-lg" type="submit" >Delete</button>
          </form>
           );
  })}
      <button type="button" className="btn btn-primary btn-lg "><a className='aa' href='/'>GO Back</a></button>


              </body>
        </html>
          );
        }
});

module.exports = Index;
