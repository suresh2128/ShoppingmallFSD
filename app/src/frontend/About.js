import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
  return (
    <div className='row bg-light-container'>
      <div className="row">
        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/home">
            <img src="https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300" alt="Logo" style={{ height: '60px', width: '100px', margin: '10px 20px',boxShadow: '5px 5px 10px black' }} />
          </Link>
        </div>
        <div className="col" style={{ display: 'flex',textDecoration:'none',justifyContent:'flex-end' }}>
          <ul style={{listStyleType:'none',display:'flex',direction:'column',margin:'30px',}}>
            <Link to="/home"style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>Home</li></Link>
            <Link to="/shop" style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px',textDecoration:'none'}}>Shop</li></Link>
            <Link to="/about" style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>About</li></Link>
            <Link to="/contact" style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>Contact</li></Link>
            <Link to="/cart"style={{textDecoration:'none',fontSize:"20px",color:'black',textShadow:'5px 10px 15px #088178',fontWeight:'bold'}}><li style={{margin:'0 25px'}}>Cart</li></Link>
          </ul>
        </div>
      </div>
      <div className='row mt-4 '>
        <div className='col-md-4 bg-light'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.P06DKQUUWtOStwNz23a6XAHaGj&pid=Api&P=0&h=180' alt='' style={{height:'400px',width:'400px',marginLeft:'50px'}}/>
        </div>
        <div className='col md-8 bg-light'>
           
        <p style={{fontSize:'20px',fontFamily:'arial',marginTop:'50px',marginLeft:'100px'}}>
            Welcome to our E-commerce website! We are dedicated to providing the best shopping experience for our customers.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p style={{fontSize:'20px',fontFamily:'arial',marginTop:'30px',marginLeft:'100px'}}>
        Our mission is to offer high-quality products, exceptional customer service, and a seamless online shopping journey.
        Whether you are looking for the latest fashion trends, kids' wear, or unique items, we've got you covered.
      </p>
      <p  style={{fontSize:'20px',fontFamily:'arial',marginTop:'30px',marginLeft:'100px',paddingBottom:'20px'}}>
        Thank you for choosing us for your shopping needs. Feel free to explore our website and discover the latest collections.
        If you have any questions or need assistance, our customer support team is here <Link to="/contact">Customer Care</Link> to help.
      </p>
        </div>
      </div>
      <div className='row mt-5 feature bg-light'>
        <div className='col md-2 fe-box'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.TLEqXoy8-pbhj_UmRxn19AHaHa&pid=Api&P=0&h=180' alt='' /><br/>
            <h6>Free Shiping</h6>
        </div>
        <div className='col md-2 fe-box'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.e_uUCG_EZ_fD1O1A-m2eVgHaFI&pid=Api&P=0&h=180' alt='' style={{height:'100px',width:'75%'}} /><br/>
            <h6>Save Money</h6>
        </div> 
        <div className='col md-2 fe-box'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.p9k0j2vezNQZB-P6WKSC-QHaHa&pid=Api&P=0&h=180' alt='' /><br/>
            <h6>Online Order</h6>
        </div>
         <div className='col md-2 fe-box'>
            <img src='https://tse3.mm.bing.net/th?id=OIP.ObI0ZSJVVmFWhUForaq7XAHaHn&pid=Api&P=0&h=180' alt=''/><br/>
            <h6>F24/7 Support</h6>
        </div>
        <div className='col md-2 fe-box'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.AubTLWeHTNShBQDlxza0KQHaFS&pid=Api&P=0&h=180' alt='' style={{height:'100px',width:'75%'}} /><br/>
            <h6>Promotions</h6>
        </div>
        <div className='col md-2 fe-box'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.H5ah4KKTK7l1m3AyEPxc_wHaG6&pid=Api&P=0&h=180' alt='' style={{height:'100px',width:'75%'}} /><br/>
            <h6>Happy Customer</h6>
        </div>
      </div>
      <footer>
      <div>
        <div className='row bg-black'>
            <div className='col-md-4' style={{textAlign:'center',}}>
                <img alt=''style={{height:'50px',margin:'40px'}} src='https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300' /><br/>
                <i className="fa-solid fa-location-crosshairs fa-1x" style={{color: '#ffffff',marginBottom:'10px'}}></i>
                <span style={{fontSize:'15px',color:'white'}}><b>Address:</b> Morampudi Road,Rajamahendravaram,533234</span><br/>
                <i className="fa-solid fa-envelope fa-1x" style={{color: '#ffffff',marginBottom:'10px'}}></i>
                <span style={{fontSize:'15px',color:'white'}}><b>E-Mail:</b> Shoppingmall@gmail.com</span><br/>
                <i className="fa-regular fa-clock" style={{color: '#ffffff'}}></i>
                <span style={{fontSize:'15px',color:'white'}}> <b>Hours:</b>10:00, Mon-Sat</span><br/><br/>
                <i className="fa-brands fa-instagram fa-2x" style={{ color: '#ffffff',marginRight:'30px',fontSize:"25px"}}></i>
                <i className="fa-brands fa-facebook fa-2x" style={{ color: '#ffffff', marginRight:'25px',fontSize:"25px"}}></i>
                <i className="fa-brands fa-twitter fa-2x" style={{ color: '#ffffff', marginRight:'25px',fontSize:"25px" }}></i>
                <i className="fa-brands fa-linkedin fa-2x" style={{ color: '#ffffff', marginRight:'25px',fontSize:"25px" }}></i>
                <i  className="fa-brands fa-youtube fa-2x" style={{ color: '#ffffff', marginRight:'25px' ,fontSize:"25px"}}></i><br/><br/><br/>
            </div>
            <div className='col-md-4 mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{color:'white'}}>➤ Menu</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li style={{ margin: '8px 0' }}>About Us</li>
                    <li style={{ margin: '8px 0' }}>Delivery Information</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms & Conditions</li>
                    <li style={{ margin: '8px 0' }}>Contact Us</li>
                </ul>
            </div>  
            <div className='col-md-4 mt-5' style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
                <h4 style={{color:'white'}}>➤ Support</h4>
                <ul style={{padding: '0px', color:'white',listStyleType:'none' }}>
                    <li>Legal Policy</li>
                    <li style={{ margin: '8px 0' }}>Status Policy</li>
                    <li style={{ margin: '8px 0' }}>Privacy Policy</li>
                    <li style={{ margin: '8px 0' }}>Terms of Service</li>
                    <li style={{ margin: '8px 0' }}>Customer</li>
                </ul>
            </div>
            {/* <div className='col-md-3'>
                <h5 style={{color:'white',marginTop:'50px',marginRight:'50px'}}>➤ We Offered</h5>
                <ul style={{padding: '0px', color:'white',listStyleType:'none'  }}>
                    <li style={{ margin: '8px 0' }}>Mens wear</li>
                    <li style={{ margin: '8px 0' }}>Womens wear</li>
                    <li style={{ margin: '8px 0' }}>child wear</li>
                    <li style={{ margin: '8px 0' }}>Brand Products</li>
                </ul>
            </div> */}
            <div className='row'>
                <div className='col'>
                    <h6 style={{color:'white',textAlign:'center',marginBottom:'30px'}}>INFERNO Copyright © 2021 Inferno - All rights reserved.</h6>
                </div>
            </div>
        </div>
    </div>      
      </footer>
    </div>
  );
};

export default About;
