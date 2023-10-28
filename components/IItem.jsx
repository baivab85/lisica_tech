import React from "react";
import FoodData from "./Food"; // Assuming FoodData is the correct import name

const IItem = () => {
    const cardStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // Create four equal-width columns
        gap: "24px", // Adjust the gap between cards as needed
    };

    const cardContainerStyle = {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Default box shadow
        padding: "16px", // Add some padding to the card container
        transition: "box-shadow 0.3s ease", // Add a transition for smooth hover effect
    };

   
    
    return (
        <div style={cardStyle}>
            {FoodData.map((elem) => {
                const { id, name, category, img, price,Content } = elem;

                const handleCardMouseEnter = (e) => {
                    // Add the hover style when the mouse enters the card
                    e.currentTarget.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
                };

                const handleCardMouseLeave = (e) => {
                    // Remove the hover style when the mouse leaves the card
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                };

                
                return (
                    <div
                        className="card"
                        style={cardContainerStyle}
                        key={id}
                        onMouseEnter={handleCardMouseEnter}
                        onMouseLeave={handleCardMouseLeave}
                    >
                        <img src={img} alt={name} />
                        <p>Hospital: {name}</p>
                        <p>Department: {category}</p>
                        <p>Standard Rating: {price}</p>
                        <button className="btn btn-primary"><a href={`myModal-${id}`}
						class="hvr-icon-hang" data-toggle="modal" data-target={`#myModal-${id}`} style={{color:'white',textDecoration:'none'}}>Proceed</a></button>
                    </div>
                );
            })}
        <div class="modal video-modal fade" id="myModal-1" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO CARDIAC DEPARTMENT</b>
						</h3>
						<img src="img/cardio.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>.The basic functioning of the cardiovascular system includes the way the heart processes oxygen and nutrients in the blood, which is called coronary circulation.
                         The circulation system consists of coronary arteries and coronary veins.</i>
						</p>
					</div>
				</section>
			</div>
		</div>
	</div>
    <div class="modal video-modal fade" id="myModal-2" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO NEURO DEPARTMENT</b>
						</h3>
						<img src="img/neuro.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>.Neurology is the branch of medicine that deals with the study and treatment of nervous system disorders.
                        The nervous system itself is composed of the central nervous nervous system and the peripheral nervous system..</i>
						</p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
       
    <div class="modal video-modal fade" id="myModal-3" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO GASTRIC DEPARTMENT</b>
						</h3>
						<img src="img/gas.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Gastroenterology is the study of the normal function and diseases of the esophagus, stomach, small intestine, colon and rectum, pancreas, 
                       gallbladder, bile ducts and liver.</i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
    
    <div class="modal video-modal fade" id="myModal-4" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO ORTHOPAEDIC DEPARTMENT</b>
						</h3>
						<img src="img/ortho.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Orthopedic physicians (sometimes also called orthopaedic physicians) are doctors who specialize in injuries of the musculoskeletal system — which includes bones, joints, ligaments, nerves, and tendons. 
                       The field of orthopedics was first developed to treat</i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>

	<div class="modal video-modal fade" id="myModal-3" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO GASTRIC DEPARTMENT</b>
						</h3>
						<img src="img/gas.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Gastroenterology is the study of the normal function and diseases of the esophagus, stomach, small intestine, colon and rectum, pancreas, 
                       gallbladder, bile ducts and liver.</i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
    
    <div class="modal video-modal fade" id="myModal-5" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO ONCHOLOGY DEPARTMENT</b>
						</h3>
						<img src="img/oncho.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Oncology is the study of cancer. An oncologist is a doctor who treats cancer and provides medical care for a person diagnosed with cancer. An oncologist may also be called a cancer specialist. The field of oncology has 3 major areas based on treatments: medical oncology, radiation oncology, and surgical oncology.
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
	<div class="modal video-modal fade" id="myModal-6" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO GYNOCHOLOGY  DEPARTMENT</b>
						</h3>
						<img src="img/gyne.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Gynecology is a medical discipline dedicated to female health care concerns including the development, diagnosis, prevention, and therapy of disorders and diseases distinct to the female reproductive system.
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
	<div class="modal video-modal fade" id="myModal-7" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO DERMATOLOGY  DEPARTMENT</b>
						</h3>
						<img src="img/derm.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems.
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>

	<div class="modal video-modal fade" id="myModal-8" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO OPHTHALMOLOGY DEPARTMENT</b>
						</h3>
						<img src="img/opth.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Pediatrics (also spelled paediatrics or pædiatrics) is the branch of medicine that involves the medical care of infants, children, adolescents, and young adults.
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
	<div class="modal video-modal fade" id="myModal-9" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO PEDRIATIC DEPARTMENT</b>
						</h3>
						<img src="img/ped.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Pediatrics (also spelled paediatrics or pædiatrics) is the branch of medicine that involves the medical care of infants, children, adolescents, and young adults.
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
	<div class="modal video-modal fade" id="myModal-10" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO ENDOCRINOLOGY DEPARTMENT</b>
						</h3>
						<img src="img/end.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>endocrinology, medical discipline dealing with the role of hormones and other biochemical mediators in regulating bodily functions and with the treatment of imbalances of these hormones.
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
	<div class="modal video-modal fade" id="myModal-11" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO NEPHROLOGY DEPARTMENT</b>
						</h3>
						<img src="img/nep.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Nephrology is a specialty of adult internal medicine and pediatric medicine that concerns the study of the kidneys, specifically normal kidney function and kidney disease, the preservation of kidney health, and the treatment of kidney disease, from diet and medication to renal replacement therapy. .
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
	<div class="modal video-modal fade" id="myModal-12" tabindex="-1"
		role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">

					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<section>
					<div class="modal-body">
						<h3 class="agileinfo_sign">
							<b>APOLLO PULMOMOLOGY DEPARTMENT</b>
						</h3>
						<img src="img/pul.jpg" alt=" " class="img-responsive" />
						<p>
                       <i>Pulmonology is a sub-speciality of Internal Medicine that deals with the health of the respiratory tract. In particular, the health of the lower airway, lungs and breathing control as well as their effect on the oxygenation of blood. The term “Pulmonology” has its origins in the Latin language..
                        </i></p>
                        <button className="btn btn-info">Book Appointment with Apollo Doctor</button>
                        <p></p>
                        <button className="btn btn-primary">Buy Medicines and Essentials</button>
					</div>
				</section>
			</div>
		</div>
	</div>
        </div>
    );
};

export default IItem;
