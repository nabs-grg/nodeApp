var React = require('react');
var Head = require('./head.jsx');

var Index = React.createClass({

  render() {

      return (
        <html>
        <title>{this.props.title}</title>
          <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="/stylesheets/style.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          </head>
        <body className='bg'>
              <h1>Welcome {this.props.user.username.toString()}</h1>

                <div className="panel panel-primary">
                    <div className="panel-body"><h1>{this.props.response}</h1></div>
                </div>
<form action="/jokes" method="post">
<input type="hidden" name="joke" value={this.props.response} />
<button  type="submit"   className="btn btn-primary btn-lg" >Save</button>
</form>
<hr />
<button type="button" className="btn btn-primary btn-lg "><a className='aa' href='/logout'>Logout</a></button>
<button type="button" className="btn btn-primary btn-lg "><a className='aa' href='/' >new joke</a></button>
<button type="button" className="btn btn-primary btn-lg "><a className='aa' href='/jokes' >View Saved Joke</a></button>
              </body>
        </html>
          );
        }
});

module.exports = Index;
