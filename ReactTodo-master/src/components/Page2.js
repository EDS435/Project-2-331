import React from 'react';
import TeamList from "./teamList";
import InitiativeList from "./initiativeList";

const Page2 = props => {

    return (
        <div className="page-two">
            <h2>Current Team Tasks To Do</h2>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <TeamList title= "Players"
                                  stateList = "players"
                                  characterType = "player"
                        />
                    </div>

                    <div className="col-sm-4">
                        <InitiativeList/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page2;