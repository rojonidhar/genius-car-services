import React from 'react';

const Blogs = () => {
    return (
       
         <div>
            <div>
            <h3>Difference between authorization and authentication ?</h3>
            <p>Authentication uses to verifies the identity of a user or service.It helps us to <br></br>secure our website.
           And authorization means to determines the user access right.</p>
            
            </div> 
            <div>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p> Using firebase provides me many backend services, easy-to-use SDKs, and <br></br>ready-made UI libraries to authenticate users to my website.There are other ways to <br></br>authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            
            </div> 
            <div>
            <h3>What other services does firebase provide other than authentication ?</h3>
            <p>There are other services firebase provide other than authentication like Cloud <br></br>Firestore, build serverless, secure apps at global scale,realtime Database,<br></br>gmp_auth Cloud Messaging. </p>
            
            </div> 
         </div>

 

 
       
    );
};

export default Blogs;