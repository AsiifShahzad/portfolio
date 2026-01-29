const data = {
    "projects": [

        {
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
            "id": "chef-ai",
            "title": "Chef Ai",
            "summary": "AI-powered recipe recommender helping users decide what to cook with limited ingredients.",
            "description": "Many people struggle with deciding what to cook using the limited ingredients they have at home. This often leads to food waste or repetitive meals. Chef Ai takes user-provided ingredients and instantly recommends recipe ideas, helping users save time, reduce waste, and try new dishes.",
            "techStack": [
                { "name": "React.js", "icon": "bxl-react" },
                { "name": "Node.js", "icon": "bxl-nodejs" },
                { "name": "Hugging Face", "icon": "bx-brain" },
                { "name": "CSS", "icon": "bxl-css3" }
            ],
            "links": {
                "demo": "https://radiant-sopapillas-9ee167.netlify.app/",
                "github": "https://github.com/AsiifShahzad/ChefAI"
            },
            "features": [
                { "title": "Ingredient Recognition", "desc": "Input ingredients to get matching recipes." },
                { "title": "Instant Recommendations", "desc": "AI-generated recipe ideas in seconds." }
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
