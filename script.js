 
 
 const body = document.body;
    const button = document.getElementById('toggleBtn');

    
    const originTheme = localStorage.getItem('theme') || 'light';
    setTheme(originTheme);

    button.addEventListener('click', () => {
      const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      animateButton(button);
    });

    function setTheme(theme) {
      body.classList.remove('light-theme', 'dark-theme');
      body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
    }

    function animateButton(btn) {
      btn.style.transform = 'scale(1.1)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 150);
    }
