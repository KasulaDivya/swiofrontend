//import MainContent from "./music"

//import FeatureSection from "./FeaturesSection"
import img1 from "../public/images/ArtSlowMagic.jpg"
import img2 from '../public/images/AppSpotify.png'
import img3 from '../public/images/AppDoppler.png'
import img4 from '../public/images/search image.png'
import img5 from "../public/images/ArtCarolinePolachek.jpg"
import img6 from "../public/images/ArtChelseaCutler.jpg"
import img7 from "../public/images/ArtPetitBiscuit.jpg"
import img8 from "../public/images/ThemeUI.png"
import img9 from "../public/images/ThemeUIActive.png"
import img10 from "../public/images/ThemeExport.png"
import img11 from "../public/images/midimage.png"
import img12 from "../public/images/IconArrayArtwork.png"
import img13 from "../public/images/IconArrayTrack.png"
import img14 from "../public/images/icon2.png"
import img15 from "../public/images/icon3.png"
import img16 from "../public/images/Artwork1.jpg"
import img17 from "../public/images/Artwork2.jpg"
import img18 from "../public/images/Artwork3.jpg"
import img19 from '../public/images/Typography1.jpg'
import img20 from '../public/images/Typography2.jpg'
import img21 from "../public/images/last1.png"
import img22 from "../public/images/last2.png"

const Sleeve1 = () => {
  return (
    <>
    <div style={{display:"grid", alignContent:"center"}}>
    <div className="div1">
      <center><h1 id='h11'>Sleeve <span>2</span></h1>
      <h1 id='h111'>The ultimate music accessory for your Mac</h1>
      <h3 id='h3'>sleeve sites on the desktop,displaying and controlling the music your re<br></br> currently paying in <img src={img1}className="imgs"></img> App Music,<img src={img2} className="imgs"></img>spotify and <img className="imgs" src={img3}></img>Doppler </h3></center>
    </div>
    <div className="div2">
       <center><button id='btn1'><img src='https://thumbs.dreamstime.com/b/apple-logo-19106337.jpg' className="imgs"></img> Mac App Store</button>
        <button>Buy Directly <span style={{backgroundColor:'black',borderRadius:'2rem',color:'white',padding:'5px',marginLeft:'2rem'}}>$5.99</span></button></center> 
    </div>
    <div>
    <center><p className  ="text-sm opacity-50 max-w-[32ch] sm:max-w-auto" id="p1">No subscriptions. No in-app<br></br> purchases. Requires macOS 11 Big Sur<br></br> or later.</p>
    <img src={img4}className="search"></img><button className="btn3">Now with shelves and a progress bar.See whats new in Sleeve 2.3<span style={{borderRadius:"50%",border:'black',marginLeft:'10px'}}>➜</span></button></center>
    </div>
    <div >
    <center><p style={{color:'rgb(13 158 255)'}}>New IN <span style={{backgroundColor:'rgb(13 158 255)',color:'white',borderRadius:'2rem',padding:'0.2rem',width:'2px'}}>2.0</span></p>
    <div style={{marginTop:'8rem'}} >
      <center>
    <h1 id="h111">Themes Unlimited themes</h1>
    <h2 id="h3">Themes in Sleeve make creating and switching between customizations easy.<br></br> Share your own creations with friends and install as many themes as you like with just a double-click.</h2></center>
    </div></center>
    </div>
    <div className="bg1">
      <div className="div11"><img src={img1} className="mg1"></img><p style={{color:"white",marginRight:'2px',fontSize:'1rem'}}>Eternal sunshine <br></br>forgetten feels<br></br>slow music</p></div>
       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'black',width:'25rem',height:'10rem',opacity:'0.6',position:'absolute',marginTop:'5rem',borderRadius:'1rem',marginLeft:'-20rem'}}><img src={img5} className="gradientimage1"></img><span style={{color:'white',marginLeft:'15px'}}> Bunny Is a Rider<br></br>
Desire, I Want to Turn Into You
Caroline Polachek<br></br>◁  II  ▷</span></div>
        <div><img className="gradientimage2" src={img6}></img><p style={{color:'white'}}>◁  II  ▷<br></br> Are You Listening<br></br>
How To Be Human<br></br>
Chelsea Cutler</p></div>
        <div style={{display:'flex',flexDirection:'column'}}><img className="gradientimage3"src={img7}></img><p style={{backgroundColor:'black',color:'white',marginTop:'-3px',width:'100px',marginRight:'30rem'}}>Creation Comes Alive<br></br>
Petit Biscuit</p></div>
    </div>
    {/* Features section */}
    <div style={{display:'flex',marginTop:'28rem'}}>

    <div className="featurediv1">
     <h2>Change it up</h2>
     <p>Switch between themes with just a click.</p>
     <p>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</p>
     {/* <img src="../public/images/Themeicon@3x.png" id="icon" className="fmg1"></img> */}
     <img src={img8} className="fmg2"></img>
     <img src={img9} className="fmg3"></img>
    </div>

    <div className="featurediv2">
     <h2>Shareable</h2>
     <p>Export your themes and share them with friends using the handy new Sleeve Theme file format.</p>
     <p>Install themes from anywhere with a double-click or a drag and drop.</p>
     {/* <img src="../public/images/Themeicon@3x.png" id="icon" className="fmg1"></img> */}
     <img src={img10} className="fmg2"></img>
    </div>
    </div>

    {/** mid section */}
    <center><p style={{color:'#7f45f5ff',marginTop:'5rem',fontSize:'20px'}}>customization</p></center>
    <diV style={{marginTop:"6rem"}}>
      <center>
       
      <h1 id="h111">Countless way to customize</h1>
      <p id="h3">Customization is at the core of the Sleeve experience — choose <br></br>from any combination of design choices, behaviors and settings to make Sleeve at home <br></br>on your desktop.</p>
      <img src={img11} ></img>
      </center>
    </diV>

    <div style={{display:'flex',marginLeft:'5.5rem',marginTop:'8rem'}}>
      <div style={{width:'30rem'}}>
       <img src={img12}></img>
       <h1 id='h111' style={{marginTop:'1rem'}}>ArtWork</h1>
       <p id='h3' style={{width:'30rem'}}>Scale artwork all the way up or all the way down. Round the corners or leave them square.<br></br>
       <br></br>

Choose shadow and lighting effects to bring your album artwork to life.<br></br>
<br></br>

Or hide it completely.</p>
<br></br>
<br></br>
<img src={img13}></img>
<h1 id='h111' style={{marginTop:'1rem'}}>Typography</h1>
<p id='h3' style={{width:'30rem'}}>Pick the track info you want to display, and then exactly how to display it.<br></br><br></br>
Choose the fonts, weights, sizes, and transparency<br></br> to use for each line, along with customizing color and shadow.</p>
<br>
</br>
<br></br>
<img src={img14}></img>
<h1 id='h111' style={{marginTop:'1rem'}}>Interface</h1>
<p id='h3' style={{width:'30rem'}}>Scale artwork all the way up or all the way down. Round the corners or leave them square.<br></br><br></br>
<br></br><br></br>
Choose shadow and lighting effects to bring your album artwork to life.<br></br>
<br></br>
Or hide it completely.</p>
<br></br>
<br></br>
<img src={img15}></img>
       <h1 id='h111' style={{marginTop:'2rem'}}>Settings</h1>
       <p id='h3' style={{width:'30rem'}}>Customize the layout, alignment and position to fit your setup.<br></br><br></br>
Show and hide playback controls.<br></br><br></br> Add a backdrop layer and customize it.</p>
      </div>
      <div className="wall">
        <div className="wallinner">
      <img src={img16} id='imgsss'></img>
      <img src={img17} id='imgsss'></img>
      <img src={img18} id='imgsss'></img>
      <br></br>
      <br></br>
      <br></br>
      <img src={img19} id="imgss"></img><br></br>
      <img src={img20} id="imgss"></img>
      <img src="../public/images/inter1.png" id='imgss'></img>
      <img src="../public/images/inter2.png" id='imgs'></img>
      </div>
      </div>
    </div>
    <center><h1 id='h111' style={{marginTop:'8rem'}}>Like Scrollable</h1></center>
    <div style={{display:'flex',marginTop:'10rem'}}>

    <div className="featurediv3">
    <img src={img21} className="fmgl" style={{marginLeft:'2rem'}}></img>
     <center><h2 style={{color:'#801d1dff'}}>Sleeve integrates with Last.<br></br>fm so you never miss a track.<br></br> Simply sign in and start scrobbling.</h2>
     </center>
     {/* <img src="../public/images/Themeicon@3x.png" id="icon" className="fmg1"></img> */}
     
    </div>

    <div className="featurediv4">
    <img src={img22} className="fmgl" style={{marginLeft:'2rem'}}></img>
     <center><h2 style={{color:'#246323ff'}}>With Sleeve 2 you can now like <br></br>tracks in Spotify, without ever having<br></br> to switch away from Sleeve.</h2>
     </center>
     {/* <img src="../public/images/Themeicon@3x.png" id="icon" className="fmg1"></img> */}
    </div>
    </div>
    <div>
      <div style={{display:'flex',justifyContent:'space-between',width:'70rem',marginTop:'4rem',backgroundColor:'#f7f9faff',marginLeft:'9rem',borderRadius:'1rem',padding:'2rem'}}>
        <div>
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        </div>
        <div style={{width:'50rem'}}>
          <h2>Sleeve integrates directly with Apple Music, Spotify and Doppler. Control playback, like tracks and adjust volume seamlessly.</h2>
        </div>
      </div>
      <div></div>
    </div>
    </div>
    </>
  )
}

export default Sleeve1