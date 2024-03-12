import tree from "./tree.png";
import trees from "./trees.png";
import poor from "./poorfamily.png";
import land from "./landdeforestation.png";
import shifting from "./shiftingcultivation.png";
import eco from "./ecosystemservices.png";
import { useState } from "react";
import "./workshop.css";
import "./Modal.css";
function Workshops() {
    const [workshopModal, setWorkshopModal] = useState("");
    const [modal, setModal] = useState(false);
    const workshop_list = [
        {
            title : 1,
            info : "Workshop 1",
            buttonName: "Join Workshop",
            pictureAddress: tree,

        },
        {
            title : 2,
            info : "Workshop 2",
            buttonName: "Join Workshop",
            pictureAddress: trees,
        },
        {
            title : 3,
            info : "Workshop 3",
            buttonName: "Join Workshop",
            pictureAddress: poor,
        },
        {
            title : 4,
            info : "Workshop 4",
            buttonName: "Join Workshop",
            pictureAddress: land,
        },
        {
            title : 5,
            info : "Workshop 5",
            buttonName: "Join Workshop",
            pictureAddress: shifting,
        },
        {
            title : 6,
            info : "Workshop 6",
            buttonName: "Join Workshop",
            pictureAddress: eco,
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
        const volunteer = prompt("Do you want to volunteer for this workshop?");

        if (name && email && number) {
            if (volunteer) {
                setWorkshopModal(
                    "You have successfully joined the workshop and volunteered for it."
                );
            } else {
                setWorkshopModal("You have successfully joined the workshop.");
            }
        } else {
            setWorkshopModal("Please check your details and try again.");
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
        <h2 style={{textAlign: "center"}}>Workshops</h2>
            <div className="main-container">
                {
                    workshop_list.map(item => {
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


export default Workshops;