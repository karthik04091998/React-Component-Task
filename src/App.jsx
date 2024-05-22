/* eslint-disable react/no-unescaped-entities */
import './App.css'
function App() {

  return (
    <>
      <div>
        <div className='container'>
          <div className='header'>
            <button className='btn' style={{ fontSize: 20 }}>Start Bootstrap</button>
            <a className='Btn' href='#redirectlink'>Sign Up</a>
          </div>
        </div>

        <div className='Body'>
          <div>
            <img src='https://st.depositphotos.com/2073119/5099/i/450/depositphotos_50996209-stock-photo-turquoise-ocean.jpg' alt='image' style={{ width: '100%', height: 600 }} />
            <div className='centered'>
              <h1 style={{ color: 'white', fontSize: 45, marginBottom: 30 }}>Generate more leads with a professional landing page!</h1>
              <form>
              <input type="Email" className='textbox' name="name" required placeholder='Email Address'></input>
              <button className='submitbutton'>Submit</button>
              </form>
            </div>
          </div>

          <div className='description'>
            <div>
              <i style={{ fontSize: 100, color: 'blue' }} className="fa-regular fa-folder"></i>
              <p><h1>Fully Responsive</h1></p>
              <p style={{ fontSize: 20 }}>This theme will look great on any device, no matter the size!</p>
            </div>

            <div>
              <i style={{ fontSize: 100, color: 'blue' }} className="fa-brands fa-bootstrap"></i>
              <p><h1>Bootstrap 5 Ready</h1></p>
              <p style={{ fontSize: 20 }}>Featuring the latest build of the new Bootstrap 5 framework!</p>
            </div>

            <div>
              <i style={{ fontSize: 100, color: 'blue' }} className="fa-solid fa-chart-line"></i>
              <p><h1>Easy to Use</h1></p>
              <p style={{ fontSize: 20 }}>Ready to use with your own content, or customize the source files!</p>
            </div>
          </div>


          <div className="imageanddescription">
            <div className="imgdes">
              <div style={{ padding: 70, textAlign: 'center' }}>
                <h1>Fully Responsive Design</h1>
                <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether its a phone, tablet, or desktop the page will behave responsively!</p>
              </div>
              <img src="https://assets.newatlas.com/dims4/default/b49b3d7/2147483647/strip/true/crop/1619x1079+151+0/resize/440x293!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fapple-alienate-fans-5.jpg" style={{ width: '100%' }} />
            </div>

            <div className="imgdes">
              <img src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg" style={{ width: '100%' }} />
              <div style={{ padding: 70, textAlign: 'center' }}>
                <h1>Updated For Bootstrap 5</h1>
                <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
              </div>
            </div>

            <div className="imgdes">
              <div style={{ padding: 70, textAlign: 'center' }}>
                <h1>Easy to Use & Customize</h1>
                <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
              </div>
              <img src="https://img.freepik.com/free-photo/close-up-male-hands-typing-laptop-keyboard_1262-2250.jpg" style={{ width: '100%' }} />
            </div>
          </div>

          <h1 style={{ textAlign: 'center', padding: 50 }}>What people are saying...</h1>
          <div className="review">
            <div>
              <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" style={{ width: 170, borderRadius: 100 }} />
              <p><b>Margaret E.</b></p>
              <p style={{ fontSize: 15 }}>"This is fantastic! Thanks so much guys!"</p>
            </div>

            <div>
              <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" style={{ width: 170, borderRadius: 100 }} />
              <p><b>Fred S.</b></p>
              <p style={{ fontSize: 15 }}>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
            </div>

            <div>
              <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" style={{ width: 170, borderRadius: 100 }} />
              <p><b>Sarah W.</b></p>
              <p style={{ fontSize: 15 }}>"Thanks so much for making these free resources available to us!"</p>
            </div>
          </div>


          <div >
            <img src="https://st.depositphotos.com/2073119/5099/i/450/depositphotos_50996209-stock-photo-turquoise-ocean.jpg" alt="newimage" style={{ width: '100%', height: 400 }} />
            <div className='newcentered'>
              <h1 style={{ color: 'black', fontSize: 45, marginBottom: 30 }}>Ready to get started? Sign up now!</h1>
              <form>
              <input type="Email" className='textbox' id='redirectlink' name="name" required placeholder='Email Address' ></input>
              <button className='submitbutton'>Submit</button>
              </form>
            </div>
          </div>

          <div className="footer">
            <div>
              <a href='#'>About</a>&nbsp;&nbsp;
              <a href='#'>Contact</a>&nbsp;&nbsp;
              <a href='#'>Terms of Use</a>&nbsp;&nbsp;
              <a href='#'>Privacy policy</a>&nbsp;&nbsp;
              <p>© Your Website 2023. All Rights Reserved.</p>
            </div>

            <div style={{ fontSize: 30, color: 'blue' }}>
              <i className="fa-brands fa-facebook"></i>&nbsp;&nbsp;
              <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;
              <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default App
