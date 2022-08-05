import '../Components/Ourteamcard.css'
import team2 from '../Images/profile 2.png'
import team1 from '../Images/profile.png'
import { Link } from 'react-router-dom'

function Ourteamcard() {
    return (
        <><div className="card_mainbox">


            <div className="text_cc">

                <h1 className='text_center m_top' data-aos="fade-up" >OUR TEAM</h1>
            </div>
            <div className="container">
                <div className="box_c" data-aos="fade-right">
                    <div className="profile_img">
                        {/* <img className='img' src={team1} /> */}
                    </div>
                    <div className="name">
                        <button className='nm_btn'>ANIKET</button>
                    </div>
                    <div className="skill_detail">
                        <p>Being a founder he manages all services . persuing BFA in applied arts and also persued diploma in fine arts ,in short your services are in good hands</p>
                    </div>
                    <div className="view_profbtn">
                    <Link to="/team">
                        <button className='p_btn pbtn_mtop'>View Profile</button>
                            
                        </Link>
                    </div>
                </div>
                <div className="box_c" data-aos="fade-left">
                    <div className="profile_img2">
                        {/* <img className='img' src={team2} /> */}
                    </div>
                    <div className="name">
                        <button className='nm_btn'>SWETA</button>
                    </div>
                    <div className="skill_detail">
                        <p>To provide you best company services she is there being a co founder she is also persuing BFA in applied arts in patna she is best in providing art materials and printed or digital mandalas.</p>
                    </div>
                    <div className="view_profbtn">
                        <Link to="/team">
                        <button className='p_btn mtp'>View Profile</button>
                            
                        </Link>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}

export default Ourteamcard