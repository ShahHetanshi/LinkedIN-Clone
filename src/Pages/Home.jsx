import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from './Loader'; // Adjust the path as necessary
import HomeComponent from './HomeComponent'; // Adjust the path as necessary
import { auth } from './firebase'; // Adjust the path as necessary

export default function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return loading ? <Loader /> : <HomeComponent />;
}
