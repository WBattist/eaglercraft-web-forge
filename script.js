
// Global variables
let playerCount = 0;
let isOnline = false;
let isLoading = true;

// Function to scroll to a section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Function to check server status
async function checkServerStatus() {
  try {
    console.log('Checking server status for java.eaglernet.net...');
    
    // Check server status for java.eaglernet.net
    const response = await fetch('https://api.mcsrvstat.us/2/java.eaglernet.net');
    const data = await response.json();
    
    console.log('Server status response:', data);
    
    if (data.online) {
      isOnline = true;
      playerCount = data.players?.online || 0;
      console.log(`Server is online with ${playerCount} players`);
    } else {
      isOnline = false;
      playerCount = 0;
      console.log('Server is offline');
    }
  } catch (error) {
    console.log('Server status check failed:', error);
    isOnline = false;
    playerCount = 0;
  } finally {
    isLoading = false;
    updateServerStatusDisplay();
  }
}

// Function to update the server status display
function updateServerStatusDisplay() {
  const statusIndicator = document.getElementById('statusIndicator');
  const statusText = document.getElementById('statusText');
  
  if (!statusIndicator || !statusText) return;
  
  // Update indicator
  statusIndicator.className = 'status-indicator';
  if (isLoading) {
    statusIndicator.classList.add('offline');
  } else {
    statusIndicator.classList.add(isOnline ? 'online' : 'offline');
  }
  
  // Update text
  if (isLoading) {
    statusText.textContent = 'CHECKING... • 0 Players';
  } else if (isOnline) {
    statusText.textContent = `ONLINE • ${playerCount} Players`;
  } else {
    statusText.textContent = 'OFFLINE • 0 Players';
  }
}

// Function to animate floating blocks
function animateBlocks() {
  const blocks = document.querySelectorAll('.minecraft-block');
  blocks.forEach((block, index) => {
    // Set random animation duration between 3-5 seconds
    const duration = 3 + Math.random() * 2;
    block.style.animationDuration = `${duration}s`;
  });
}

// Initialize the application
function init() {
  console.log('Initializing EaglerNetwork website...');
  
  // Check server status immediately
  checkServerStatus();
  
  // Check server status every 30 seconds
  setInterval(checkServerStatus, 30000);
  
  // Animate blocks
  animateBlocks();
  
  console.log('Website initialized successfully');
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
  // Add click effects to minecraft buttons
  const buttons = document.querySelectorAll('.minecraft-button');
  buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Add hover effects to cards
  const cards = document.querySelectorAll('.minecraft-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
