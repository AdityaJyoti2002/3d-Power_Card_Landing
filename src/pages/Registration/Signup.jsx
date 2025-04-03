import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
// import Loader from "../../components/loader/Loader";
import styled from "styled-components";
import { auth, fireDB } from "../../config/firebase";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #d81b60;
`;

const FormContainer = styled.div`
  background: #fce4ec; /* Light pink background */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #d81b60; /* Pink color */
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #f48fb1; /* Pink border */
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: #f06292; /* Placeholder color */
  }

  &:focus {
    border-color: #d81b60; /* Darker pink on focus */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background-color: #d81b60; /* Pink background */
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c2185b; /* Darker pink on hover */
  }
`;

const LinkText = styled.h2`
  text-align: center;
  color: black;
`;

const Signup = () => {
//   const context = useContext(myContext);
//   const { loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // User Signup State 
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  /**========================================================================
   *                          User Signup Function 
  *========================================================================**/

  const userSignupFunction = async () => {
    // validation 
    if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
      toast.error("All Fields are required");
      return; // Exit if validation fails
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      }

      // create user Reference
      const userReference = collection(fireDB, "user");

      // Add User Detail
      await addDoc(userReference, user);

      setUserSignup({
        name: "",
        email: "",
        password: ""
      });

      toast.success("Signup Successfully");

 
      navigate('/login');
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <Container>
      {/* {loading && <Loader />} */}
      {/* Signup Form  */}
      <FormContainer>
        {/* Top Heading  */}
        <Title>Signup</Title>

        {/* Input One  */}
        <Input
          type="text"
          placeholder='Full Name'
          value={userSignup.name}
          onChange={(e) => {
            setUserSignup({
              ...userSignup,
              name: e.target.value
            });
          }}
        />

        {/* Input Two  */}
        <Input
          type="email"
          placeholder='Email Address'
          value={userSignup.email}
          onChange={(e) => {
            setUserSignup({
              ...userSignup,
              email: e.target.value
            });
          }}
        />

        {/* Input Three  */}
        <Input
          type="password"
          placeholder='Password'
          value={userSignup.password}
          onChange={(e) => {
            setUserSignup({
              ...userSignup,
              password: e.target.value
            });
          }}
        />

        {/* Signup Button  */}
        <Button
          type='button'
          onClick={userSignupFunction}
        >
          Signup
        </Button>

        <LinkText>
          Have an account? <Link className='text-pink-500 font-bold' to={'/login'}>Login</Link>
        </LinkText>
      </FormContainer>
    </Container>
  );
}

export default Signup;