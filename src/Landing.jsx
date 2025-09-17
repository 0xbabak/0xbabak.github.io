import React, { useState } from 'react';

const Landing = () => {
  const [activeSection, setActiveSection] = useState('about');

  const blogPosts = [
    {
      id: 1,
      title: "Efficient Exploration in Sparse Reward Environments",
      date: "2024.03.15",
      preview: "Novel approaches to intrinsic motivation and curiosity-driven learning in challenging RL settings..."
    },
    {
      id: 2,
      title: "Self-Supervised Representation Learning for Control",
      date: "2024.02.28",
      preview: "How unsupervised pre-training can dramatically improve sample efficiency in robotic control tasks..."
    },
    {
      id: 3,
      title: "Bridging the Sim-to-Real Gap with Representation Learning",
      date: "2024.02.10",
      preview: "Techniques for learning transferable representations that work across simulated and real environments..."
    }
  ];

  const works = [
    {
      title: "Curiosity-Driven Exploration in Sparse Rewards",
      type: "Research",
      link: "#",
      description: "Novel intrinsic motivation mechanisms for RL agents in environments where rewards are rare"
    },
    {
      title: "Self-Supervised Representation Learning for Control",
      type: "Project",
      link: "#",
      description: "Learning meaningful state representations without labels for improved sample efficiency"
    },
    {
      title: "Meta-Learning for Few-Shot RL",
      type: "Publication",
      link: "#",
      description: "How agents can learn to learn: adapting quickly to new tasks with minimal experience"
    }
  ];

  const NavButton = ({ section, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(section)}
      className={`text-sm tracking-wide transition-colors duration-200 ${
        isActive ? 'text-black border-b border-black' : 'text-gray-500 hover:text-black'
      } bg-transparent border-0 border-b-2 border-transparent pb-1`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <h1 className="text-2xl font-normal mb-8">Babak Ranjbaran</h1>
          <nav className="flex space-x-12">
            <NavButton 
              section="about" 
              label="About" 
              isActive={activeSection === 'about'} 
              onClick={setActiveSection} 
            />
            <NavButton 
              section="blog" 
              label="Blog" 
              isActive={activeSection === 'blog'} 
              onClick={setActiveSection} 
            />
            <NavButton 
              section="work" 
              label="Work" 
              isActive={activeSection === 'work'} 
              onClick={setActiveSection} 
            />
            <NavButton 
              section="contact" 
              label="Contact" 
              isActive={activeSection === 'contact'} 
              onClick={setActiveSection} 
            />
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {activeSection === 'about' && (
          <div className="space-y-8">
            <section>
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  I am a Computer Engineering student at Yildiz Technical University with primary research interests in Self-Supervised Learning (SSL) and Reinforcement Learning (RL). Currently, I am focusing on improving the effectiveness of Multi-Agent Reinforcement Learning (MARL) algorithms.
                </p>
                <p>
                  Outside of my studies, I'm a big fan of Formula 1 and motorsports. I also have a strong interest in computer hardware, especially building and experimenting with different components.
                </p>
                <div className="pt-4">
                  <a 
                    href="/CV.pdf" 
                    download="Babak_Ranjbaran_CV.pdf"
                    className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 hover:border-gray-400 transition-colors duration-200 hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'blog' && (
          <div className="space-y-12">
            <h2 className="text-xl font-normal">Recent Posts</h2>
            <p className="text-sm text-gray-500">No posts</p>
          </div>
        )}

        {activeSection === 'work' && (
          <div className="space-y-12">
            <h2 className="text-xl font-normal">Selected Work</h2>
            <p className="text-sm text-gray-500">No work</p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-8">
            <h2 className="text-xl font-normal">Get in Touch</h2>
            <div className="space-y-4 text-sm">
              <p>
                <span className="text-gray-500">Email:</span>{' '}
                <a href="mailto:babakranjbaran0@gmail.com" className="hover:underline">
                  babakranjbaran0@gmail.com
                </a>
              </p>
              <p>
                <span className="text-gray-500">GitHub:</span>{' '}
                <a href="https://github.com/0xbabak" className="hover:underline">
                  github.com/0xbabak
                </a>
              </p>
              <p>
                <span className="text-gray-500">Twitter:</span>{' '}
                <a href="https://twitter.com/babak_rb" className="hover:underline">
                  @babak_rb
                </a>
              </p>
              <p>
                <span className="text-gray-500">LinkedIn:</span>{' '}
                <a href="https://www.linkedin.com/in/babak-ranjbaran-126796240/" className="hover:underline">
                  linkedin.com/in/babak-ranjbaran
                </a>
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <p className="text-xs text-gray-500">
            © 2025 Babak Ranjbaran.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;