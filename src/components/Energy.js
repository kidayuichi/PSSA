import React from "react";
import "../styles/energy.css";
import EnergyCost from "./EnergyCost";
import SkillType from "./SkillType";


export default function Energy(props) {

  return (
    <>
      <div className='link-containerEne'>
        <div className='linkEne'>
          <div className="energy">
            <EnergyCost
            // currentView={currentView}
            />
            </div>
          </div>
            <div className='linkEne'>
            <SkillType
            // phots={phots}
            />
          </div>
          
          </div>
    </>
  );
}
