import { useState } from 'react'
import banner from './assets/banner-art.svg'
import codingLogo from './assets/code.svg'
import cloud from './assets/cloud.svg'
import speedometer from './assets/speedometer.svg'
import love from './assets/love.svg'
import oops from './assets/oop.svg'
import humansupport from './assets/user-clock.svg'
import baseBanner from './assets/banner.svg'
import bannerArt1 from './assets/cta.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* container header */ }
       <div className="header">
        <div className="headCtnr mobile">
        <div className="cmpny">Company Name</div>
        <div className="getStarted">Get Started</div>
        </div>
      </div>
      

      {/* container 1 */}
      <div className="ctnr1h">
         < div className="cntent1h mobile">
          <div className="text1h">
          Let us solve your critical website
           development challenges
          </div> 
          <div className="span1h">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque
          totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus
          </div>
         </div>
         <div className="img1h mobile">
          <img  src={banner} alt="oops Banner missing"/>

         </div>
      </div>

      {/* container 2 */}
      <div className="ctnr2h">
            <div className="head2h">
              Something You Need To Know
            </div>

            
            <div className="cardHolder2h mobile">

            {/* clean code  */}
              <div className="servCardCC">
                <div className="cHLogo">
                  <img  src={codingLogo} alt="logo"/>
                </div>
                <div className="cHhead">Clean Code</div>
                <div className="cHtext">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</div>
              </div>
              {/* Object Oriented */}
              <div className="servCardCC">
                <div className="cHLogo">
                  <img  src={oops} alt="logo"/>
                </div>
                <div className="cHhead">Object Oriented</div>
                <div className="cHtext">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</div>
              </div>

                  {/* 24h service */}
                  <div className="servCardCC">
                <div className="cHLogo">
                  <img  src={humansupport} alt="logo"/>
                </div>
                <div className="cHhead">24h Service</div>
                <div className="cHtext">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</div>
              </div>

                 {/* value for money */}
                 <div className="servCardCC">
                <div className="cHLogo">
                  <img  src={love} alt="logo"/>
                </div>
                <div className="cHhead">Value for Money</div>
                <div className="cHtext">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</div>
              </div>
               {/* Faster Response  */}
               <div className="servCardCC">
                <div className="cHLogo">
                  <img  src={speedometer} alt="logo"/>
                </div>
                <div className="cHhead">Faster Response</div>
                <div className="cHtext">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</div>
              </div>
               {/* cloud support */}
               <div className="servCardCC">
                <div className="cHLogo">
                  <img  src={cloud} alt="logo"/>
                </div>
                <div className="cHhead">Cloud Support</div>
                <div className="cHtext">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</div>
              </div>

            </div>

          


      </div>


      {/* container 3 */}
      <div className="ctnr3">
        <div className="subCtnr mobile">
           <div className="ctnr3Data mobile">
            <div className="headingctnr3">It is the most advanced digital marketing and it company.</div>
            <div className="textctnr3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</div>
            <div className="buttonctnr3">Check it out →</div>
           </div>
           <div className="ctnr3Pic mobile">
            <img src='https://bigspring-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fservice-slide-1.png&w=640&q=75'/>
           </div>
        </div>
      </div>

       {/* container 4 */}
       <div className="ctnr4">
        <div className="subCtnr mobile">
           
           <div className="ctnr4Pic mobile">
            <img src='https://bigspring-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fservice-slide-1.png&w=640&q=75'/>
           </div>
           <div className="ctnr4Data mobile">
            <div className="headingctnr4">It is the most advanced digital marketing and it company.</div>
            <div className="textctnr4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</div>
            <div className="buttonctnr4">Check it out →</div>
           </div>
        </div>
      </div>

       {/* container 3 */}
       <div className="ctnr3">
        <div className="subCtnr mobile">
           <div className="ctnr3Data mobile">
            <div className="headingctnr3">It is the most advanced digital marketing and it company.</div>
            <div className="textctnr3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</div>
            <div className="buttonctnr3">Check it out →</div>
           </div>
           <div className="ctnr3Pic mobile">
            <img src='https://bigspring-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fservice-slide-1.png&w=640&q=75'/>
           </div>
        </div>
      </div>

      {/* container 4 */}
      <div className="ctnr4">
        <div className="subCtnr mobile">
           
           <div className="ctnr4Pic mobile">
            <img src='https://bigspring-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fservice-slide-1.png&w=640&q=75'/>
           </div>
           <div className="ctnr4Data mobile">
            <div className="headingctnr4">It is the most advanced digital marketing and it company.</div>
            <div className="textctnr4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</div>
            <div className="buttonctnr4">Check it out →</div>
           </div>
        </div>
      </div>


      {/* container 7 */}
      <div className="ctnr7">
        <div className="ctnr7heading mobile">Experience the best workflow with us</div>
        <div>
          <img  className="ctnr7Img"src={baseBanner} alt="banner"/>
        </div>
      </div>

      {/*  contianer 8*/}
      <div className="ctnr8">
      <div className="subCtnr8 mobile">
           
           <div className="ctnr8Pic mobile">
            <img src={bannerArt1}/>
           </div>
           <div className="ctnr8Data mobile">
            <div className="headingctnr8">Ready to get started?</div>
            <div className="textctnr8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.</div>
            <div className="buttonctnr8" >
              <div className="contactButton">
              Contact Us
              </div>
              </div>
           </div>
        </div>
      </div>

   {/* container 9 footer  */}
   <div className="ctnr9">
    <div className='subCtnr sc9'>
    <div className=".sc9compadiv">
      <div className="sc9h">Company</div>
      <div>Pricing</div>
      <div>Quick Start</div>
     
      </div>

    <div className=".sc9product">
      <div className="sc9h">Product</div>
      <div>Features</div>
      <div>Platform</div>
      <div>Pricing</div>
    </div>

    <div className="sc9support">
      <div className="sc9h">Support</div>
      <div>FAQ</div>
      <div>Privacy Policy</div>
      <div>Terms&Conditions</div>
      
     </div>
 
    <div className="sc9details">
      <div className="sc9h">CompanyName</div>
      <div>Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.</div>
      <div>handles</div>
     
      </div>

    </div>
    
   </div>

    </div>
  )
}

export default App
