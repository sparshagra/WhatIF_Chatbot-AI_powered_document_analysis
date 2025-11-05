# What-If RAG Chatbot & Explainable Project Dashboard - Frontend

> An AI-powered construction project management interface that provides explainable insights, scenario simulations, and intelligent document analysis through an intuitive chat-based experience.

## 🎯 Overview

This frontend application delivers a unified platform for construction project stakeholders to:

- **Ask natural language questions** about project documents and receive instant, cited answers
- **Run "what-if" scenarios** to simulate impacts of changes in cost, timeline, and resources
- **Visualize project insights** through highlights, risks, and interactive document chat
- **Get transparent reasoning** with audit trails for every AI-generated insight

Built by **The Multiverse Task Force** (Sparsh Agarwal & Divy Dobariya)

## ✨ Key Features

### 1. RAG-Based Chat Interface
- Natural language queries on uploaded project documents
- Real-time responses with source citations
- Conversational follow-ups for deeper insights

### 2. Scenario Tuning with Interactive Sliders
- Adjust project parameters using intuitive sliders (scores out of 5)
- View project strengths and weaknesses in real-time
- Get top 3 recommended changes based on current scenario
- Instant impact analysis with explainable reasoning
- Compare different "what-if" configurations

### 3. Visual Insights Dashboard
- **Highlights**: Key positive indicators and achievements
- **Risks**: Identified threats and weak areas requiring attention
- **Interactive Document Chat**: Ask specific questions about uploaded documents and get contextual answers

### 4. Document Intelligence
- Multi-format support (PDF, contracts, BIM data, reports)
- Automatic extraction and chunking

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/sparshagra/WhatIF_Chatbot-AI_powered_document_analysis.git
   cd frontend
```

2. **Install dependencies**
```bash
   npm install
```

3. **Configure environment**
   
   Create a `.env` file in the frontend directory 
   (The backend-api-link running on the local machine must be provided here):
```
   VITE_API_BASE_URL=<your-backend-api-url>
```

4. **Start development server**
```bash
   npm run dev
```

   The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

Production-ready files will be generated in the `dist/` directory.

## 📁 Project Structure
```
/
├── public/              # Static assets (images, icons)
│   └── Welcome_bg.png   
│
├── src/                 # Main application source
│   ├── components/      # Reusable React components
│   │   ├── ui/          # Base UI components (Button, Card, Dialog, etc.)
│   │   └── Navigation.tsx
│   │
│   ├── contexts/        # Global state management
│   │   └── AppContext.tsx
│   │
│   ├── hooks/           # Custom React hooks
│   │   └── use-mobile.tsx
│   │
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   │
│   ├── pages/           # Main application views
│   │   ├── Welcome.tsx        # Landing page
│   │   ├── Chat.tsx           # RAG chat interface
│   │   ├── ScenarioTuning.tsx # What-if simulator
│   │   ├── VisualInsights.tsx # Dashboard view
│   │   └── NotFound.tsx       # 404 page
│   │
│   ├── App.tsx          # Root component with routing
│   └── main.tsx         # Application entry point
│
└── package.json         # Dependencies and scripts
```

## 🎨 Core Pages

### Welcome Page
Page to enter your name and project location.

### WhatIF Chat Interface
- Upload project documents
- Ask WhatIF scenario questions in natural language
- View responses with citations and reasoning chains
- Conversational context maintained throughout session

### Scenario Tuning
Interactive simulation workspace featuring:

- **Interactive Sliders**: Adjust 5 key project parameters (each scored out of 5)
  - Cost Management
  - Timeline Adherence
  - Design Quality
  - Regulatory Compliance
  - Sustainability
- **Strengths Section**: Real-time display of project strong points based on current slider values
- **Weaknesses Section**: Identified areas needing improvement
- **Top 3 Changes**: AI-generated recommendations for the most impactful adjustments
- **What-If Analysis**: See how parameter changes affect overall project health
- **Scenario Comparison**: Save and compare different configurations

### Visual Insights (Document Insights)
Comprehensive project intelligence dashboard with three main sections:

- **Highlights Panel**
  - Key achievements and positive indicators
  - Project milestones reached
  - Areas of excellence
  
- **Risks Panel**
  - Identified threats and vulnerabilities
  - Areas requiring immediate attention
  - Potential blockers and their severity
  
- **Document Chat Interface**
  - Ask specific questions about uploaded documents
  - Get contextual answers with citations
  - Extract insights from contracts, reports, and technical documents
  - Conversational follow-ups for deeper analysis

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks


## 🔐 Explanability

- **Audit trails**: Every AI decision includes reasoning chain
- **Citation-backed**: All insights linked to source documents

## 🛠️ Technology Stack

- **React** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Context API** - State management
- **Tailwind CSS** - Styling (via UI components)

## 📝 Example Use Cases

1. **Scenario Tuning**: "What if I reduce timeline score from 4 to 2? Show me strengths, weaknesses, and top 3 changes needed."
2. **Document Insights - Risks**: "What are the current project risks and their impact on delivery?"
3. **Document Insights - Chat**: "Which clauses in the contract address force majeure events?"
4. **Document Insights - Highlights**: "Show me all milestones achieved in Q2 2024."

## 🎯 Workflow

1. **Upload** project files (PDFs, contracts, BIM data, reports)
2. **Extract** and chunk information automatically
3. **Analyze** using RAG-based embeddings
4. **Interact** via chat or scenario sliders
5. **Visualize** insights through highlights and risks
6. **Simulate** what-if scenarios with real-time feedback
7. **Decide** with confidence using explainable AI reasoning

## 🤝 Contributing

This is a competition project by The Multiverse Task Force. For collaboration inquiries, contact the development team.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

**Developed by:** Sparsh Agarwal & Divy Dobariya  
**Team:** The Multiverse Task Force