export interface SubAgent {
  id: string
  name: string
  description: string
  task: string
  rating: number
  reviews: number
  price: number
  icon: string
}

export interface MainAgent {
  id: string
  name: string
  description: string
  category: string
  rating: number
  reviews: number
  price: number
  subAgents: SubAgent[]
  icon: string
  color: string
}

export const mainAgents: MainAgent[] = [
  {
    id: 'social-media-manager',
    name: 'Social Media Manager',
    description: 'Complete social media management across all platforms',
    category: 'Marketing',
    rating: 4.8,
    reviews: 127,
    price: 299,
    icon: '📱',
    color: 'from-primary-500 to-primary-600',
    subAgents: [
      {
        id: 'content-creator',
        name: 'Content Creator',
        description: 'Creates engaging posts and captions',
        task: 'Writing creative social media content',
        rating: 4.9,
        reviews: 89,
        price: 99,
        icon: '✍️'
      },
      {
        id: 'scheduler',
        name: 'Post Scheduler',
        description: 'Schedules and optimizes posting times',
        task: 'Scheduling posts for optimal engagement',
        rating: 4.7,
        reviews: 156,
        price: 79,
        icon: '📅'
      },
      {
        id: 'analytics',
        name: 'Analytics Tracker',
        description: 'Tracks performance and provides insights',
        task: 'Analyzing social media performance',
        rating: 4.6,
        reviews: 203,
        price: 89,
        icon: '📊'
      }
    ]
  },
  {
    id: 'customer-support',
    name: 'Customer Support Agent',
    description: '24/7 customer service and support automation',
    category: 'Support',
    rating: 4.9,
    reviews: 234,
    price: 399,
    icon: '🎧',
    color: 'from-accent-500 to-accent-600',
    subAgents: [
      {
        id: 'chatbot',
        name: 'Chatbot',
        description: 'Handles common customer inquiries',
        task: 'Responding to customer questions',
        rating: 4.8,
        reviews: 312,
        price: 149,
        icon: '🤖'
      },
      {
        id: 'ticket-manager',
        name: 'Ticket Manager',
        description: 'Organizes and prioritizes support tickets',
        task: 'Managing support ticket workflow',
        rating: 4.7,
        reviews: 178,
        price: 129,
        icon: '🎫'
      },
      {
        id: 'knowledge-base',
        name: 'Knowledge Base',
        description: 'Maintains help articles and FAQs',
        task: 'Updating help documentation',
        rating: 4.6,
        reviews: 95,
        price: 99,
        icon: '📚'
      }
    ]
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    description: 'Comprehensive data analysis and reporting',
    category: 'Analytics',
    rating: 4.7,
    reviews: 89,
    price: 499,
    icon: '📈',
    color: 'from-primary-600 to-primary-700',
    subAgents: [
      {
        id: 'data-processor',
        name: 'Data Processor',
        description: 'Cleans and prepares data for analysis',
        task: 'Processing and cleaning raw data',
        rating: 4.8,
        reviews: 134,
        price: 159,
        icon: '🔧'
      },
      {
        id: 'report-generator',
        name: 'Report Generator',
        description: 'Creates automated reports and dashboards',
        task: 'Generating insights and reports',
        rating: 4.7,
        reviews: 167,
        price: 179,
        icon: '📋'
      },
      {
        id: 'trend-analyzer',
        name: 'Trend Analyzer',
        description: 'Identifies patterns and trends in data',
        task: 'Analyzing data trends and patterns',
        rating: 4.6,
        reviews: 112,
        price: 139,
        icon: '🔍'
      }
    ]
  },
  {
    id: 'hr-assistant',
    name: 'HR Assistant',
    description: 'Human resources management and automation',
    category: 'HR',
    rating: 4.6,
    reviews: 67,
    price: 349,
    icon: '👥',
    color: 'from-accent-600 to-accent-700',
    subAgents: [
      {
        id: 'recruiter',
        name: 'Recruiter',
        description: 'Screens candidates and manages applications',
        task: 'Screening job candidates',
        rating: 4.7,
        reviews: 89,
        price: 129,
        icon: '🎯'
      },
      {
        id: 'onboarding',
        name: 'Onboarding Specialist',
        description: 'Manages new employee onboarding process',
        task: 'Managing employee onboarding',
        rating: 4.5,
        reviews: 76,
        price: 109,
        icon: '🚀'
      },
      {
        id: 'benefits-manager',
        name: 'Benefits Manager',
        description: 'Handles benefits administration and questions',
        task: 'Managing employee benefits',
        rating: 4.6,
        reviews: 94,
        price: 119,
        icon: '💼'
      }
    ]
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    description: 'End-to-end project management and coordination',
    category: 'Management',
    rating: 4.8,
    reviews: 145,
    price: 449,
    icon: '📋',
    color: 'from-primary-700 to-primary-800',
    subAgents: [
      {
        id: 'task-tracker',
        name: 'Task Tracker',
        description: 'Monitors task progress and deadlines',
        task: 'Tracking project tasks and deadlines',
        rating: 4.8,
        reviews: 223,
        price: 139,
        icon: '✅'
      },
      {
        id: 'team-coordinator',
        name: 'Team Coordinator',
        description: 'Coordinates team communication and meetings',
        task: 'Coordinating team activities',
        rating: 4.7,
        reviews: 167,
        price: 129,
        icon: '👥'
      },
      {
        id: 'resource-manager',
        name: 'Resource Manager',
        description: 'Manages project resources and budgets',
        task: 'Managing project resources',
        rating: 4.6,
        reviews: 98,
        price: 119,
        icon: '💰'
      }
    ]
  },
  {
    id: 'email-marketer',
    name: 'Email Marketer',
    description: 'Complete email marketing automation and optimization',
    category: 'Marketing',
    rating: 4.7,
    reviews: 112,
    price: 279,
    icon: '📧',
    color: 'from-accent-700 to-accent-800',
    subAgents: [
      {
        id: 'email-writer',
        name: 'Email Writer',
        description: 'Creates compelling email content',
        task: 'Writing engaging email content',
        rating: 4.8,
        reviews: 145,
        price: 99,
        icon: '✍️'
      },
      {
        id: 'list-manager',
        name: 'List Manager',
        description: 'Manages email lists and segmentation',
        task: 'Managing email subscriber lists',
        rating: 4.6,
        reviews: 178,
        price: 79,
        icon: '📊'
      },
      {
        id: 'campaign-optimizer',
        name: 'Campaign Optimizer',
        description: 'Optimizes email campaigns for better performance',
        task: 'Optimizing email campaign performance',
        rating: 4.7,
        reviews: 134,
        price: 89,
        icon: '🎯'
      }
    ]
  }
] 