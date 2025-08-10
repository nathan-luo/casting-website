import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'

// Sample projects data - easy to edit and extend
const projects = [
  {
    id: 1,
    title: "AI Agent Swarm",
    description: "Multi-agent system for collaborative problem solving",
    status: "Active",
    tech: ["Python", "LangChain", "GPT-4"],
    github: "https://github.com/casting-ai/agent-swarm"
  },
  {
    id: 2,
    title: "Memory Architecture",
    description: "Persistent memory system for LLM applications",
    status: "In Progress",
    tech: ["TypeScript", "Vector DB", "React"],
    github: "https://github.com/casting-ai/memory-arch"
  },
  {
    id: 3,
    title: "AutoGPT Extension",
    description: "Custom plugins for autonomous AI agents",
    status: "Complete",
    tech: ["Python", "AutoGPT", "Docker"],
    github: "https://github.com/casting-ai/autogpt-ext"
  },
  {
    id: 4,
    title: "Ethics Framework",
    description: "Governance tools for AI decision-making",
    status: "Research",
    tech: ["Python", "Ethics", "Governance"],
    github: "https://github.com/casting-ai/ethics"
  }
]

export default function ProjectsPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="transition-transform hover:scale-105">
              <Logo size="sm" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                About
              </Link>
              <Link href="/projects" className="text-orange-400 font-medium">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Articles
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 min-h-screen">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Student Projects
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Open source experiments and tools built by our community
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/50 transition-all hover:border-gray-700"
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.status === 'Active' ? 'bg-green-400/10 text-green-400' :
                      project.status === 'Complete' ? 'bg-blue-400/10 text-blue-400' :
                      project.status === 'Research' ? 'bg-purple-400/10 text-purple-400' :
                      'bg-yellow-400/10 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center p-8 bg-gray-900/30 border border-gray-800 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Have a project idea?
              </h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                We're always looking for passionate students to contribute. 
                Share your ideas and collaborate with our community.
              </p>
              <Link 
                href="https://github.com/casting-ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
              >
                Join Us on GitHub →
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}