
import {SignInWithGooglePopup, createUserDocumentFromAuth} from '../../../utils/firebase/firebase.utils';


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await SignInWithGooglePopup();
        createUserDocumentFromAuth(user);   
    }
    return(
        <div>
            <h1>This is the Sign-in Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    );
};
export default SignIn;