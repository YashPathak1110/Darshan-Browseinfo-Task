import './App.css';

function App() {
  return (

    // navbar 
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light  sticky-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "black" }}>
                  About us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "black" }}>
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Publication</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Our Apps</a>
              </li>


              <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/img/bi_new_logo1.jpg' width={"250px"} height={"70px"} style={{ marginLeft: "4rem" }}></img>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-secondary" type="submit" style={{color: "black"}}>Get a demo</button>
            </form>
          </div>
        </div>
      </nav>

      {/* carousal  start */}
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/img/GOLD%20PARTNER%20BANNER.webp" class="d-block w-100" alt="..." height={"700px"} />

          </div>
          <div class="carousel-item">
            <img src="https://wallpaperset.com/w/full/b/a/c/461138.jpg" class="d-block w-100" alt="..." height={"700px"} />
            <div className='carousel-caption'>
              <h1 className='h1-1'><span style={{ fontSize: "55px" }}>Hire An Odoo Developer</span><br></br>
                Smart, Skilled And Dedicated To Your Business.</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://4kwallpapers.com/images/wallpapers/laptop-windows-11-3440x1440-10874.jpg" class="d-block w-100" alt="..." height={"700px"} />
            <div className='carousel-caption'>
              <h1 style={{ marginBottom: "25rem" }}><span style={{ fontSize: "55px" }}>Let Us Be Your Helping Hand While You</span><br></br>
                Stepping Into The Odoo World</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images3.alphacoders.com/133/1338701.png" class="d-block w-100" alt="..." height={"700px"} />
            <div className='carousel-caption'>
              <h1 style={{ marginBottom: "23rem" }}><span style={{ fontSize: "55px" }}>We Take Your Business</span><br></br>
                To An Odoo Level</h1>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* carousal end */}

      {/* card- 1 start */}
      <div className='container-2'><br></br><br></br><br></br>
        <h1 className='h1-2'>Odoo Devlopment Company</h1>
        <hr style={{ width: "300px", height: "3px", marginLeft: "37rem", }} className='hr' ></hr><br></br><br></br>


        <div className='container '>
          <div className='row'>
            <div className='col-6'>
              <div className='card'>
                <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
                  <span style={{ marginLeft: "10px" }}>One of the Best Odoo Company in India, BrowseInfo is renowned for<br></br> providing exceptional Odoo services.It is a business application<br></br> services company that has been operating internationally since 2012.</span></p>
              </div> </div>

            <div className='col-6'>
              <div className='card'>
                <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg><span style={{ marginLeft: "10px" }}>We incorporate the world's best Open-ERP technologies that highlight<br></br> your organisation in the appropriate industries as a renowned Odoo<br></br> Gold Partner in UK as well as Odoo Partners in USA.</span></p>
              </div>   </div>
          </div>
        </div>
        <br></br>

        {/* card- 1 end */}

        {/* card- 2 start */}


        <div className='container' >
          <div className='row'>

            <div className='col-6'>
              <div className='card'>
                <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
                  <span style={{ marginLeft: "10px" }}>One of the Best Odoo Company in India, BrowseInfo is renowned for<br></br> providing exceptional Odoo services.It is a business application<br></br> services company that has been operating internationally since 2012.</span></p>
              </div> </div>

            <div className='col-6'>
              <div className='card'>
                <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg><span style={{ marginLeft: "10px" }}>One of the Best Odoo Company in India, BrowseInfo is renowned for<br></br> providing exceptional Odoo services.It is a business application<br></br> services company that has been operating internationally since 2012.</span></p>
              </div> </div>
          </div>
        </div>
      </div>

      {/* card- 2 end */}

      {/* container-3 start */}

      <h2 style={{ textAlign: "center" }}>Our Trusted Partners</h2>
      <hr style={{ width: "350px", height: "3px", marginLeft: "37rem", }} className='hr' ></hr><br></br><br></br>
      <div className='container' style={{ height: "600px" }}>
        <div className='row'>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/Isha-logo.webp'></img>
          </div>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/ISHA-LIFE-PRIVATE-LIMITED.webp' ></img>
          </div>
          <div className='col-3'>
            <span><img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/logo1.webp' style={{ marginTop: "30px" }} ></img></span>
          </div>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/HITECH-SOLUTIONS.webp'></img>
          </div>
        </div>

        <div className='row'>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/Innovative-Greens,-Prentiss-Zammit.webp'></img>
          </div>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/SASMAR-PHARMA-LTD.webp' ></img>
          </div>
          <div className='col-3'>
            <span><img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/PANACEA-ENTERPRISE.webp' style={{ marginTop: "30px" }} ></img></span>
          </div>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/PT.webp'></img>
          </div>
        </div>

        <div className='row'>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/The-Kosher-Place.webp'></img>
          </div>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/Van-Vliet-Automotive.webp' ></img>
          </div>
          <div className='col-3'>
            <span><img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/Grand-Bridge-Trading-74-Pty-Ltd.webp' style={{ marginTop: "30px" }} ></img></span>
          </div>
          <div className='col-3'>
            <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/logo/Le-Mill.webp'></img>
          </div>
        </div>
      </div>
      {/* container-3 End */}


      {/* container-4 Start */}
      <div style={{ height: "870px" }}>
        <h2 style={{ textAlign: "center" }}>Happy Client</h2>
        <hr style={{ width: "300px", height: "3px", marginLeft: "38.5rem", }} className='hr' ></hr><br></br><br></br>

        <div className='container'>
          <div className='card card-2'>
            <p style={{ textAlign: "center" }}><b><br></br>Sadhguru's Isha Foundation</b></p>
            <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-chat-right-quote" viewBox="0 0 16 16">
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
              <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
            </svg>
              <span style={{ marginLeft: "3rem" }}>BrowseInfo had recommended taking up Odoo nearly 4 years ago and has been a pillar of support for Isha in its digital transformation efforts. The choice itself has allowed us to extensively leverage the community and enterprise editions to support various initiatives towards our core mission of human-wellbeing. We have now built dozens of applications and this would not have happened without their incredible support...</span></p>
            <p style={{ textAlign: "center", color: "gray", fontSize: "20px" }}><b><br></br><i>Isha Team</i></b></p>

          </div>
        </div>

        {/* container-4 End */}

        {/* container-5 start */}<br></br><br></br>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='card'>
                <p style={{ textAlign: "center" }}><b><br></br>Ministry of health ,Govt of Lesotho</b></p>
                <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-chat-right-quote" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                  <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                  <span style={{ marginLeft: "3rem" }}>We are immensely grateful to the Browseinfo Odoo implementation team for their outstanding support, training, and implementation services. Their expertise and dedication have enabled a seamless adoption of Odoo in our Ministry of Health....<b>read more.</b></span></p>
                <p style={{ textAlign: "center", color: "gray", fontSize: "20px" }}><b><br></br><i>Govt of Lesotho</i></b></p>

              </div>
            </div>
            <div className='col-4'>
              <div className='card'>
                <p style={{ textAlign: "center" }}><b><br></br>Sasmar Healthcare.</b></p>
                <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-chat-right-quote" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                  <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                  <span style={{ marginLeft: "3rem" }}>We are immensely grateful to the Browseinfo Odoo implementation team for their outstanding support, training, and implementation services. Their expertise and dedication have enabled a seamless adoption of Odoo in our Ministry of Health....<b>read more.</b></span></p>
                <p style={{ textAlign: "center", color: "gray", fontSize: "20px" }}><b><br></br><i>Belgium, USA , UK , France Singapore</i></b></p>

              </div>
            </div>
            <div className='col-4'>
              <div className='card'>
                <p style={{ textAlign: "center" }}><b><br></br>Harmony Mineral Water Bottling LLC</b></p>
                <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-chat-right-quote" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                  <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                  <span style={{ marginLeft: "3rem" }}>We are extremely satisfied with Browseinfo Team's dedicated developers and consultants service for our Odoo implementation at Harmony Mineral Water Bottling LLC. Their expertise and support have been invaluable in customizing and optimizing ...<b>read more.</b></span></p>
                <p style={{ textAlign: "center", color: "gray", fontSize: "20px" }}><b><br></br><i>UAE, Kuwait , KSA</i></b></p>

              </div>
            </div>
          </div>
        </div></div>
      {/* container-5 end */}

      {/* container-6 start */}
      <div style={{ height: "1300px" }}>
        <h2 style={{ textAlign: "center" }}>What can we help you with?</h2>
        <hr style={{ width: "350px", height: "3px", marginLeft: "37rem", }} className='hr' ></hr><br></br><br></br>

        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <img src="https://www.cio.com/wp-content/uploads/2023/06/shutterstock_744825085-1.jpg?quality=50&strip=all" class="d-block w-100 img-zoom-out" height={"280px"} alt="..." />
              <h2>Odoo  Development</h2>
            </div>
            <div className='col-4'>
              <img src="https://www.smartsheet.com/sites/default/files/ic-og-BusinessProcessManagement-FacebookLinkedIn.jpg" class="d-block w-100 img-zoom-out" height={"280px"} alt="..." />
              <h2>Odoo Migration</h2>
            </div>
            <div className='col-4'>
              <img src="https://www.gieom.com/wp-content/uploads/2023/02/Section-2-1024x683.jpg" class="d-block w-100 img-zoom-out" alt="..." />
              <h2>Odoo Consultancy</h2>
            </div>
          </div><br></br><br></br>

          <div className='row'>
            <div className='col-4'>
              <img src="https://www.shutterstock.com/image-photo/service-guarantee-validation-concept-business-600nw-2258575997.jpg" class="d-block w-100 img-zoom-out" height={"280px"} alt="..." />
              <h2>Odoo Training</h2>

            </div>
            <div className='col-4'>
              <img src="https://www.shutterstock.com/image-photo/business-process-concept-flowchart-on-600nw-2213207225.jpg" class="d-block w-100 img-zoom-out" height={"280px"} alt="..." />
              <h2>Odoo Support</h2>

            </div>
            <div className='col-4'>
              <img src="https://media.istockphoto.com/id/1413755087/photo/process-management-with-flowchart-to-improve-productivity-and-successful-efficiency-of-the.jpg?s=612x612&w=0&k=20&c=HPLkF2mKAkHIPkoHlxJmqkdLCoKJj_rXv1hT2Vt6Jcs=" height={"280px"} class="d-block w-100 img-zoom-out" alt="..." />
              <h2>Installation</h2>

            </div>
          </div><br></br><br></br>

          <div className='row'>
            <div className='col-4'>
              <img src="https://thumbs.dreamstime.com/b/businessman-hand-working-new-modern-computer-business-s-business-process-management-workflow-automation-diagram-117852286.jpg" class="d-block w-100 img-zoom-out" height={"280px"} alt="..." />
              <h2>Odoo Implementation</h2>

            </div>
            <div className='col-4'>
              <img src="https://images.squarespace-cdn.com/content/v1/62460a56418af8236d4f3fee/1693424626700-SJ2NB0ERM23YA00ZLSKE/standard-quality-control-collage-concept.jpg" class="d-block w-100 img-zoom-out" height={"280px"} alt="..." />
              <h2>Third Party Integration</h2>

            </div>
            <div className='col-4'>
              <img src="https://blog.softwareag.com/wp-content/uploads/2022/11/blog-process-management-2030-header-1536x864.jpg" height={"280px"} class="d-block w-100 img-zoom-out" alt="..." />
              <h2>Odoo Maintenance</h2>

            </div>
          </div>
        </div>

      </div>
      {/* container-6 end */}

      {/* conatiner-7 start */}
      <div style={{ height: "950px" }}>
        <h2 style={{ textAlign: "center" }}>What can we help you with?</h2>
        <hr style={{ width: "350px", height: "3px", marginLeft: "37rem", }} className='hr' ></hr><br></br><br></br>

        <div className='container'>
          <div className='row'>
            <div className='card card-3'>
              <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-compass-fill" viewBox="0 0 16 16">
                <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
              </svg>
                <span style={{ marginLeft: "2rem" }}>Odoo Partners in India:-We are a well-known Odoo Partners in India, providing excellent services and unmatched experience withOdoo development along with Oddo customization service.</span></p>
            </div><br></br>

            <div className='card card-3' style={{ marginLeft: "40px" }}>

              <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5" />
                <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
              </svg>
                <span style={{ marginLeft: "2rem" }}>Odoo Development Company:- Being best Odoo Development Company we provide comprehensive solution along with customizing and developing Odoo Solution that provide efficient, cost-effective, that improve your business processes by utilising our vast understanding of Odoo.</span></p>

            </div><br></br>

            <div className='card card-3'>

              <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cookie" viewBox="0 0 16 16">
                <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z" />
              </svg>
                <span style={{ marginLeft: "2rem" }}>Odoo Gold Partner in India:-Our dedication to quality has won us the distinction of "Odoo Gold Partner in India." Being an experienced Odoo Gold Partner in India, we can assist you with the business and technical implementation of Odoo solutions.</span></p>

            </div><br></br>

            <div className='card card-3' style={{ marginLeft: "40px" }}>

              <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-crosshair2" viewBox="0 0 16 16">
                <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
              </svg>
                <span style={{ marginLeft: "2rem" }}>Odoo Expert: - Our team consists of highly skilled and certified Odoo Professionals having main focus on integration, comprehensive support and transparency, along with unmatched client satisfaction and providing customized solution to them.</span></p>

            </div><br></br>

            <div className='card card-3'>

              <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-disc-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0m9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5" />
              </svg>
                <span style={{ marginLeft: "2rem" }}>Seamless migration:-We ensure that you move effortlessly from current systems to Odoo, avoiding loss and increasing productivity with best Odoo Company in Ahmedabad, India..</span></p>

            </div><br></br>

            <div className='card card-3' style={{ marginLeft: "40px" }}>

              <p style={{ marginLeft: "20px", marginTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
              </svg>
                <span style={{ marginLeft: "2rem" }}>Odoo Company Dubai : We as odoo company Dubai, always provide services to take data safety as a first priority. We will provide you the safest odoo ERP system. So connect with us to explore our services, utilize our expertise to get the services from perfect Odoo company in Dubai. Transform your business with BrowseInfo today!</span></p>

            </div>
          </div>
        </div>
      </div>
      {/* container-7 end */}

      {/* container-8 start */}
      <hr style={{ width: "1600px", height: "1px" }}></hr>
      <div style={{ height: "600px" }} className='contact-us'><br></br>
        <h2 style={{ textAlign: "center" }}>Contact us</h2>

        <div className='container'>
          <div className='row' style={{ marginLeft: "20px" }}>
            <div className='col-3'> <br></br>
              <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/img/india.webp?height=25' height={"26px"} width={"28px"} style={{ borderRadius: "50px", marginLeft: "15px" }}></img><br></br>
              <h3 className='h3'>India</h3>
              <p>A/901, Navratna Corporate Park,<br></br>Near Ashok Vatika,
                Iscon Ambli Rd Ahmedabad, Gujarat 380058, India</p><br></br><br></br>

              <img src='https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/img/Malaysia.webp?height=25' height={"28px"} width={"28px"} style={{ borderRadius: "50px", marginLeft: "15px" }}></img><br></br>
              <h3 className='h3'>Malaysia</h3>
              <p>255 Jalan Maarof,Bukit<br></br> Bandaraya Bangsar,
                Kuala Lumpur 59100,WP Kuala Lumpur,Malaysia</p>
            </div>

            <div className='col-3 contact'>
              <h3>Apps Support</h3>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
              </svg> +91-6351620270</p>

              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>support(@)browseinfo(.)in</p>
            </div>

            <div className='col-3 contact'>
              <h3>Sales</h3>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
              </svg> +91-8238234631</p>

              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
              </svg>+91-9978020412</p>

              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>support(@)browseinfo(.)in</p>
            </div>

            <div className='col-3 contact'>
              <h3>Career</h3>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
              </svg>+ 91-9327139917</p>

              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
              </svg>+ 91-8866735969</p>

              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>hr(@)browseinfo(.)in</p>
            </div>
          </div>
        </div>
        <hr style={{ width: "1600px", height: "1px" }}></hr>
        <div className='last'>
    <p style={{marginLeft : "10rem", fontSize: "18px"}}>We use cookies to provide you a better user experience on this website</p>
    <a style={{marginLeft: "30px"}}>Cookie Policy</a>
    <button type="button" class="btn btn-outline-primary last-button">Only essential</button>
    <button type="button" class="btn btn-outline-success" style={{marginLeft: "1rem"}}>I agree</button>
</div>
      </div>
      {/* container-8 end*/}
    </div>
  );
}

export default App;
