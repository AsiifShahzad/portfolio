const data = {
    "projects": [
        {
            "id": "askmypdf",
            "title": "Production RAG System",
            "summary": "Built a RAG pipeline for semantic document search with reranking and source attribution, achieving sub-500ms response times on a 1000+ document corpus.",
            "description": "Built a retrieval-augmented generation system for real-world document Q&A. Architecture: PDF Ingestion → Chunking & Embedding (HuggingFace) → Vector Store (Pinecone) → Reranking → LLM Response with Source Attribution. Key decisions: (1) Added a reranking layer on top of semantic search — noticeably improved answer relevance on complex queries, (2) Parallelized embedding and inference to keep latency under 500ms, (3) Added hybrid search fallback for edge cases. Challenges: handled PDFs with tables and multi-column layouts using OCR preprocessing, tuned chunk size and overlap for better retrieval quality. Tested on a self-built eval set of 50 question-answer pairs.",
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
                { "title": "Vector Embedding Pipeline", "desc": "Chunks and embeds PDF content using HuggingFace models, stored in Pinecone for fast retrieval." },
                { "title": "Reranking Layer", "desc": "Two-stage retrieval: semantic search followed by reranking — improved answer quality on ambiguous queries." },
                { "title": "Sub-500ms Latency", "desc": "Parallelized embedding and inference pipeline tested on a 1000+ document corpus." },
                { "title": "Source Attribution", "desc": "Returns the exact document sections used to generate each answer, making results verifiable." },
                { "title": "Dockerized Deployment", "desc": "Containerized backend deployed on a cloud VM, tested under concurrent load." }
            ],
            "metrics": [
                { "label": "Latency", "value": "<500ms" },
                { "label": "Eval Set", "value": "50 QA pairs" },
                { "label": "Corpus Size", "value": "1000+ docs" },
                { "label": "Retrieval Stages", "value": "2 (search + rerank)" }
            ]
        },
        {
            "id": "idea-validator",
            "title": "Multi-Agent Market Validation System",
            "summary": "Built a 7-agent LangGraph pipeline that automates market research across 8 data sources, cutting manual validation from hours to under a minute.",
            "description": "Built a multi-agent LLM system for automated market research on startup ideas. Architecture: Input → Classifier Agent → Parallel Phase (Research + Demand + Competition Analysis) → Risk Assessment → Decision Agent → Reflection Agent → Structured Verdict. Key decisions: (1) Split into 7 agents instead of one big prompt — easier to debug and each agent has a focused job, (2) LangGraph's parallel execution reduced total runtime significantly vs running agents sequentially, (3) Added a Reflection Agent to catch hallucinations and weak conclusions before the final verdict. Integrated 8 data sources (Tavily, Reddit, GitHub Trends, Google Trends, Arxiv, News API, Product Hunt, Pinecone) with fallback handling when APIs fail. Challenges: rate limiting across multiple APIs solved with request batching and backoff, inconsistent data formats handled through a normalization layer.",
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
                { "title": "7-Agent Orchestration", "desc": "Parallel agent execution (Classifier, Research, Demand, Competition, Risk, Decision, Reflection) managed with LangGraph state." },
                { "title": "8 Data Source Integration", "desc": "Pulls from Tavily, Reddit, GitHub, Google Trends, Arxiv, News API, Product Hunt, Pinecone with aggregation and confidence scoring." },
                { "title": "Structured Verdict Output", "desc": "Returns verdict (Promising / Questionable / High-Risk), score, confidence, success factors, and failure reasons as JSON." },
                { "title": "Real-Time Streaming", "desc": "Streams agent progress to the frontend so users can see reasoning as it happens." },
                { "title": "Error Resilience", "desc": "Circuit breaker patterns and API fallbacks ensure the pipeline completes even when some data sources fail." }
            ],
            "metrics": [
                { "label": "Execution Time", "value": "<60 sec" },
                { "label": "Agents", "value": "7" },
                { "label": "Data Sources", "value": "8" },
                { "label": "Output Format", "value": "Structured JSON" }
            ]
        },
        {
            "id": "job-market-intelligence",
            "title": "Job Market Intelligence Engine",
            "summary": "Built a job market analytics system that extracts skill trends from live job listings using NLP, statistical modeling, and automated ingestion pipelines.",
            "description": "Built an end-to-end analytics engine that turns raw job listings into career insights. Architecture: Job API Ingestion → Data Cleaning → NLP Skill Extraction → PostgreSQL → Insight Engine (SQL + Python) → Dashboard. Key engineering work: (1) Hybrid NLP skill extraction combining dictionary matching and fuzzy matching — reduced false positives like GitHub being tagged as a skill, normalized synonyms like ML → Machine Learning; (2) Statistical insight engine with 7-day rolling windows for trend detection and minimum sample thresholds to avoid noisy signals from small data; (3) Salary analysis with outlier removal to prevent skewed averages. Challenges: real-world job data is messy — inconsistent location formats, missing salaries, vague job titles. Built deduplication and retry logic to handle API instability.",
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
                { "title": "Automated Job Ingestion", "desc": "Scheduled pipeline pulls fresh listings every 6 hours with deduplication and retry handling." },
                { "title": "Hybrid NLP Skill Extraction", "desc": "Dictionary + fuzzy matching with synonym normalization and false-positive filtering." },
                { "title": "Statistical Insight Engine", "desc": "7-day rolling trend detection with sample-size filtering to avoid misleading signals from sparse data." },
                { "title": "Market Intelligence Dashboard", "desc": "Skill demand by category, high-paying skills, co-occurrence analysis, and remote vs on-site breakdown." },
                { "title": "PostgreSQL Backend", "desc": "Relational schema with indexed queries for fast aggregation across thousands of job records." }
            ],
            "metrics": [
                { "label": "Jobs Processed", "value": "2,000+" },
                { "label": "Skills Tracked", "value": "100+" },
                { "label": "Update Frequency", "value": "6 hours" },
                { "label": "Trend Window", "value": "7 days" }
            ]
        },
        {
            "id": "movie-revenue-intelligence",
            "title": "ML Revenue Prediction System",
            "summary": "Built an end-to-end ML system predicting movie box office revenue, evaluated across 4 models with XGBoost achieving R² 0.84 — deployed as a FastAPI service.",
            "description": "Built a complete ML pipeline from raw data to deployed prediction API. Architecture: Raw Movie Data → Feature Engineering → Model Training & Comparison (4 models) → Hyperparameter Tuning → XGBoost → FastAPI → Docker. Feature engineering included genre popularity (normalized historical averages), cast/director success rates by budget range, studio strength with Laplace smoothing, and release seasonality encoded as sine/cosine. Model comparison: Linear Regression (R² 0.42) → Random Forest (R² 0.68) → LightGBM (R² 0.81) → XGBoost (R² 0.84). Chose XGBoost for best accuracy and fast inference. Tuned with GridSearchCV over ~192 combinations using 5-fold cross-validation. Deployed as a FastAPI service with single-movie prediction and hit/flop classification endpoints.",
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
                { "title": "Feature Engineering", "desc": "15+ domain-driven signals: genre popularity, cast/director win rates, studio strength, seasonality, budget-adjusted indicators." },
                { "title": "Model Comparison", "desc": "Evaluated Linear Regression, Random Forest, LightGBM, and XGBoost — selected XGBoost for best accuracy and inference speed trade-off." },
                { "title": "Hyperparameter Tuning", "desc": "GridSearchCV over ~192 combinations with 5-fold stratified cross-validation by budget tier." },
                { "title": "FastAPI Deployment", "desc": "Two endpoints: revenue regression and binary hit/flop classification, containerized with Docker." },
                { "title": "R² 0.84", "desc": "Best model explains 84% of revenue variance on the test set, with sub-100ms inference per request." }
            ],
            "metrics": [
                { "label": "Best R²", "value": "0.84" },
                { "label": "Models Evaluated", "value": "4" },
                { "label": "CV Folds", "value": "5" },
                { "label": "Inference Time", "value": "<100ms" }
            ]
        }
    ],
    "experience": [
        {
            "company": "Netsol Technologies",
            "role": "Python Developer Intern",
            "period": "Internship",
            "desc": [
                "Worked on data processing pipelines using FastAPI and async Python, improving query performance through batch processing.",
                "Helped build backend services handling large volumes of daily records using Pandas and NumPy.",
                "Participated in code reviews and contributed to reducing recurring bugs in production workflows."
            ]
        },
        {
            "company": "WriteO",
            "role": "Data Scientist Intern",
            "period": "Internship",
            "desc": [
                "Analyzed 500K+ records using Python, Pandas, and SQL to surface market trends and data quality issues.",
                "Trained and evaluated multiple ML models using Scikit-learn, reaching 86% classification accuracy on the validation set.",
                "Built data visualization dashboards with Matplotlib, Seaborn, and Plotly that reduced manual reporting time significantly.",
                "Engineered 40+ features for predictive models, improving overall model performance by ~22%."
            ]
        }
    ],
    "services": [
        {
            "title": "LLM Systems & Agentic AI",
            "desc": "Building multi-agent systems, RAG pipelines, and LLM orchestration using LangGraph and LangChain.",
            "icon": "bx-brain"
        },
        {
            "title": "Production ML Deployment",
            "desc": "End-to-end ML systems: feature engineering, model selection, FastAPI deployment, and Docker containerization.",
            "icon": "bx-server"
        },
        {
            "title": "Data Systems & ETL",
            "desc": "Automated data pipelines, NLP-based processing, analytics platforms, and real-time dashboards.",
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