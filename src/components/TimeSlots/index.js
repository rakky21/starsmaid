import { useState } from 'react';
import Calendar from 'react-calendar';

export default function Test(){
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}