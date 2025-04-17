import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle({ onToggle }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    onToggle(!darkMode);
  };

  return (
    <Button variant={darkMode ? 'light' : 'dark'} onClick={handleToggle} className="rounded-pill">
      {darkMode ? <Sun size={18} /> : <Moon size={18} />} {darkMode ? ' Light' : ' Dark'}
    </Button>
  );
}

export default ThemeToggle;
