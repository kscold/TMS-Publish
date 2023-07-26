import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import LayoutHeader from "./../../commons/layout/header/index";

const fakeFetchUserProfile = async () => {
  // Simulate the backend behavior by adding a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // For demonstration purposes, we'll just set a sample username here.
  return "John Doe";
};

const KakaoLoginSuccess = (): JSX.Element => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isKakaoResponseHandled, setIsKakaoResponseHandled] = useState(false);

  const handleKakaoResponse = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code && !isKakaoResponseHandled) {
      setIsKakaoResponseHandled(true);

      try {
        // In a real-world scenario, you should make a request to your backend to exchange the code for an access token
        // On the backend, you will need to use the code to get the access token from Kakao API.
        // After getting the access token, make another request to fetch the user's profile from Kakao API.

        const userProfile = await fakeFetchUserProfile();
        setUserName(userProfile);
      } catch (error) {
        console.log("Error fetching user profile", error);
      }
    }
  };

  useEffect(() => {
    handleKakaoResponse();
  }, []);

  return (
    <>
      {/* Pass the userName state as a prop to the LayoutHeader component */}
      <LayoutHeader userName={userName} />
    </>
  );
};

export default KakaoLoginSuccess;
