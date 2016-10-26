var React = require('react');
var Head = require('./head.jsx');

var Register = React.createClass({
  render() {
    return (
      <html>
      <title>{this.props.title}</title>
          <Head />
          <body className='bg'>
            <div className="container">
              <div className="row">
                <div className="col-md-offset-5 col-md-3">
                  <h1>Register</h1>
                  <hr />
                      <form className="form-login" action="/register" method="post">
                          <div className="form-group">
                            <label for="exampleInputName2">Username</label>
                            <input type="text" className="form-control input-sm chat-input" id="exampleInputName2" name="username" placeholder='Username' required />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputName1">Password</label>
                            <input type="password" name="password"  id="exampleInputName1" className="form-control input-sm chat-input" placeholder='password' required />
                          </div>
                          <div class="wrapper">
                            <button  type="submit"   className="btn btn-primary" >Register</button>
                            <a href="/login" class="btn btn-info" role="button">Login</a>
                          </div>
                      </form>
                      <h3>{this.props.error}</h3>
                      </div>
                    </div>
               </div>
        </body>
    </html>

    )
  }
});

module.exports = Register;
