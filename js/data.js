const data = {
    "projects": [

        {
    "id": "askmypdf",
    "title": "AskMyPDF",
    "summary": "RAG-based intelligent PDF search system providing answers with source citations and confidence scores.",
    "description": "AskMyPDF is a Retrieval-Augmented Generation system that allows users to query any type of PDF document. It extracts content, generates embeddings for semantic search, applies reranking to improve result relevance, and returns answers with exact sources and confidence scores. The system is designed to handle multiple PDFs and provide fast, accurate responses for information retrieval.",
    "techStack": [
        { "name": "Python", "icon": "bxl-python" },
        { "name": "LangChain", "icon": "bx-code" },
        { "name": "Pinecone", "icon": "bx-data" },
        { "name": "Groq API", "icon": "bx-brain" },
        { "name": "Docker", "icon": "bx-line-chart" },
        { "name": "Pandas/NumPy", "icon": "bx-table" }
    ],
    "links": {
        "demo": "https://document-chat-frontend-kappa.vercel.app/",
        "github": "https://github.com/AsiifShahzad/DocumentChat"
    },
    "features": [
        { "title": "Multi-PDF Support", "desc": "Process and query multiple PDF documents seamlessly." },
        { "title": "Semantic Search", "desc": "Generates embeddings for PDF content and retrieves relevant information using vector search." },
        { "title": "Reranking & Confidence Scores", "desc": "Applies reranking techniques and provides confidence scores for retrieved answers." },
        { "title": "Source Attribution", "desc": "Returns exact PDF sections and page numbers used to answer queries." },
        { "title": "Interactive Dashboard", "desc": "Users can upload PDFs and ask questions through a simple Streamlit interface." }
    ]
},{
            "id": "idea-validator",
            "title": "AI Idea Validator",
            "summary": "AI-powered platform that validates business ideas using a multi-agent pipeline backed by real market data.",
            "description": "An intelligent idea validation system that reduces validation time from days to seconds. The platform pulls signals from 8 real data sources (Tavily, Reddit, GitHub, Google Trends, Arxiv, News API, Product Hunt, Pinecone) and returns a structured verdict with score, confidence, demand, competition, and risk analysis. Implemented as a full-stack application with a LangGraph multi-agent pipeline orchestrated on FastAPI backend and React frontend, featuring real-time streaming results so users see each agent's progress as it runs.",
            "techStack": [
                { "name": "FastAPI", "icon": "bx-server" },
                { "name": "LangGraph", "icon": "bx-code" },
                { "name": "Groq API", "icon": "bx-brain" },
                { "name": "React", "icon": "bxl-react" },
                { "name": "Vite", "icon": "bxl-javascript" },
                { "name": "Tailwind CSS", "icon": "bxl-tailwindcss" },
                { "name": "Pinecone", "icon": "bx-data" }
            ],
            "links": {
                "demo": "https://idea-validator-blue.vercel.app/",
                "github": "https://github.com/AsiifShahzad/ai-idea-validator.git"
            },
            "features": [
                { "title": "Multi-Agent Pipeline", "desc": "Runs classifier, research, demand, competition, risk, decision, and reflection agents in optimized parallel phases." },
                { "title": "8 Data Sources", "desc": "Integrates Tavily, Reddit, GitHub, Google Trends, Arxiv, News API, Product Hunt, and Pinecone for comprehensive market research." },
                { "title": "Structured Verdicts", "desc": "Returns comprehensive analysis including verdict (Promising/Questionable/High-Risk), score, confidence, success factors, and failure reasons." },
                { "title": "Real-Time Streaming", "desc": "Streams results in real-time so users see each agent's progress as the validation runs." },
                { "title": "Full-Stack Deployment", "desc": "Backend deployed on Render and frontend on Vercel for production-ready performance." }
            ]
        }
        ,{
            "id": "jobpulse-ai",
            "title": "JobPulseAI",
            "summary": "Automated data pipeline and dashboard system for job market intelligence with daily data refresh.",
            "description": "JobPulseAI is a production-grade, fully automated job market analytics platform that fetches job postings daily, processes and analyzes them, and provides interactive visualizations via a Streamlit dashboard. Built with Prefect for robust ETL orchestration and deployed on AWS EC2 with minimal manual intervention required.",
            "techStack": [
                { "name": "Python", "icon": "bxl-python" },
                { "name": "Prefect", "icon": "bx-code" },
                { "name": "Streamlit", "icon": "bx-line-chart" },
                { "name": "AWS EC2", "icon": "bxl-amazon" },
                { "name": "Pandas", "icon": "bx-data" },
                { "name": "NLP/TF-IDF", "icon": "bx-brain" }
            ],
            "links": {
                "demo": "http://51.21.196.14:8501/",
                "github": "https://github.com/AsiifShahzad/JobPulseAI"
            },
            "features": [
                { "title": "ETL Pipeline", "desc": "Automated daily data ingestion from Adzuna API with Prefect orchestration." },
                { "title": "NLP Skill Extraction", "desc": "Extracts and analyzes job skills using ontology-based regex and TF-IDF." },
                { "title": "Interactive Dashboard", "desc": "Real-time visualizations including salary trends, in-demand skills, and hiring locations." },
                { "title": "Automated Scheduling", "desc": "Systemd timer triggers pipeline daily at 2 AM UTC." },
                { "title": "Cloud Deployment", "desc": "Fully automated on AWS EC2 with no manual intervention needed." }
            ]
        },
         
        {
            "id": "movie-revenue-intelligence",
            "title": "Movie Revenue Intelligence System",
            "summary": "Complete ML system to predict movie revenue with FastAPI and Docker deployment.",
            "description": "Built a complete ML system to predict movie revenue. Engineered high-impact features including genre popularity, cast/director success scores, studio-level aggregations, and release seasonality. Trained and compared multiple models (Linear Regression, Random Forest, XGBoost, LightGBM) with hyperparameter optimization. Deployed the final model using FastAPI with Docker, including revenue prediction and hit/flop classification endpoints.",
            "techStack": [
                { "name": "Python", "icon": "bxl-python" },
                { "name": "FastAPI", "icon": "bx-server" },
                { "name": "Docker", "icon": "bxl-docker" },
                { "name": "XGBoost", "icon": "bx-brain" },
                { "name": "LightGBM", "icon": "bx-scatter-chart" },
                { "name": "Scikit-Learn", "icon": "bx-brain" }
            ],
            "links": {
                "demo": "https://ai-movie-prediction-frontend.vercel.app/",
                "github": "https://github.com/AsiifShahzad/AI-Movie-Hit-Predictor.git"
            },
            "features": [
                { "title": "Feature Engineering", "desc": "Engineered features like genre popularity, cast/director success scores, and release seasonality." },
                { "title": "Model Optimization", "desc": "Trained and compared Linear Regression, Random Forest, XGBoost, and LightGBM with hyperparameter tuning." },
                { "title": "FastAPI & Docker", "desc": "Deployed with FastAPI including revenue prediction and hit/flop classification endpoints." }
            ]
        }
        

    ],
    "experience": [
        {
            "company": "Netsol Technologies",
            "role": "Python Developer Intern",
            "period": "Internship",
            "desc": [
                "Wrote clear, efficient, and well-documented Python code for data processing and analytics pipelines.",
                "Developed and maintained backend services using FastAPI frameworks.",
                "Performed code reviews and collaborated with cross-functional teams."
            ]
        },
        {
            "company": "WriteO",
            "role": "Data Scientist Intern",
            "period": "Internship",
            "desc": [
                "Conducted exploratory data analysis (EDA) on large datasets using Python, Pandas, and SQL.",
                "Built and evaluated machine learning models with Scikit-learn.",
                "Created interactive data visualizations using Matplotlib, Seaborn, and Power BI.",
                "Preprocessed, cleaned, and engineered features to improve model performance."
            ]
        }
    ],
    "services": [
        {
            "title": "Data Science",
            "desc": "Extracting insights and making predictions using statistical and computational methods.",
            "icon": "bx-line-chart"
        },
        {
            "title": "AI/ML Engineering",
            "desc": "Building and deploying robust machine learning models and end-to-end AI systems.",
            "icon": "bx-brain"
        },
        {
            "title": "Deep Learning",
            "desc": "Developing advanced neural network architectures for complex vision and language tasks.",
            "icon": "bx-network-chart"
        }
    ],
    "skills": [
        { "name": "Python", "icon": "bxl-python" },
        { "name": "SQL", "icon": "bx-data" },
        { "name": "Pandas/NumPy", "icon": "bx-table" },
        { "name": "Scikit-Learn", "icon": "bx-brain" },
        { "name": "TensorFlow/PyTorch", "icon": "bx-landscape" },
        { "name": "FastAPI/Flask", "icon": "bx-server" },
        { "name": "Docker", "icon": "bxl-docker" },
        { "name": "NLP", "icon": "bx-message-square-dots" },
        { "name": "Computer Vision", "icon": "bx-camera" },
        { "name": "AWS/Cloud", "icon": "bxl-amazon" }
    ],
    "certifications": [
        {
            "title": "Programming for Everybody",
            "issuer": "University of Michigan",
            "date": "January 2024",
            "icon": "bx-bar-chart-alt-2"
        },
        {
            "title": "Python for Data Science, AI & Development",
            "issuer": "IBM",
            "date": "October 2023",
            "icon": "bx-line-chart"
        },
        {
            "title": "Machine Learning with Python",
            "issuer": "IBM",
            "date": "January 2025",
            "icon": "bx-brain"
        },
        {
            "title": "Harnessing the Power of Data with Power BI",
            "issuer": "Microsoft",
            "date": "January 2024",
            "icon": "bx-data"
        },
        {
            "title": "Introduction to Deep Learning & Neural Networks",
            "issuer": "IBM",
            "date": "January 2025",
            "icon": "bx-line-chart-down"
        },
        {
            "title": "Google AI Essentials",
            "issuer": "Google",
            "date": "August 2024",
            "icon": "bx-code-alt"
        }
    ]
};
