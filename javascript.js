
  const UI = {
    init() {
      this.scaleUI();
      this.addEventListeners();
      window.addEventListener('resize', () => this.scaleUI());
    },
  
    scaleUI() {
      const baseWidth = 1280;
      const baseHeight = 720;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
  
      const scaleX = screenWidth / baseWidth;
      const scaleY = screenHeight / baseHeight;
      const scale = Math.min(scaleX, scaleY);
  
      const ui = document.getElementById('game-ui');
      ui.style.transform = `scale(${scale})`;
  
      const scaledWidth = baseWidth * scale;
      const scaledHeight = baseHeight * scale;
      ui.style.left = `${(screenWidth - scaledWidth) / 2}px`;
      ui.style.top = `${(screenHeight - scaledHeight) / 2}px`;
    },
  
    addEventListeners() {

      }
    };

        UI.init();
