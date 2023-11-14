// Contact.js
import './About.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Replace the URL with your server endpoint
    axios.post("http://localhost:5000/contact", formData)
      .then((response) => {
        alert("Submitted Successfully");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='row-container'>
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
       <div className='row' style={{ background: `url('https://dsmartsys.com/wp-content/uploads/2019/06/contact-us-banner.png')`, backgroundSize: 'cover', }}>
        <div className='col top'>#let's _talk</div>
      </div>
      <div className='row' style={{backgroundColor:'#e3f3f6'}}>
        <div className='col md-4 form1'>
          <p style={{paddingTop:'35px'}}>GET IN TOUCH</p>
          <h3>Visit one of our agency locations or</h3>
          <h3>contact us today</h3>
          <h5 style={{paddingTop:'5px',fontSize:'20px'}}>Head Office</h5>
          <i class="fa-solid fa-map" style={{color: "#100f0f",marginRight:'20px',marginTop:'10px'}}></i>
          <span>Address:Morampudi Road,Rajamahendravaram,533234</span><br/>
          <i class="fa-regular fa-envelope" style={{marginTop:'20px',marginRight:'10px'}}></i>
          <span>E-Mail:Shoppingmall@gmail.com</span><br/>
          <i class="fa-solid fa-phone"style={{marginTop:'20px',marginRight:'10px'}}></i>
          <span>Contact us +91 987456321</span><br/>
          <i className="fa-regular fa-clock" style={{color: '#000000',marginTop:'20px',marginRight:'10px'}}></i>
          <span>Hours:10:00, Mon-Sat</span><br/><br/> 
        </div>
        <div className='col md-8 map'>
        <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8338612143825!2d-1.2550437!3d51.754361499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1690649854338!5m2!1sen!2sin"
            width="750"
            height="350"
            style={{ border: '0',paddingTop:'35px',marginBottom:'20px',marginRight:'50px'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className='row' style={{backgroundColor:'#bababa'}}>
        <div className='col md-8 listtag'>
          <p style={{marginLeft:'30px'}}>LEAVE A MESSAGE</p>
          <h4 style={{marginLeft:'30px'}}>We love to hear from you</h4>
        <form onSubmit={handleSubmit} style={{marginTop:'30px',marginLeft:'30px'}}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Your Name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder='E-mail'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
              <input
              type="text"
              id="name1"
              name="name1"
              placeholder='Subject'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <textarea
              id="message"
              name="message"
              placeholder='Message'
              value={formData.message}
              cols="90" rows="6"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button type="submit" style={{marginTop:'20px',width:'150px',marginBottom:'20px'}}>Submit</button>
          </form>
        </div>
        <div className='col md-4 '>
        <div style={{marginTop:'120px',marginLeft:'100px'}}>
            <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" style={{float:'left',width:'100px',height:'100px',marginRight:'20px'}}/>
            <p><span>Mr.R.Sanjay swami</span><br/>CEO & Founder of H&M<br/> Phone: +000 123 000 77 88 <br/>Email: contactceo@example.com</p>
          </div>
          <div style={{marginTop:'50px',marginLeft:'100px'}}>
            <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" style={{float:'left',width:'100px',height:'100px',marginRight:'20px'}}/>
            <p><span>Mr.K.Vinay Sharma</span><br/>Senior Stylist Manager <br/> Phone: +000 123 000 77 88 <br/>Email: Stylistmanger@example.com</p>
          </div>
          <div style={{marginTop:'50px',marginLeft:'100px'}}>
            <img src= "https://tse2.mm.bing.net/th?id=OIP.xpmspqmeooIchs0zi7aJ9wHaHa&pid=Api&P=0&h=180"  alt="" style={{float:'left',width:'100px',height:'100px',marginRight:'20px'}}/>
            <p><span>Miss.Y.Sandya</span><br/>Senior Marketing Manager <br/> Phone: +000 123 000 77 88 <br/>Email: marketingmanger@example.com</p>
          </div>
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

export default Contact;
