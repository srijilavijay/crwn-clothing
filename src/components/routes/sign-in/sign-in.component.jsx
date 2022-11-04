import SignUpForm from "../../sign-up-form/sign-up-form.component";

import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
// import FormInput from "../../form-input/form-input.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
};
 
  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>    
      {/* <FormInput /> */}
      <SignUpForm />
    </div>
  );
};
export default SignIn;
