import { useState } from 'react';

export function usePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const handleSignUpClick = () => {
    setShowPopup(true);
    setIsRegisterForm(true);
  };

  const handleSignInClick = () => {
    setShowPopup(true);
    setIsRegisterForm(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, isRegisterForm, handleSignUpClick, handleSignInClick, handleClosePopup };
}
