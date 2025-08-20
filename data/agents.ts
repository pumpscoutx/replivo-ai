export interface SubAgent {
  id: string
  name: string
  task: string
  icon: string
  rating: number
  reviews: number
  price: number
  description: string
  profileImage: string
}

export interface MainAgent {
  id: string
  name: string
  description: string
  category: string
  price: number
  rating: number
  reviews: number
  icon: string
  color: string
  subAgents: SubAgent[]
  profileImage: string
  howItWorks: string
  features: string[]
}

export const mainAgents: MainAgent[] = [
  {
    id: '1',
    name: 'Marketing Master',
    description: 'Complete marketing automation with AI-powered campaigns, content creation, and analytics.',
    category: 'Marketing',
    price: 299,
    rating: 4.8,
    reviews: 1247,
    icon: '📈',
    color: 'from-primary-500 to-primary-600',
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    howItWorks: 'This agent orchestrates your entire marketing workflow by coordinating specialized sub-agents for content creation, social media management, email campaigns, and analytics. It learns from your brand voice and audience data to optimize performance continuously.',
    features: [
      'AI-powered content generation',
      'Multi-platform social media management',
      'Email campaign automation',
      'Real-time analytics and optimization'
    ],
    subAgents: [
      {
        id: '1-1',
        name: 'Content Creator',
        task: 'Generates engaging blog posts, social media content, and marketing copy',
        icon: '✍️',
        rating: 4.9,
        reviews: 892,
        price: 89,
        description: 'Creates compelling content that resonates with your target audience',
        profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '1-2',
        name: 'Social Media Manager',
        task: 'Manages posting schedules, engagement, and community building',
        icon: '📱',
        rating: 4.7,
        reviews: 654,
        price: 79,
        description: 'Handles all social media platforms with smart scheduling and engagement',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '1-3',
        name: 'Email Specialist',
        task: 'Designs and sends automated email campaigns with personalization',
        icon: '📧',
        rating: 4.8,
        reviews: 445,
        price: 69,
        description: 'Creates personalized email sequences that convert',
        profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '1-4',
        name: 'Analytics Expert',
        task: 'Tracks performance metrics and provides actionable insights',
        icon: '📊',
        rating: 4.9,
        reviews: 567,
        price: 99,
        description: 'Provides deep insights into campaign performance and ROI',
        profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }
    ]
  },
  {
    id: '2',
    name: 'Customer Success Pro',
    description: '24/7 customer support with intelligent ticket routing and satisfaction tracking.',
    category: 'Support',
    price: 199,
    rating: 4.9,
    reviews: 2156,
    icon: '🎧',
    color: 'from-accent-500 to-accent-600',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    howItWorks: 'This agent provides round-the-clock customer support by intelligently routing inquiries to the most appropriate sub-agent, learning from interactions to improve response quality and customer satisfaction scores.',
    features: [
      '24/7 automated customer support',
      'Intelligent ticket routing',
      'Multi-language support',
      'Customer satisfaction tracking'
    ],
    subAgents: [
      {
        id: '2-1',
        name: 'Support Agent',
        task: 'Handles customer inquiries and provides immediate assistance',
        icon: '💬',
        rating: 4.8,
        reviews: 1234,
        price: 59,
        description: 'Provides friendly and efficient customer support',
        profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '2-2',
        name: 'Ticket Router',
        task: 'Intelligently routes tickets to the right specialist',
        icon: '🎯',
        rating: 4.9,
        reviews: 789,
        price: 49,
        description: 'Ensures customers get the right help quickly',
        profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '2-3',
        name: 'Satisfaction Tracker',
        task: 'Monitors customer satisfaction and identifies improvement areas',
        icon: '😊',
        rating: 4.7,
        reviews: 456,
        price: 39,
        description: 'Tracks and improves customer experience metrics',
        profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
      }
    ]
  },
  {
    id: '3',
    name: 'Sales Dynamo',
    description: 'Lead generation, qualification, and conversion optimization with AI insights.',
    category: 'Sales',
    price: 399,
    rating: 4.7,
    reviews: 892,
    icon: '💰',
    color: 'from-purple-500 to-purple-600',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    howItWorks: 'This agent transforms your sales process by automatically qualifying leads, nurturing prospects, and optimizing conversion rates through data-driven insights and personalized outreach strategies.',
    features: [
      'Automated lead generation and qualification',
      'Personalized prospect nurturing',
      'Sales pipeline optimization',
      'Revenue forecasting and analytics'
    ],
    subAgents: [
      {
        id: '3-1',
        name: 'Lead Generator',
        task: 'Discovers and qualifies potential customers automatically',
        icon: '🔍',
        rating: 4.8,
        reviews: 678,
        price: 129,
        description: 'Finds high-quality leads that are ready to buy',
        profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '3-2',
        name: 'Prospect Nurturer',
        task: 'Builds relationships with prospects through personalized outreach',
        icon: '🤝',
        rating: 4.6,
        reviews: 543,
        price: 109,
        description: 'Nurtures prospects until they\'re ready to purchase',
        profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '3-3',
        name: 'Conversion Optimizer',
        task: 'Optimizes sales funnels and improves conversion rates',
        icon: '📈',
        rating: 4.9,
        reviews: 432,
        price: 149,
        description: 'Maximizes your sales conversion rates',
        profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '3-4',
        name: 'Sales Analyst',
        task: 'Provides insights and forecasts for sales performance',
        icon: '📊',
        rating: 4.7,
        reviews: 321,
        price: 89,
        description: 'Delivers actionable sales insights and forecasts',
        profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    ]
  }
] 