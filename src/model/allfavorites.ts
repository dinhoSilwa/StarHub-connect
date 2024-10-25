
export interface stacksListType {
  stackname: string;
  icon : string
}

export const stacksList: stacksListType[] = [
  { stackname: "Todas", icon: "🗂️" },
  { stackname: "Frontend", icon: "🎨" },
  { stackname: "Backend", icon: "🖥️" },
  { stackname: "Devops", icon: "⚙️" },
  { stackname: "Mobile", icon: "📱" },
  { stackname: "Fullstack", icon: "💻" },
  { stackname: "DataSC", icon: "📊" }, // Data Science
  { stackname: "MLearning", icon: "🤖" }, // Machine Learning
  { stackname: "AI", icon: "🧠" }, // Artificial Intelligence
  { stackname: "Security", icon: "🔒" },
  { stackname: "GameDev", icon: "🎮" },
  { stackname: "Blockchain", icon: "⛓️" },
  { stackname: "Cloud", icon: "☁️" },
  { stackname: "Empresa", icon: "🏢" } // Empresa (Company)
  
];
