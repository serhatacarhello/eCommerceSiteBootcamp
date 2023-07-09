import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>404 error</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-medium">
        <div className="container">
          <div className="error-wrapper">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <h2>We Couldn’t Find The Page</h2>
                <p>
                  The page you are looking for couldn't be found. It looks like
                  you may have taken a wrong turn or we might have switched
                  direction. You can search your direction below searchbar.
                </p>
                <div className="row">
                  <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12 mb30 ">
                    <div className="search-bg">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Here"
                      />
                      <button type="Submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <h5>Or</h5>
                <Link to={"/"} className="btn btn-primary btn-lg">
                  back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
