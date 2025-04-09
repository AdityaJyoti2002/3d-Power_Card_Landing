import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import styled from "styled-components";
import { auth, fireDB } from "../../config/firebase";
// import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

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

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  /**========================================================================
   *                          User Login Function 
  *========================================================================**/

  const userLoginFunction = async () => {
    if (!userLogin.email || !userLogin.password) {
      toast.error("All fields are required");
      return;
    }
  
    try {
      console.log("🚀 Attempting to log in...");
  
      const userCredential = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
      const user = userCredential.user;
      console.log("✅ User Logged In:", user);
  
      // 🔥 Firestore Query: Find user by UID
      const q = query(collection(fireDB, "user"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        console.error("❌ No user found with this UID in Firestore.");
        toast.error("User not found in Firestore. Please contact support.");
        return;
      }
  
      // ✅ Get User Data
      let userData;
      querySnapshot.forEach((doc) => {
        userData = doc.data();
      });
  
      console.log("✅ Firestore User Data:", userData);
  
      // 🔑 Extract Role
      const role = userData?.role;
      console.log("🔑 User Role:", role);
  
      if (!role) {
        console.error("⚠️ User role is missing in Firestore document.");
        toast.error("User role is missing. Please contact support.");
        return;
      }
  
      // 🌍 Navigate According to Role
      switch (role) {
        case "admin":
          navigate("/dashboard");
          break;
        case "user":
          navigate("/");
          break;
        case "editor":
          navigate("/editor-panel");
          break;
        default:
          toast.error("Unauthorized role. Access denied.");
      }
  
      // Reset Form
      setUserLogin({ email: "", password: "" });
  
    } catch (error) {
      console.error("❌ Login error:", error.message);
      toast.error(error.message || "Login failed. Please check your credentials.");
    }
  };
  

  return (
    <Container>
      {/* Login Form  */}
      <FormContainer>
        <Title>Login</Title>

        {/* Input for Email */}
        <Input
          type="email"
          placeholder="Email Address"
          value={userLogin.email}
          onChange={(e) => {
            setUserLogin({
              ...userLogin,
              email: e.target.value,
            });
          }}
        />

        {/* Input for Password */}
        <Input
          type="password"
          placeholder="Password"
          value={userLogin.password}
          onChange={(e) => {
            setUserLogin({
              ...userLogin,
              password: e.target.value,
            });
          }}
        />

        {/* Login Button */}
        <Button type="button" onClick={userLoginFunction}>
          Login
        </Button>

        {/* Link to Signup Page */}
        <LinkText>
          Don't have an account?{" "}
          <Link className="text-pink-500 font-bold" to="/signup">
            Signup
          </Link>
        </LinkText>
      </FormContainer>
    </Container>
  );
};

export default Login;
