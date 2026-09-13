export interface Technology {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  rating: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
}

// export const techList: Technology[] = [
//   { id: '1', name: 'React', description: 'A declarative, component-based JavaScript library for building modern user interfaces.', category: 'Frontend', difficulty: 'Beginner-Friendly', rating: '4.9', badge: 'Popular', badgeColor: 'bg-cyan-50 text-cyan-600', icon: '⚛️' },
//   { id: '2', name: 'Vue.js', description: 'An approachable, performant, and versatile framework for building web user interfaces.', category: 'Frontend', difficulty: 'Beginner-Friendly', rating: '4.8', badge: 'Versatile', badgeColor: 'bg-emerald-50 text-emerald-600', icon: '💚' },
//   { id: '3', name: 'Svelte', description: 'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.', category: 'Frontend', difficulty: 'Intermediate', rating: '4.8', badge: 'Fast', badgeColor: 'bg-amber-50 text-amber-600', icon: '🔥' },
//   { id: '4', name: 'Next.js', description: 'The React framework for full-stack web applications with hybrid static & server rendering.', category: 'Frontend', difficulty: 'Intermediate', rating: '4.9', icon: '▲' },
//   { id: '5', name: 'Node.js', description: 'An asynchronous event-driven JavaScript runtime built on Chromes V8 engine.', category: 'Backend', difficulty: 'Intermediate', rating: '4.8', badge: 'Standard', badgeColor: 'bg-emerald-50 text-emerald-600', icon: '🟩' },
//   { id: '6', name: 'PostgreSQL', description: 'A powerful, open-source object-relational database system with proven reliability.', category: 'Database', difficulty: 'Intermediate', rating: '4.9', badge: 'Top SQL', badgeColor: 'bg-blue-50 text-blue-600', icon: '🐘' },
//   { id: '7', name: 'Redis', description: 'In-memory data structure store used as a high-speed database, cache, and message broker.', category: 'Database', difficulty: 'Intermediate', rating: '4.8', badge: 'Cache', badgeColor: 'bg-rose-50 text-rose-600', icon: '📦' },
//   { id: '8', name: 'JavaScript', description: 'The versatile, ubiquitous scripting language powering dynamic behavior across the web.', category: 'Language', difficulty: 'Beginner-Friendly', rating: '4.9', badge: 'Ubiquitous', badgeColor: 'bg-amber-50 text-amber-600', icon: '🟨' },
//   { id: '9', name: 'TypeScript', description: 'A strongly typed programming language that builds on JavaScript for robust tooling.', category: 'Language', difficulty: 'Intermediate', rating: '4.9', badge: 'Essential', badgeColor: 'bg-blue-50 text-blue-600', icon: '🟦' },
//   { id: '10', name: 'Java', description: 'A secure, object-oriented programming language designed for portability and scale.', category: 'Language', difficulty: 'Intermediate', rating: '4.6', badge: 'Robust', badgeColor: 'bg-indigo-50 text-indigo-600', icon: '☕' },
//   { id: '11', name: 'Tailwind CSS', description: 'A utility-first CSS framework packed with classes that can be composed to build custom UI.', category: 'Styling', difficulty: 'Beginner-Friendly', rating: '4.9', badge: 'Modern', badgeColor: 'bg-cyan-50 text-cyan-600', icon: '🌊' },
//   { id: '12', name: 'Docker', description: 'A platform designed to build, share, and run containerized applications reliably.', category: 'DevOps', difficulty: 'Intermediate', rating: '4.9', badge: 'Containers', badgeColor: 'bg-blue-50 text-blue-600', icon: '🐳' },
// ];