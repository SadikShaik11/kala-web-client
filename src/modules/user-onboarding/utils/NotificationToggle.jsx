import React, { useState, useEffect } from "react";

const NotificationToggle = ({ message, type, setData, setError }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (message) {
      setIsVisible(true);
      // Hide the notification after 5 seconds
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        setData("");
        setError("");
      }, 5000);
      // Clear the timeout when the component unmounts or if the message changes
      return () => clearTimeout(timeoutId);
    }
  }, [message, setData, setError]);
  const notificationStyles = {
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
    default: "bg-gray-800 text-white",
  };

  return (
    <div
      className={`fixed top-4 text-sm right-4 bg-gray-800 ${
        notificationStyles[type]
          ? notificationStyles[type]
          : notificationStyles["default:"]
      } p-4 rounded-md ${
        isVisible ? "visible" : "invisible"
      }  md:w-45 xs:w-[230px]`}
    >
      {message}
    </div>
  );
};

export default NotificationToggle;
