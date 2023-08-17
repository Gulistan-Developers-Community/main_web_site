import React, { useState, useEffect, useRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';

export default function useFetchTodos() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState({});

  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTodos(docSnap.data());
          setTodos('todo' in docSnap.data() ? docSnap.data().todo : {});
        } else {
          setTodos({});
        }
      } catch (err) {
        setError('Failed to load todos');
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentUser.uid]);

  return { loading, error, todos, setTodos };
}
