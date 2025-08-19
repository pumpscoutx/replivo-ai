# Replivo AI Platform

An intelligent AI agent marketplace and workforce platform where businesses can hire AI agents to perform tasks across their workflows.

## 🚀 Features

### Main Agents Marketplace
- **Agent Cards**: Beautiful, interactive cards showing main AI agents
- **Hover Effects**: Cards zoom and show animated task previews on hover
- **Ratings & Reviews**: Display agent ratings and review counts
- **Moving Task Previews**: Animated sub-agent task demonstrations
- **Hire Now Buttons**: Direct hiring functionality for each agent

### Sub-Agent Marketplace
- Browse, hire, and compare individual sub-agents
- Animated task previews for each sub-agent
- Ratings and reviews system
- Side-by-side comparison capabilities

### AI Agent Recommender
- Intelligent chatbot that helps users find the right agent
- Natural language understanding of business needs
- Personalized recommendations based on use cases
- Seamless transition to custom agent requests

### Custom Agent Requestor
- Multi-step form for custom agent requests
- Trending agent templates with demand indicators
- Cost-sharing pooling options
- Comprehensive requirements gathering

### Business Use Cases
- **Social Media Manager**: Content creation, scheduling, analytics
- **Customer Support Agent**: 24/7 support automation
- **Data Analyst**: Data processing, reporting, trend analysis
- **HR Assistant**: Recruitment, onboarding, benefits management
- **Project Manager**: Task tracking, team coordination, resource management
- **Email Marketer**: Content creation, list management, campaign optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Responsive**: Mobile-first design with desktop optimization

## 🎨 Design Features

- **Modern UI**: Sleek, professional interface optimized for business users
- **Hover Animations**: Interactive elements with smooth transitions
- **Gradient Backgrounds**: Beautiful color schemes for different agent types
- **Glass Effects**: Modern backdrop blur and transparency effects
- **Responsive Design**: Optimized for all device sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd replivo-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full feature set with hover effects and animations
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Touch-friendly interface with mobile-optimized navigation

## 🎯 Key Components

- **Header**: Navigation with mobile menu
- **MainAgentCard**: Interactive agent display cards
- **AgentRecommender**: AI-powered recommendation chatbot
- **CustomAgentRequestor**: Multi-step custom agent request form
- **Data Layer**: Comprehensive agent and sub-agent data structure

## 🔧 Customization

### Adding New Agents
Edit `data/agents.ts` to add new main agents and sub-agents:

```typescript
export const mainAgents: MainAgent[] = [
  {
    id: 'new-agent',
    name: 'New Agent Name',
    description: 'Agent description',
    category: 'Category',
    rating: 4.8,
    reviews: 100,
    price: 299,
    icon: '🎯',
    color: 'from-blue-500 to-green-500',
    subAgents: [...]
  }
]
```

### Styling
- Customize colors in `tailwind.config.js`
- Modify component styles in `app/globals.css`
- Add new animations in the Tailwind config

## 📊 Future Enhancements

- **Industry Bundles**: Restaurant, Marketing, HR specific packages
- **Progress Tracker**: Gamified agent adoption tracking
- **Monthly Reports**: First-person performance insights
- **Enterprise Features**: 10+ seat management and priority builds
- **Plugin System**: Extensible agent capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Replivo AI Platform** - Building the future of intelligent workforce automation. 