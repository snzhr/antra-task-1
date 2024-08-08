import { useContext, useEffect, useState } from 'react';
import { MyContext } from './CustomProvider';

export const CustomSelector = (selector) => {
    const { state } = useContext(MyContext);
    const [selectedState, setSelectedState] = useState(selector(state));
  
    useEffect(() => {
      setSelectedState(selector(state));
    }, [state, selector]);
  
    return selectedState;
  };