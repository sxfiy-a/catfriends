//import React, {Component} from 'react';
import React from 'react';
const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='cat' src={`https://robohash.org/${id}?set=set4&size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}



// class Card extends Component {
//     render() {
//         return (
//             <div>
//                 <img alt='cat' src='https://robohash.org/1?set=any&size=200x200'/>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>janedoe@email.com</p>
//             </div>
//             </div>
//         );
//     }
// }

export default Card;