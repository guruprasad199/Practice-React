import React, { useState } from 'react'

const CreateForm = () => {

    const [state, setState] = useState("")
    const [newstate, setNewstate] = useState("")

    const [submits, setSubmits] = useState([])

    const handlesubmit = (e) => {
        e.preventDefault();

        setSubmits([...submits, {state, newstate}]);
        // setSubmits([...submits, { newstate}]);




    }

    return(
        <div>
            <form>
                <label>First Name<input type="text" onChange={(e) => setState(e.target.value)}  value={state} /></label><br/>
                <label>Last Name<input type="text"  onChange={(e) => setNewstate(e.target.value)}  value={newstate}/></label><br/>
            </form>
            <button onClick={handlesubmit}>Submit</button>

            <div>
                {submits.map((item, id) => (
                    <div>
                    <span>
                       {item.state}<br/>
                        {item.newstate}

                    </span>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default CreateForm


{/* <div>
{submits.map((item, id) =>(
    <li>
        {item.newstate}
    </li>
))}
</div> */}




// import React, { useState } from "react";
// // import "./styles.css";
// function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <form>
//       <input
//         value={firstName}
//         onChange={e => setFirstName(e.target.value)}
//         placeholder="First name"
//         type="text"
//         name="firstName"
//         required
//       />
//       <input
//         value={lastName}
//         onChange={e => setLastName(e.target.value)}
//         placeholder="Last name"
//         type="text"
//         name="lastName"
//         required
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="Email address"
//         type="email"
//         name="email"
//         required
//       />
//       <input
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="Password"
//         type="password"
//         name="password"
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default Form;













// const contactArray = [
//     {
//         name: 'John',
//         email: 'john@email.com',
//         phone: '111-111-111'
//       },
//       {
//         name: 'Dave',
//         email: 'dave@email.com',
//         phone: '222-222-222'
//       }
//     ];
//     import React from "react";
//     class Form extends React.Component {
    
//       constructor() {
//         super();
//         this.state = {
//           contacts: contactArray
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
//       handleSubmit(e) {
//         e.preventDefault();
//         const
//         { contacts } = this.state,
//         name = this.refs.name.value,
//         email = this.refs.email.value,
//         phone = this.refs.phone.value;
//         this.setState({
//           contacts: [...contacts, {
//             name,
//             email,
//             phone
//           }]
//         }, () => {
//           this.refs.name.value = '';
//           this.refs.email.value = '';
//           this.refs.phone.value = '';
//         });
//       }
    
//       render() {
//         const { contacts } = this.state;
//         console.log('message',this.state.contacts);
//         return (   
//           <div>
//             <h2>Add Someone</h2>
//             <form onSubmit={this.handleSubmit}>
//               <input type="text" ref="name" placeholder="name" />
//               <input type="text" ref="email" placeholder="email" />
//               <input type="text" ref="phone" placeholder="phone" />
//               <button type="submit">Submit</button>
//             </form>
//             <h2>Exsiting contacts:</h2>
//             <ul>
//               {contacts.map((contact) => 
//                <li>{`Name: ${contact.name} Email: ${contact.email} Phone: ${contact.phone}`}</li>
//               )}
//             </ul>
//           </div>
//         ) 
//       }
//     }
// export default Form
    