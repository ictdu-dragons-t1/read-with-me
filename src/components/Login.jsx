import { signIn } from "@junobuild/core";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import InternetIdentityLogo from "../assets/images/internetIdentity.png";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    signIn().then(() => {
      navigate("/home");
    });
  };

  return (
    <div className="group">
      <Button
        onClick={handleSignIn}
        variant="outline"
        size="lg"
        color="white"
        leftSection={<img src={InternetIdentityLogo} className="h-10" />}
        className="group-hover:bg-white transition-all border-2"
      >
        <p className="text-white font-medium text-base group-hover:text-black transition-all">
          Login with Internet Identity
        </p>
      </Button>
    </div>
  );
};

export default Login;
