import React from "react";
import NavBar from "./NavBar";
import './../css/ContactPage.css';

function ContactPage() {
	return (
		<div className="App">
			<NavBar />
			<section>
				<div class="container">
					<div class="ContactInfo">
						<div>
							<h2>Contact Info</h2>
							<ul class="info">
								<li>
									<span><img src="../images/add.png" alt="location"></img></span>
									<span>Admin Update</span>
								</li>
								<li>
									<span><img src="../images/email.png" alt="mail Id"></img></span>
									<span><a href="mailto:promora07@gmail.com">promora07@gmail.com</a></span>
								</li>
								<li>
									<span><img src="../images/phone.png" alt="call"></img></span>
									<span><a href="tel:+9179800 72892">(91) 7980072892</a></span>
								</li>
								<li>
									<span><img src="../images/wp.png" alt="whats app"></img></span>
									<span><a href="tel:+917980072892">(91) 7980072892</a>
										<a href="tel:+918240346055">(91) 8240346055</a>
									</span>
								</li>
								<li>
									<span><img src="../images/workhrs.png" alt="Working Hours"></img></span>
									<span>Working Hours : 10:00 am - 07:00 pm
										Working Days : Monday to Friday </span>
								</li>
							</ul>
						</div>
						<div class="FollowUs">
							<h3>Follow Us On :</h3>
							<ul class="sci">
								<li><a href="https://www.facebook.com/promora07/" target="_blank"><img src="../images/facebook24.png"
									alt="Facebook"></img></a></li>
								<li><a href="https://twitter.com/promora07/likes?s=09" target="_blank"><img src="../images/twitter24.png"
									alt="Twitter"></img></a></li>
								<li><a href="https://www.instagram.com/promora07/" target="_blank"><img src="../images/instagram24.png"
									alt="Instagram"></img></a></li>
								<li><a href="https://www.linkedin.com/company/promora07/" target="_blank"><img
									src="../images/linkedin24.png" alt="LinkedIn"></img></a></li>
								<li><a href="https://www.youtube.com/channel/UCElhxb5vK2ZCLd47acg2Owg/featured"
									target="_blank"><img src="../images/youtube24.png" alt="YouTube"></img></a></li>
							</ul>
						</div>
					</div>


					<div class="ContactForm">
						<h2>Share Your Contact Details</h2>
						<div class="formBox">
							<div class="inputBox w50">
								<input type="text" maxlength="25"  placeholder="First Name"  required >
								</input>
							</div>
							<div class="inputBox w50">
								<input type="text" maxlength="25" placeholder="Last Name" required>
								</input>
							</div>
							<div class="inputBox w50">
								<input type="email" maxlength="30" placeholder="Email Address" required>
								</input>
							</div>
							<div class="inputBox w50">
								<input type="tel" minlength="10" placeholder="Mobile Number" required>
								</input>
							</div>
							<div class="inputBox w100">
								<textarea name="Query" id="Query" required>
									Type your query here...</textarea>
							</div>
							<div class="inputBox w100">
								<input type="submit" value="SUBMIT"></input>
							</div>
						</div>

					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactPage;