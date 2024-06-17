//https://localhost:3000/auth/name
const SigninPage = ({params} : {params: {'sign-in':string[]}}) => {
    console.log(params)
    // console.log(params["sign-in"][0])
    // console.log(params["sign-in"][1])
 
    return (
        <div>             
            SigninPage
        </div>
    );
};

export default SigninPage;