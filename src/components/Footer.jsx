import  "./Footer.css"
export const Footer = ()=>{
    return(
        <>
        <div className="footer">
          <div className="secone"></div>
          <div className="sectwo">
             <div className="discover">
                <div className="headDis">Discover it all</div>
                  <div className="dis_list">
                    <div className="dis"><span>HOME</span></div>
                    <div className="dis"><span>WORK</span></div>
                    <div className="dis"><span>STUDIO</span></div>
                    <div className="dis"><span>BLOG</span></div>
                    <div className="dis"><span>NEED A PITCH DECK?</span></div>
                  </div>
             </div>
             <div className="projects">
                <div className="headPro">Latest projects</div>
                <div className="pro_list">
  <div className="p1"><span>BEFORE</span></div>
  <div className="p1"><span>FOURKIT</span></div>
  <div className="p1"><span>VITALITY</span></div>
  <div className="p1"><span>RICABLE</span></div>
</div>
             </div>
             <div className="touch">
                <div className="headStay">Stay in touch</div>
                <div className="stay_list">
  <div className="stay"><span>CONTACT US</span></div>
  <div className="stay"><span>BOOK A CALL</span></div>
  <div className="stay"><span>FOLLOW ALONG ON X</span></div>
  <div className="stay"><span>FOLLOW ALONG ON TWITTER</span></div>
  <div className="stay"><span>HELLO@FLOW.COM</span></div>
</div>

             </div>
         
          </div>
             <div className="copyright_gain_source">
                <div className="copyright">COPYRIGHT 2025 FLOW,LLC</div>
                <div className="gain">GAIN BUSINESS CONFIDENCE</div>
                <div className="source"> LINKDIN,TWITTER,INSTAGRAM</div>
             </div>
          <div className="secthree"></div>
        </div>
        </>
    )
}