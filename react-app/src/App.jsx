import { useState } from 'react'

const projects = [
  { title: 'Code Snippet Management', url: 'https://jeonck.github.io/code-snippet-mgmt/', category: 'Development Tools' },
  { title: 'Helm Values Hub', url: 'https://jeonck.github.io/helm-values-hub/', category: 'DevOps' },
  { title: 'Spring Boot Hub', url: 'https://jeonck.github.io/spring-boot-hub/', category: 'Backend' },
  { title: 'Auto Compound Interest', url: 'https://jeonck.github.io/auto-compound-interest/', category: 'Finance' },
  { title: 'React Hub', url: 'https://jeonck.github.io/react-hub/', category: 'Frontend' },
  { title: 'Helm Values Explorer', url: 'https://jeonck.github.io/helm-values-explorer/', category: 'DevOps' },
  { title: 'LLM Hub', url: 'https://jeonck.github.io/llm-hub/', category: 'AI/ML' },
  { title: 'Streamlit Hub', url: 'https://jeonck.github.io/streamlit-hub/', category: 'Data Science' },
  { title: 'Install Assistant', url: 'https://jeonck.github.io/install-assistant/', category: 'Development Tools' },
  { title: 'Misconceptions About Security', url: 'https://jeonck.github.io/misconceptions-about-security/', category: 'Security' },
  { title: 'CISSP 8 Domains', url: 'https://jeonck.github.io/CISSP-8-domains/', category: 'Security' },
  { title: 'Model Context Protocol', url: 'https://jeonck.github.io/modelContextProtocol-concept-and-component-and-example/', category: 'AI/ML' },
  { title: 'K8s Manifest Showcase', url: 'https://jeonck.github.io/k8s-manifest-showcase/', category: 'DevOps' },
  { title: 'DevOps Lead Interview', url: 'https://jeonck.github.io/devops-lead-interview/', category: 'Career' },
  { title: 'Mermaid Diagram Viewer', url: 'https://jeonck.github.io/mermaid-diagram-viewer/', category: 'Development Tools' },
  { title: 'Semiconductor Terminology', url: 'https://jeonck.github.io/semiconword/', category: 'Education' },
  { title: 'React From Scratch', url: 'https://jeonck.github.io/react-from-scratch/', category: 'Frontend' },
  { title: 'Critical Thinking Framework', url: 'https://jeonck.github.io/critical-thinking/', category: 'Business' },
  { title: 'Lean Canvas Generator', url: 'https://jeonck.github.io/LeanCanvas/', category: 'Business' },
  { title: 'Grewords', url: 'https://jeonck.github.io/grewords/', category: 'Web Development' },
  { title: 'Project Pro', url: 'https://jeonck.github.io/projectpro/', category: 'Project Mgmt' },
  { title: 'MCP Hub', url: 'https://jeonck.github.io/mcp-hub/', category: 'Web Development' },
  { title: 'IT Audit Guide', url: 'https://jeonck.github.io/it-audit-guide/', category: 'Web Development' },
  { title: 'Data Quality Management Guide Portal', url: 'https://jeonck.github.io/data-quality-management-guide-portal/', category: 'Web Development' },
  { title: 'AI Expert Quiz', url: 'https://jeonck.github.io/ai-expert-quiz/', category: 'Education' },
]

const categories = ['All', ...[...new Set(projects.map(p => p.category))].sort()]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          🚀 Jeonck's Project Hub
        </h1>
        <p className="text-white/80 text-center mb-12 text-lg">
          개발 프로젝트 및 리소스 모음
        </p>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="프로젝트 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/30 text-purple-200">
                  {project.category}
                </span>
                <svg
                  className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm truncate">
                {project.url}
              </p>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-white/60 mt-12">
            <p className="text-lg">검색 결과가 없습니다.</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center text-white/50 text-sm">
          <p>총 {projects.length}개의 프로젝트 | 현재 {filteredProjects.length}개 표시</p>
        </div>
      </div>
    </div>
  )
}

export default App
