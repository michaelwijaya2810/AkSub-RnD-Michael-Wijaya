import React from 'react';
import excal from '../img/excal.jpg';
import volt from '../img/volt.jpg';
import mag from '../img/mag.jpg';



class Cards extends React.Component{
    render(){
        return(
            <div className="card-list">
                <h1 style={{display: "flex", position: "relative", justifyContent: "center", fontSize: "50pt"}}>Warframe Starter</h1>
                <ul style={{display: "flex", flexDirection: "column", margin: "50px", boxAlign: "center", boxDirection: "normal"}}>
                    <li style={{backgroundColor: "dimGrey", color: "white",listStyleType: "none" ,border: "5px solid cyan", height: "auto", width: "auto", padding: "10px"}}>    
                        <label style={{fontWeight: "bold", fontSize: "30pt"}}>Excalibur</label>
                        <img src={excal} alt="excalibur" style={{display: "flex", position: "relative", justifyContent: "center" ,height: "300px", width: "auto"}}/>
                        <p>Master of gun and blade, Excalibur is a high mobility warframe with extreme swordmanship and marksmanship skills.</p>
                        <p>Excalibur's skills include Slash Dash, Radial Blind, Radial Javelin, and Exalted Blade.</p>
                    </li>
                    <li style={{backgroundColor: "dimGrey", color: "white", listStyleType: "none" ,border: "5px solid orange", height: "auto", width: "auto", padding: "10px"}}>    
                        <label style={{fontWeight: "bold", fontSize: "30pt"}}>Volt</label>
                        <img src={volt} alt="volt" style={{display: "flex", position: "relative", justifyItems: "center", height: "300px", width: "auto"}}/>
                        <p>With the ability to create and harness electrical elements, Volt is a highly versatile warframe with the ability to damage enemies, provide cover and crowd control capabilities, and boost allies' ranged and melee combat.</p>
                        <p>Volt's skills include Shock, Speed, Electric Shield, and Discharge.</p>
                    </li>
                    <li style={{backgroundColor: "dimGrey", color: "white",listStyleType: "none" ,border: "5px solid silver", height: "auto", width: "auto", padding: "10px"}}>    
                        <label style={{fontWeight: "bold", fontSize: "30pt"}}>Mag</label>
                        <img src={mag} alt="mag" style={{display: "flex", position: "relative", justifyContent: "center" ,height: "300px", width: "auto"}}/>
                        <p>A force to be reckoned with, Mag has full command of surrounding magnetic energy to manipulate and crush enemies.</p>
                        <p>Mag's skills include Pull, Magnetize, Polarize, and Crush</p>
                    </li>
                </ul>
            </div>
        );
    }
    
}
export default Cards;