import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-2_SRXGxiTAT', // Your user pool id here
    ClientId: '3pj39oc5h5qt89ctuibq9i30e0' // Your client id here
  };

  export default new CognitoUserPool(poolData);