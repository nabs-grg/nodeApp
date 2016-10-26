var React = require('react');
var Head = require('./head.jsx');

var Login = React.createClass({
  render() {

    return (
      <html>
      <title>{this.props.title}</title>
          <Head />
          <body className='bg'>
            <div className="container">
              <div className="row">
                <div className="col-md-offset-5 col-md-3">
                  <h1>Login</h1>
                  <hr />
                      <form className="form-login" action="/login" method="post">
                          <div className="form-group">
                            <label for="exampleInputName2">Username</label>
                            <input type="text" className="form-control input-sm chat-input" id="exampleInputName2" name="username" placeholder='Username' required />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputName1">Password</label>
                            <input type="password" name="password"  id="exampleInputName1" className="form-control input-sm chat-input" placeholder='password' required />
                          </div>
                          <div class="wrapper">
                            <button  type="submit"   className="btn btn-primary" >Login</button>
                            <a href="/register" class="btn btn-info" role="button">Register</a>
                          </div>
                      </form>
                      <h3>{this.props.error}</h3>
                      </div>
                    </div>
               </div>
        </body>
  </html>);
  }
});

module.exports = Login;


/*<form class="form-inline">
  <div class="form-group">
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
  </div>
  <button type="submit" class="btn btn-primary">Send invitation</button>
</form>*/


/*<h1>Login</h1>
  <form action="/login" method="post">
    username: <input type="text" name="username" placeholder='Username' required /><br />
    password: <input type="password" name="password" placeholder='password' required /><br />
   <input type="submit" value="Submit"  />
    {this.props.message}
  </form>*/
