import amazon from "./amazondeforestation.png"
import globalForest from "./globalforestcoilation.png";
import greenpeace from "./greenpeacedeforestaion.png";
import savetrees from "./savetrees.png";
import wealth from "./welthiestcampaigns.png";
import { useState } from "react";
function Campaign (){
    const [CampaignModal, setCampaignModal] = useState("");
    const [modal, setModal] = useState(false);
    const campaign_list = [
        {
            title : 1,
            info : "Campaign 1",
            buttonName: "Join Campaign",
            pictureAddress: amazon,

        },
        {
            title : 2,
            info : "Campaign 2",
            buttonName: "Join Campaign",
            pictureAddress: globalForest,
        },
        {
            title : 3,
            info : "Campaign 3",
            buttonName: "Join Campaign",
            pictureAddress: greenpeace,
        },
        {
            title : 4,
            info : "Campaign 4",
            buttonName: "Join Campaign",
            pictureAddress: savetrees,
        },
        {
            title : 5,
            info : "Campaign 5",
            buttonName: "Join Campaign",
            pictureAddress: wealth,
        }
    ]
    const handleClick = () => {
        const name = prompt("Enter your fullname:");
        const email = prompt("Enter your email:");
        const number = prompt("Enter your number:");
        const address = prompt("Enter your address:");
        const postcode = prompt("Enter your PostCode:");
        const city = prompt("Enter your city:");
        const country = prompt("Enter your country:");
        const volunteer = prompt("Do you want to volunteer for this Campaign?");

        if (name && email && number) {
            if (volunteer) {
                setCampaignModal(
                    "You have successfully joined the Campaign and volunteered for it."
                );
            } else {
                setCampaignModal("You have successfully joined the Campaign.");
            }
        } else {
            setCampaignModal("Please check your details and try again.");
        }
    }
    const toggleModal = () => {
        setModal(!modal);
    };
    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
   
    return (
        <>
        <h2 style={{textAlign: "center"}}>Campaigns</h2>
         <div className="main-container">
                {
                    campaign_list.map(item => {
                        return (
                            <div className="workshop-container" style={{
                                backgroundImage: `url(${item.pictureAddress})`,
                                backgroundRepeat: 'no-repeat',
                              
                            }} onClick={toggleModal}>
                                <h2 style={{margin : "auto"}}>{item.info}</h2>
                                {
                                    modal && (
                                        <div className="modal">
                                            <div onClick={toggleModal}  className="overlay">
                                                <div className="modal-content">
                                                    <h2>Campaign Details: </h2>
                                                    <p>
                                                        Tree Campaign is a project which aims to plant one trillion trees worldwide.
                                                         It seeks to repopulate the world's trees and combat climate change as a nature-based solution.
                                                         The project was launched at PlantAhead 2018 in Monaco by Plant-for-the-Planet.
                                                         In the fall of 2018, the project's official website was published in order to register, 
                                                         monitor, and donate trees to reforestation projects around the world
                                                    </p>
                                                    <button className="close-modal" onClick={toggleModal}>
                                                        OK
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="image" style={{
                                    overflow: "hidden",
                                    height: "70%",
                                    width: "400px",
                                    margin: "auto"
                                }} >
                                    <img src={item.pictureAddress} alt="not found" />
                                </div>
                             
                                <div className="btn" style={{textAlign: "center"}}>
                                    <button style={{marginTop: "5px"}} onClick={handleClick} >{item.buttonName}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Campaign;