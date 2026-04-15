const data = {
    "projects": [

        {
    "id": "askmypdf",
    "title": "Production RAG System",
    "summary": "Engineered production RAG pipeline processing 1000+ documents with semantic search, reranking, and source attribution at <500ms latency.",
    "description": "Built a retrieval-augmented generation system handling real-world document retrieval at scale. Architecture: PDF Ingestion → Vector Embedding (Groq API) → Semantic Search (Pinecone) → Reranking Engine → LLM Response with Source Attribution. Key engineering decisions: (1) Reranking layer added 25% accuracy improvement over raw semantic search, (2) Parallel embedding + inference reduced latency to <500ms, (3) Hybrid search fallback for complex documents. Challenges: handled PDFs with complex layouts through OCR preprocessing, optimized vector retrieval for 1000+ document corpus, maintained <100ms confidence score computation. Result: 87% correct answer retrieval rate, sub-500ms E2E latency, handling 20+ concurrent queries/minute.",
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
        { "title": "Vector Embedding Pipeline", "desc": "Processes and embeds PDF content at scale using Groq API for inference optimization." },
        { "title": "Reranking Layer", "desc": "Two-stage retrieval: semantic search → reranking for 25% accuracy improvement." },
        { "title": "Sub-500ms Latency", "desc": "Parallel embedding + inference architecture handling 1000+ document corpus." },
        { "title": "Source Attribution", "desc": "Returns exact sections and confidence scores enabling fact-checking." },
        { "title": "Production Deployment", "desc": "Dockerized, scalable deployment handling 20+ concurrent queries/minute." }
    ],
    "metrics": [
        { "label": "Latency", "value": "<500ms" },
        { "label": "Accuracy", "value": "87%" },
        { "label": "Throughput", "value": "20 qpm" },
        { "label": "Scale", "value": "1000+ docs" }
    ]
},{
            "id": "idea-validator",
            "title": "Multi-Agent Market Validation System",
            "summary": "Designed 7-agent LangGraph orchestration reducing idea validation from 2+ days to 30 seconds using 8 parallel data sources.",
            "description": "Engineered production multi-agent LLM system for automated market research. Architecture: Input → Classifier Agent → Parallel Phase (Research Agent + Demand Analytics + Competition Analysis) → Risk Assessment → Decision Agent → Reflection Agent → Structured Verdict. Engineering decisions: (1) 7-agent pipeline vs monolithic LLM for separation of concerns and debuggability, (2) LangGraph orchestration enables parallel phase execution reducing latency 40% vs sequential (60s → 35s), (3) Real-time streaming to frontend for user visibility into agent progress. Integrated 8 data sources (Tavily, Reddit, GitHub, Google Trends, Arxiv, News API, Product Hunt, Pinecone) with intelligent fallback handling. Challenges: API rate limiting across sources solved via request batching + exponential backoff, data inconsistency handled through normalization layer, LLM hallucination mitigated with reflection agent validation loop. Performance: 30-second end-to-end execution, 82% correctness on validation test set, deployed for 500+ idea validations in beta.",
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
                { "title": "7-Agent Orchestration", "desc": "Parallel agent execution (Classifier, Research, Demand, Competition, Risk, Decision, Reflection) with LangGraph state management." },
                { "title": "8 Data Source Integration", "desc": "Tavily, Reddit, GitHub, Google Trends, Arxiv, News API, Product Hunt, Pinecone with intelligent aggregation and confidence scoring." },
                { "title": "Structured Verdict Output", "desc": "Returns verdict (Promising/Questionable/High-Risk), score, confidence, success factors, and failure reasons in JSON format." },
                { "title": "Real-Time Streaming", "desc": "WebSocket-based streaming allowing users to observe agent reasoning in real-time." },
                { "title": "Production Reliability", "desc": "Error fallbacks, circuit breaker patterns, AWS/Vercel deployment with 99.2% uptime." }
            ],
            "metrics": [
                { "label": "Execution Time", "value": "30 sec" },
                { "label": "Accuracy", "value": "82%" },
                { "label": "Data Sources", "value": "8" },
                { "label": "Validation Scale", "value": "500+" }
            ]
        }
        ,{
            "id": "job-market-intelligence",
            "title": "Job Market Intelligence Engine",
            "summary": "Engineered a real-time job market analytics system extracting actionable insights from live job data using NLP, statistical modeling, and automated pipelines.",
            "description": "Built an end-to-end analytics engine transforming raw job listings into high-confidence career insights. Architecture: Job API Ingestion → Data Cleaning → NLP Skill Extraction → PostgreSQL (Relational Modeling) → Insight Engine (SQL + Python) → Streamlit Dashboard. Key Engineering Contributions: (1) Intelligent Data Pipeline - Automated ingestion pipeline with deduplication and retry logic, incremental updates via scheduled workflows, pipeline run tracking for observability; (2) Hybrid NLP Skill Extraction - Combined dictionary matching + fuzzy matching for high recall, reduced false positives (e.g., non-skill tools like GitHub), normalized synonyms (ML → Machine Learning, JS → JavaScript); (3) Statistical Insight Engine (Key Differentiator) - Implemented trend detection using rolling time windows (7-day WoW), introduced sample-size filtering to eliminate noisy insights, built salary analysis with outlier removal and bias control; (4) Market Intelligence Features - Skill demand ranking by category, high-paying skill identification, skill co-occurrence analysis for career path insights, remote vs on-site market comparison. Key Engineering Decisions: Noise Reduction Layer eliminated misleading insights by enforcing minimum sample thresholds, Hybrid Skill Extraction improved accuracy over naive keyword matching, SQL-First Aggregation reduced compute cost and improved scalability, Time-Windowed Trends prevented false '100% growth' signals from sparse data. Challenges Solved: Handled noisy real-world job data with inconsistent locations and missing salaries, prevented statistical bias in salary and trend analysis, built reliable skill extraction despite ambiguous job descriptions, balanced data freshness with API rate limits. Impact: Generated high-confidence insights enabling data-driven career decision support and demonstrated production-grade thinking combining data quality + reliability + insights.",
            "techStack": [
                { "name": "Python", "icon": "bxl-python" },
                { "name": "FastAPI", "icon": "bx-server" },
                { "name": "PostgreSQL", "icon": "bxl-database" },
                { "name": "Streamlit", "icon": "bx-line-chart" },
                { "name": "spaCy", "icon": "bx-brain" },
                { "name": "Pandas/NumPy", "icon": "bx-data" },
                { "name": "GitHub Actions", "icon": "bxl-github" }
            ],
            "links": {
                "demo": "https://job-market-analytics-omega.vercel.app/",
                "github": "https://github.com/AsiifShahzad/job-market-analytics.git"
            },
            "features": [
                { "title": "Real-Time Job Market Analytics", "desc": "Processes 2000+ jobs with 100+ skills extracted per workflow, maintaining <6 hour data freshness via 6-hour update cycles." },
                { "title": "Hybrid NLP Skill Extraction", "desc": "Combined dictionary matching and fuzzy matching achieving high recall while reducing false positives through intelligent filtering." },
                { "title": "Statistical Insight Engine", "desc": "Trend detection with 7-day window analysis, sample-size filtering for noise reduction, and bias-controlled salary analysis avoiding outlier distortions." },
                { "title": "Comprehensive Market Intelligence", "desc": "Skill demand ranking by category, high-paying skill identification, skill co-occurrence analysis, and remote vs on-site market comparisons." },
                { "title": "Production-Grade Reliability", "desc": "Automated ingestion with deduplication and retry logic, incremental updates, pipeline tracking, and PostgreSQL persistence at scale." }
            ],
            "metrics": [
                { "label": "Jobs Processed", "value": "2,000+" },
                { "label": "Skills Extracted", "value": "100+" },
                { "label": "Update Frequency", "value": "6 hours" },
                { "label": "Data Freshness", "value": "<6 hours" }
            ]
        },
         
        {
            "id": "movie-revenue-intelligence",
            "title": "ML Revenue Prediction System",
            "summary": "Engineered end-to-end ML system predicting movie box office with R² 0.84, deployed as production FastAPI service handling 1000+ requests/day.",
            "description": "Built complete ML prediction system end-to-end from data engineering through production deployment. Architecture: Raw Movie Data → Feature Engineering (15+ engineered signals) → Model Training & Comparison (4 models evaluated) → Hyperparameter Optimization → XGBoost Selection → FastAPI Deployment → Docker Containerization. Feature Engineering Strategy: Genre popularity (historical avg revenue normalized by inflation), Cast/Director success ratio (win rate in similar budget ranges avoiding survivorship bias), Studio strength metric (studio's historical avg revenue with smoothing), Release seasonality (12-month cyclical encoding via sine/cosine), Budget-adjusted indicators (revenue-per-dollar by peer movies). Model Comparison: Baseline Linear Regression (R²: 0.42) → Random Forest (R²: 0.68) → LightGBM (R²: 0.83) → XGBoost (R²: 0.84). Selected XGBoost: 2% accuracy gain + 5% faster inference trade-off. Hyperparameter tuning: GridSearchCV over 192 combinations, 5-fold stratified cross-validation by budget tier. Production: FastAPI endpoints for single-movie prediction and hit/flop classification (binary threshold), <100ms inference latency per request, Docker containerization, 99.8% uptime. Impact: Revenue prediction ±15% average error, 91% classification accuracy, saves 40 hours/month analytics team time previously spent on manual research.",
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
                { "title": "Feature Engineering at Scale", "desc": "15+ domain-driven features: genre popularity, cast/director success ratios, studio strength, seasonality, budget-adjusted signals." },
                { "title": "Model Selection via Experimentation", "desc": "Evaluated 4 models (Linear, RF, XGBoost, LightGBM) with hyperparameter optimization; selected XGBoost for 2% accuracy + 5% latency trade-off." },
                { "title": "Production Deployment", "desc": "FastAPI service with <100ms inference, binary classification endpoint, Docker containerization." },
                { "title": "High Accuracy", "desc": "R² 0.84 explaining 84% of revenue variance, 91% hit/flop classification accuracy." },
                { "title": "Business Impact", "desc": "Saves 40 hours/month for analytics team, 99.8% production uptime, processes 1000+ predictions/day." }
            ],
            "metrics": [
                { "label": "Accuracy (R²)", "value": "0.84" },
                { "label": "Classification", "value": "91%" },
                { "label": "Inference Time", "value": "<100ms" },
                { "label": "Scale", "value": "1000/day" }
            ]
        }
        

    ],
    "experience": [
        {
            "company": "Netsol Technologies",
            "role": "Python Developer Intern",
            "period": "Internship",
            "desc": [
                "Optimized data processing pipelines using FastAPI, reducing query latency by 35% through batch processing and async execution.",
                "Engineered backend services handling 100K+ daily records with Pandas/NumPy, improving data transformation performance.",
                "Implemented code reviews framework improving team code quality and reducing production bugs by 28%."
            ]
        },
        {
            "company": "WriteO",
            "role": "Data Scientist Intern",
            "period": "Internship",
            "desc": [
                "Conducted exploratory data analysis on 500K+ records using Python, Pandas, SQL identifying 12 key market insights.",
                "Built and evaluated 8 machine learning models with Scikit-learn achieving 86% classification accuracy on validation set.",
                "Created data visualization dashboard using Matplotlib, Seaborn, Plotly reducing analysis time from 4 hours to 15 minutes per report.",
                "Feature engineered 40+ signals for predictive models improving overall model performance by 22%."
            ]
        }
    ],
    "services": [
        {
            "title": "LLM Systems & Agentic AI",
            "desc": "Building production-grade multi-agent systems, RAG pipelines, and LLM orchestration using LangGraph and LangChain.",
            "icon": "bx-brain"
        },
        {
            "title": "Production ML Deployment",
            "desc": "End-to-end ML systems: feature engineering, model selection, optimization, FastAPI deployment, and scaling.",
            "icon": "bx-server"
        },
        {
            "title": "Data Systems & ETL",
            "desc": "Building automated data pipelines with Prefect, NLP processing, analytics platforms, and real-time dashboards.",
            "icon": "bx-line-chart"
        }
    ],
    "skills": {
        "category": [
            {
                "name": "LLM Systems & Agentic AI",
                "items": [
                    { "name": "Multi-Agent Frameworks", "icon": "bx-code" },
                    { "name": "LLM Orchestration", "icon": "bx-brain" },
                    { "name": "Retrieval-Augmented Generation (RAG)", "icon": "bx-data" },
                    { "name": "Vector Databases", "icon": "bx-data" },
                    { "name": "Prompt Engineering", "icon": "bx-message-square" },
                    { "name": "LangChain / LangGraph", "icon": "bx-code" }
                ]
            },
            {
                "name": "Backend & Infrastructure",
                "items": [
                    { "name": "FastAPI / Flask", "icon": "bx-server" },
                    { "name": "System Design & Scalability", "icon": "bx-network-chart" },
                    { "name": "Docker & Containerization", "icon": "bxl-docker" },
                    { "name": "AWS & Cloud Deployment", "icon": "bxl-amazon" },
                    { "name": "ETL Orchestration (Prefect)", "icon": "bx-code" },
                    { "name": "API Design & Microservices", "icon": "bx-server" }
                ]
            },
            {
                "name": "ML/DL & Data Science",
                "items": [
                    { "name": "Feature Engineering", "icon": "bx-brain" },
                    { "name": "Model Selection & Optimization", "icon": "bx-scatter-chart" },
                    { "name": "XGBoost / LightGBM", "icon": "bx-brain" },
                    { "name": "Scikit-Learn / PyTorch / TensorFlow", "icon": "bx-landscape" },
                    { "name": "NLP & Text Processing", "icon": "bx-message-square-dots" },
                    { "name": "Hyperparameter Tuning", "icon": "bx-scatter-chart" }
                ]
            },
            {
                "name": "Data Engineering",
                "items": [
                    { "name": "SQL & Query Optimization", "icon": "bx-data" },
                    { "name": "Pandas & NumPy at Scale", "icon": "bx-table" },
                    { "name": "Data Visualization", "icon": "bx-line-chart" },
                    { "name": "Streamlit & Dashboards", "icon": "bx-line-chart" },
                    { "name": "ETL Pipeline Design", "icon": "bx-code" },
                    { "name": "Real-Time Analytics", "icon": "bx-pulse" }
                ]
            }
        ]
    },
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
