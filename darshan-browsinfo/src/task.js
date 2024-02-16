import react from "react";
import ReactDOM from "react-dom";
import './index.css';
ReactDOM.render(
  <>
    {/* {navbar start} */}
    <div className="y1">
      <nav className="navbar navbar-expand-lg navbar-light a">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#" style={{ color: "white" }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>Blog</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>Contact</a>
              </li>
            </ul>
            <h2 className="y2"><b> Pizaa <span style={{ color: "yellow" }}>Star</span></b> </h2>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="y3"><h2 className="h2"><b>Cranchy</b></h2><br />
              <h1 style={{ fontFamily: "Fixedsys" }}><b>ITALIAN PIZZA</b></h1>
              <p style={{ fontSize: "18px" }}> A Small river named Duden flowes by their place and supplies<br />it with the necessary regeliatia.  </p>
              <button type="button" class="btn btn-secondary" style={{ marginLeft: 15, marginTop: "3%", fontSize: "25px", border: 1, boxShadow: "4px 4px 4px white", fontFamily: "System" }}>Order Now</button>
              <button type="button" class="btn btn-secondary" style={{ marginLeft: 25, marginTop: "3%", fontSize: "25px", border: 1, boxShadow: "4px 4px 4px white", fontFamily: "System" }}>View Menu</button>
            </div>
          </div>


          <div className="col-sm-6">
            <img src="https://themewagon.github.io/pizza/images/bg_2.png" className="img1"></img>
          </div>
        </div>
      </div>
    </div>

    <div className="about"><h1> <span style={{ color: "orange", fontFamily: "MV Boli" }}><b>About</b></span><br></br><h2 style={{ fontFamily: "Fixedsys" }}>. . . Our Restaurant . . .</h2> </h1></div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <img src="https://m.media-amazon.com/images/I/71IRNGbxetL.jpg" className="img2"></img>
        </div>
        <div className="col-sm-6">
          <h1 className="welcome">WELCOME TO <span style={{ color: "yellow", fontFamily: "Comic Sans MS" }}>PIZZA</span> A RESTAURANT. . . .</h1><br></br>
          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
        </div>
      </div>
    </div>
    {/* <div className="service1"></div> */}
    <div className="service1">
      <h1 className="service2"> <b>OUR SERVICES</b> </h1>
      <p style={{ textAlign: "center", color: "black", fontSize: "25px" }}><b> Far far away, behind the word mountains,<br></br> far from the countries Vokalia and Consonantia, there live the blind texts.</b></p>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=1" width={200} height={160} style={{ marginLeft: "25%" }}></img>
            <h2 style={{ color: "black", textAlign: "center", marginTop: "9%", fontFamily: "Fixedsys" }}><b> HEALTHY FOODS</b></h2>
            <p style={{ textAlign: "center", color: "black", fontSize: "25px" }}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>

          <div className="col-4">
            <img src="https://img1.exportersindia.com/product_images/bc-full/dir_118/3523430/fastest-biryani-home-delivery-from-biryaan-1858888.png" width={280} height={170} style={{ marginLeft: "5%" }}></img>
            <h2 style={{ color: "black", textAlign: "center", marginTop: "5%", fontFamily: "Fixedsys" }}><b> FASTEST DELIVERY</b></h2>
            <p style={{ textAlign: "center", color: "black", fontSize: "25px" }}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>

          <div className="col-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsHtR3VtypX56wLCy7SosdwUp8RAzxxBWLw&usqp=CAU" width={280} height={170} style={{ marginLeft: "5%" }}></img>
            <h2 style={{ color: "black", textAlign: "center", marginTop: "5%", fontFamily: "Fixedsys" }}><b> ORIGINAL RECIPIES</b></h2>
            <p style={{ textAlign: "center", color: "black", fontSize: "25px" }}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="items"><h1> <span style={{ color: "orange", fontFamily: "MV Boli" }}><b>Items</b></span><br></br><h2 style={{ fontFamily: "Fixedsys" }}>. . . Our Restaurant . . .</h2> </h1></div><br></br>
      <div className="container-flued">
        <div className="row">
          <div className="col-6">
            <img src="https://wakefitdev.gumlet.io/img/dining/sets/koprasw/1.jpg?w=732" width={"500px"} height={"600px"}></img>
          </div>
          <div className="col-6">
            <button type="button" class="btn btn-warning">Pizza</button>
            <button type="button" class="btn btn-outline-warning" style={{ marginLeft: "3%" }}>Drink</button>
            <button type="button" class="btn btn-outline-warning" style={{ marginLeft: "3%" }}>Burger</button>
            <button type="button" class="btn btn-outline-warning" style={{ marginLeft: "3%" }}>Pasta</button></div>
          <div className="container">
            <div className="row">
              <div className="col-4">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>

    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div style={{ fontSize: "20px" }}>
              <h1><b>Pizza<span style={{ color: "red" }}>..</span></b></h1>
              <p>A108 Adam Street<br></br>
                NY 535022, USA</p><br></br>

              <p><b>Phone:</b> +1 5589 55488 55<br></br>
                <b>Email:</b> info@example.com</p>
              <p><div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" style={{ marginLeft: "4%" }}>
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16" style={{ marginLeft: "4%" }}>
                  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" style={{ marginLeft: "4%" }}>
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" style={{ marginLeft: "4%" }}>
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg></div></p>   </div>
          </div>


          <div className="col-3">
            <h2 style={{fontFamily: "Fixedsys"}}>Useful Links</h2>
            <div className="contact2">
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Home</span></p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Abou</span>t</p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Serv</span>ices</p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Term</span>s of service</p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Priv</span>acy policy</p></div>
          </div>

          <div className="col-3">
          <h2 style={{fontFamily: "Fixedsys"}}>Our Services</h2>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Web Design</span></p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Web Devlopment</span></p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Product Manegment</span></p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}>Marketing</span></p>
            <p style={{ marginLeft: "3%", fontSize: "20px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg><span style={{ marginLeft: "5%" }}> Graphic Design</span></p>
            </div> 

            <div className="col-3">
            <h2 style={{fontFamily: "Fixedsys"}}>Our Newsletter</h2>
            <p style={{fontSize: "19px"}}>Tamen quem nulla quae legam multos aute sint culpa legam noster magna..</p>
            <button type="button" className="btn btn-secondary b" style={{width: "150px", height:"55px",fontSize: "23px",fontFamily:"Fixedsys",marginTop: "10%", boxShadow: "6px 7px 8px black" }}>Search More</button>
              </div>         
        </div>
      </div>
      <p className="p1">© Copyright <b>Gp.</b> All Rights Reserved<br></br>
<span style={{marginLeft: "5%"}}>Designed by <span style={{fontSize:"20px"}}><b>BootstrapMade</b></span></span></p>
    </div>



  </>
  ,
  document.getElementById('root')
)