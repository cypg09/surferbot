import React from "react";


function toggleDarkMode() {
  let theme = document.getElementById('theme')
  if (theme.classList.contains('dark')) {
    theme.classList.remove('dark');
  } else {
    theme.classList.add('dark');
  }
}

function DarkModeToggler() {
  return (
    <button className="text-white dark:text-dark m-1 py-1 px-3 text-center border rounded-md hover:bg-gray-700" onClick={toggleDarkMode}>Change theme</button>
  );
}

export default DarkModeToggler;