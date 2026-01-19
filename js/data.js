const data = {
    "projects": [
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
                "github": "#" 
            },
            "features": [
                { "title": "Ingredient Recognition", "desc": "Input ingredients to get matching recipes." },
                { "title": "Instant Recommendations", "desc": "AI-generated recipe ideas in seconds." }
            ]
        },
        {
            "id": "freshtrack",
            "title": "FreshTrack",
            "summary": "Intelligent food management app to track expiry dates and reduce food waste.",
            "description": "Food waste is a significant global issue, with approximately one-third of all food produced being wasted. FreshTrack is an intelligent food management app that tracks expiry dates, sends timely notifications, and suggests recipes to reduce waste.",
            "techStack": [
                { "name": "HTML", "icon": "bxl-html5" },
                { "name": "CSS", "icon": "bxl-css3" },
                { "name": "Node.js", "icon": "bxl-nodejs" },
                { "name": "PostgreSQL", "icon": "bxl-postgresql" },
                { "name": "Firebase", "icon": "bxl-firebase" },
                { "name": "Express.js", "icon": "bx-server" }
            ],
            "links": {
                "demo": "https://github.com/AsiifShahzad/FreshTrackAi", 
                "github": "https://github.com/AsiifShahzad/FreshTrackAi"
            },
            "features": [
                { "title": "Image Recognition", "desc": "Add products by simply taking a photo. AI extracts expiry info." },
                { "title": "Smart Alerts", "desc": "Receive notifications when products approach expiry." },
                { "title": "Chef AI", "desc": "Get personalized recipe suggestions based on tracked items." },
                { "title": "Waste Analytics", "desc": "Track progress in reducing food waste." }
            ]
        },
        {
            "id": "movie-hit-prediction",
            "title": "Movie Hit Prediction",
            "summary": "ML model predicting movie success based on budget, cast, and genre.",
            "description": "Studios risk heavy losses by producing movies without reliable demand predictions. This project uses a machine learning model to predict whether a movie will be a hit or flop based on factors such as budget, cast, and genre, helping filmmakers make data-driven decisions.",
            "techStack": [
                { "name": "Python", "icon": "bxl-python" },
                { "name": "Pandas", "icon": "bx-data" },
                { "name": "Scikit-Learn", "icon": "bx-brain" },
                { "name": "Matplotlib", "icon": "bx-bar-chart-alt-2" }
            ],
            "links": {
                "demo": "https://github.com/AsiifShahzad/AI-Movie-Hit-Predictor",
                "github": "https://github.com/AsiifShahzad/AI-Movie-Hit-Predictor"
            },
            "features": [
                { "title": "Data Preprocessing", "desc": "Cleaned movie metadata for high-quality input." },
                { "title": "Feature Engineering", "desc": "Advanced features from genres and release dates." },
                { "title": "Hyperparameter Tuning", "desc": "Optimized Random Forest model using RandomizedSearchCV." },
                { "title": "Feature Importance", "desc": "Visualized key factors affecting success." }
            ]
        },
        {
            "id": "customer-segmentation",
            "title": "Customer Segmentation",
            "summary": "Interactive dashboard using D3.js to segment customers for targeted marketing.",
            "description": "Businesses struggle to target different customer groups effectively. This project is an interactive dashboard built with D3.js that segments customers into groups and provides filtering options for deeper insights.",
            "techStack": [
                { "name": "D3.js", "icon": "bx-bar-chart-alt-2" },
                { "name": "JavaScript", "icon": "bxl-javascript" },
                { "name": "HTML", "icon": "bxl-html5" },
                { "name": "CSS", "icon": "bxl-css3" }
            ],
            "links": {
                "demo": "https://github.com/AsiifShahzad/CustomerSegmentation",
                "github": "https://github.com/AsiifShahzad/CustomerSegmentation"
            },
            "features": [
                { "title": "Interactive Visuals", "desc": "Dynamic charts and graphs using D3.js." },
                { "title": "Customer Groups", "desc": "Segmentation based on purchasing behavior." }
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
            "title": "Data Analytics",
            "desc": "Providing insights from data using Python, Power BI, and SQL.",
            "icon": "bx-line-chart"
        },
        {
            "title": "Machine Learning",
            "desc": "Building predictive models using deep learning and AI.",
            "icon": "bx-brain"
        },
        {
            "title": "Web Development",
            "desc": "Creating full-stack MERN applications with modern UI/UX.",
            "icon": "bx-code"
        }
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
