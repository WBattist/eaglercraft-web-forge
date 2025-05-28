
import { useEffect, useState } from 'react';

const Index = () => {
  const [playerCount, setPlayerCount] = useState(127);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Simulate dynamic player count
    const interval = setInterval(() => {
      setPlayerCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white minecraft-theme">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-green-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-400 pixel-font">
              EaglerNetwork
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-green-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('features')} className="hover:text-green-400 transition-colors">Features</button>
              <button onClick={() => scrollToSection('join')} className="hover:text-green-400 transition-colors">Join</button>
              <button onClick={() => scrollToSection('community')} className="hover:text-green-400 transition-colors">Community</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20"></div>
        
        {/* Animated Background Blocks */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-16 h-16 bg-green-500/10 border border-green-500/30 minecraft-block animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 pixel-font text-green-400 drop-shadow-lg">
            EaglerNetwork
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            The Ultimate Minecraft Experience in Your Browser
          </p>
          
          {/* Server Status */}
          <div className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 mb-8">
            <div className={`w-3 h-3 rounded-full mr-3 ${isOnline ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
            <span className="text-green-400 font-semibold">
              {isOnline ? 'ONLINE' : 'OFFLINE'} • {playerCount} Players
            </span>
          </div>

          <button
            onClick={() => scrollToSection('join')}
            className="bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 minecraft-button"
          >
            JOIN NOW
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pixel-font text-green-400">
            Server Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Downloads",
                description: "Play directly in your browser with EaglerCraft technology",
                icon: "🌐"
              },
              {
                title: "Custom Plugins",
                description: "Unique gameplay features and custom game modes",
                icon: "⚡"
              },
              {
                title: "Active Community",
                description: "Join hundreds of players in our vibrant community",
                icon: "👥"
              },
              {
                title: "PvP Arenas",
                description: "Compete in custom-built PvP battlegrounds",
                icon: "⚔️"
              },
              {
                title: "Creative Worlds",
                description: "Build amazing structures in our creative realms",
                icon: "🏗️"
              },
              {
                title: "24/7 Uptime",
                description: "Reliable server with excellent performance",
                icon: "🔧"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/80 border border-green-500/30 rounded-lg p-6 hover:border-green-500/60 transition-all duration-300 hover:transform hover:scale-105 minecraft-card"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pixel-font text-green-400">
            How to Join
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/80 border border-green-500/30 rounded-lg p-8 minecraft-card">
                <h3 className="text-2xl font-bold mb-4 text-green-400">EaglerCraft (Browser)</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    Open your web browser
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    Visit eaglercraft.com
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    Add server: <code className="bg-gray-700 px-2 py-1 rounded text-green-400">eaglernet.org</code>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    Click "Join Server" and start playing!
                  </li>
                </ol>
              </div>
              
              <div className="bg-gray-800/80 border border-green-500/30 rounded-lg p-8 minecraft-card">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Minecraft Java Edition</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    Launch Minecraft Java Edition
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    Go to "Multiplayer"
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    Add server: <code className="bg-gray-700 px-2 py-1 rounded text-green-400">play.eaglernet.org</code>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-gray-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    Join and explore our world!
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 pixel-font text-green-400">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Connect with fellow players, get updates, and participate in events
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 minecraft-button">
              Discord Server
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 minecraft-button">
              YouTube Channel
            </a>
            <a href="#" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 minecraft-button">
              Forums
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-green-500/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xl font-bold text-green-400 mb-4 pixel-font">EaglerNetwork</div>
          <p className="text-gray-400 mb-4">The Ultimate Minecraft Browser Experience</p>
          <p className="text-gray-500 text-sm">
            © 2024 EaglerNetwork. Not affiliated with Mojang or Microsoft.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
