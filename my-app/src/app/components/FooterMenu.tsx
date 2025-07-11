'use client';

export default function FooterMenu() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-uppercase">Navigation</h5>
            <hr />
            <p>About Us</p>
            <p>Employment</p>
            <p>Videos</p>
          </div>
          <div className="col">
            <h5 className="text-uppercase">Main Menu</h5>
            <hr />
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
          </div>
          <div className="col">
            <h5 className="text-uppercase">Connect</h5>
            <hr />
            <p>Sign-up for the latest updates</p>
            <div className="d-flex">
              <input type="text" className="form-control me-2" placeholder="Enter Email Address" />
              <button className="btn btn-dark">Join</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
