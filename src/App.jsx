import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard';
import NameCard from './components/NameCard';
import ChatInputNav from './components/ChatInputNav';
// import AboutCards from './components/AboutCards';
import ProjectCard from './components/ProjectCard';
import FeaturedProject from './components/FeaturedProject';
import WorkTimeline from './components/WorkTimeline';
import ExperienceEntry from './components/ExperienceEntry';
import TableOfContents from './components/TableOfContents';
import CursorSparkle from './components/CursorSparkle';
import LeadershipSection from './components/LeadershipSection';
// images
import aaMeta from '/img/meta.png';
import aaPomodoroGIF from '/img/pomodoro.gif';
import aaSpark from '/img/spark.png';
import aaVideoSearch from '/img/videosearch.png';
import aacar from '/img/car.png';
import aalego from '/img/lego.png';
import aarstreamlit from '/img/streamlit-screenshot.png';
import aarproject from '/img/RProject.png';
import aaMPICUDA from '/img/mpi-cuda.png';
import aaCarDetector from '/img/cardetectordiagram.png';
import aafestiviai from '/img/festivai.png';
import aafrauddetection from '/img/fraudproject.jpeg';



export default function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const orbColors = ['#c2f2e4', '#35c8b4', '#edf7be', '#a4cf4a'];

  const experienceList = [
    {
      role: "AI Engineer",
      company: "Deeli AI",
      link: "https://deeli.ai/",
      date: "Jun 2025 – Jan 2026",
      description: [
        "• Architected MCP-based Elasticsearch agent for compiling market research by generating QueryDSL across 120 fields and 8M papers.",
        "• Owned integration of agent into production multi-agent system, serving thousands of customers with research-backed market insights.",
        "• Applied few-shot prompting to guide LLM for QueryDSL generation while allowing dynamic flexible search clause and indices selection.",
        "• Improved search relevancy with 200ms lower latency by parallelizing queries across Elasticsearch, Google Search, 4+ other sources.",
        "• Saved 10% inference cost by optimizing agent reasoning via state management, removed parsing errors and redundant router calls.",
        "• Designed 150-question test suite covering 40-50 query patterns and evaluated hit rate to test query construction capabilities.",
        "• Reduced 90% of LLM's parsing errors by enforcing Pydantic JSON schemas for type-safe agent-to-agent context communication.",
        "• Adopted hierarchical content limits and cross-agent query caching to bound context size, optimizing 60% tokens consumption.",
        "• Evaluated RAG cost-accuracy tradeoffs via 80+ MLFlow experiments on chunk size, top-k, RRF for financial question answering",
        "• Boosted 67% MRR@5 (answer ranking quality) for financial QA via agentic KG construction, table-aware chunking & hybrid RRF."
      ]

    },
    {
      role: "Machine Learning Engineer, Fraud Detection",
      company: "New Jersey Courts",
      link: "https://www.njcourts.gov/",
      date: "Jun 2025 – Dec 2025",
      description: [
        <>
        • Detected 150+ fraud transactions worth $20K loss via anomaly detection pipeline that batch-process 18K+ E-ZPass transactions.
        </>,
        <>
        • Built E2E Airflow DAGs automating ETL and training tasks across GCP, BigQuery, dbt to track fail alerts, logs and retries.
        </>,
        <>
        • Engineered 30 time-series, geospatial, and behavioral features using modular dbt SQL transformations to capture fraudulent patterns.
        </>,
        <>
        • Delivered 10+ Flask RESTful API endpoints for transaction queries, filtering, and real-time metrics aggregation from BigQuery.
        </>,
        <>
        • Evaluated 20+ model experiments across 5 algorithms on MLFlow and systematically identified the optimal model configuration.
        </>,
        <>
        • Implemented IAM service accounts and role-based policies ensuring security compliance for Flask API and Airflow access to GCP.
        </>,
        <>
        • Containerized Airflow ETL stack using Docker Compose with PostgresSQL backend for reproducible development and pipeline testing.
        </>,
        <>
        • Established GitHub Actions CI/CD pipeline deploying to Azure with pytest for backend testing and Playwright for E2E validation.
        </>,
        <>
        • Worked with PM in Agile sprint planning, product design, data structure implementation, and code reviews with acceptance criteria.
        </>
      ]

    },
    {
      role: "Research Assistant, Code LLMs & RAG",
      company: "NJIT OppyAI Lab",
      link: "https://www.njit.edu",
      date: "Sep 2024 - Jun 2025",
      description: [
        "• Engineered AST parser processing 1.15B-row code corpus to evaluate structural and semantic correctness of Code LLM outputs.",
        "• Improved CodeQwen Pass@1 on HumanEval/MBPP benchmarks by architecting hybrid RAG pipeline for code context augmentation.",
        "• Optimized retrieval quality through systematic experiments with BM25, Pinecone, FAISS, and CrossEncoder reranking configuration.",
        "• Conducted 60 systematic experiments evaluating RAG-augmented prompt via vLLM serving and bash orchestration on Linux."
      ]
    },
    {
      role: "Research Assistant, Agentic AI & Data Analytics",
      company: "NJIT Data Analytics Department",
      link: "https://www.njit.edu",
      date: "Sep 2024 - Jan 2025",
      description: [
        "• Built LangGraph text-to-SQL agent empowering 8 non-technical staff to query databases with natural language instead of SQL.",
        "• Shipped dashboard benchmarking NJIT against 6,050 institutions, enabling comparative analysis on performance and financial aid.",
        "• Architected reproducible dbt ETL workflow processing 220K+ IPEDS records, automating repetitive EDA and data quality checks",
        "• Resolved schema mismatches across 5 years of historical data using dbt macros and YAML configs, standardizing data processing"
      ],
      tags: ["Python", "SQL", "Snowflake", "Streamlit"]
    },
    {
      role: "Research Assistant, Computer Vision",
      company: "NJIT YWCC",
      link: "https://www.njit.edu",
      date: "Jan - Mar 2024",
      description: [
        "• Fine-tuned Meta AI SAM for sidewalk masks using PyTorch, delivering 70% IoU and +15% precision gain against baseline.",
        "• Reduced 60% GPU memory usage by tiling 200K+ GeoTIFF into patches and storing metadata in Parquet for batch training.",
        "• Deployed on Hugging Face with Docker containerization for sidewalk detection and mask visualization on user-uploaded images."
      ],
      tags: ["Python", "Hugging Face Shiny"]
    },
    {
      role: "Web Developer",
      company: "Hung Long Agriculture Product Co. Ltd",
      link: "/#",
      date: "Jun – Aug 2024",
      description: [
        "• Built a full-stack responsive website using React, Vue, TailwindCSS to sell 4 products and acquired 60+ partners in 1 month.",
        "• Enabled 24+ spam-free inquiry submission, by building a contact form with server-side validation with CAPTCHA & FastAPI."
      ],
      tags: ["React", "Node.js", "TailwindCSS"]
    },
    {
      role: "UX Analyst",
      company: "Timo Digital Bank",
      link: "https://timo.vn",
      date: "Jun 2021 – Jan 2022",
      description: [
        "• Increased transaction size and user engagement by 22% by leveraging Power BI for large-scale transaction pattern analysis.",
        "• Designed 8+ A/B tests on transaction completion data, data-driven insights for strategic roadmap for the Move Money product sprints."
      ],
      tags: ["PowerBI", "Tableau", "Figma"]
    }
  ];

  // Group NJIT experiences together
  const groupNJITExperiences = (experiences) => {
    const njitExperiences = [];
    const otherExperiences = [];
    
    experiences.forEach(exp => {
      if (exp.company.startsWith('NJIT') || exp.company === 'NJIT') {
        njitExperiences.push(exp);
      } else {
        otherExperiences.push(exp);
      }
    });
    
    if (njitExperiences.length > 0) {
      // Sort NJIT experiences by date (most recent first)
      njitExperiences.sort((a, b) => {
        // Simple date comparison - extract year/month from date string
        const getDateValue = (dateStr) => {
          if (dateStr.includes('PRESENT')) return Infinity;
          const match = dateStr.match(/(\w{3})\s+(\d{4})/);
          if (match) {
            const months = { 'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12 };
            return parseInt(match[2]) * 12 + (months[match[1]] || 0);
          }
          return 0;
        };
        return getDateValue(b.date) - getDateValue(a.date);
      });
      
      // Get earliest and latest dates
      const dates = njitExperiences.map(e => e.date);
      const earliestDate = dates[dates.length - 1].split('–')[0].trim();
      const latestDate = dates[0].includes('PRESENT') ? 'PRESENT' : dates[0].split('–')[1]?.trim() || dates[0].split('–')[0].trim();
      
      // Create grouped NJIT entry
      const groupedNJIT = {
        company: "NJIT",
        link: njitExperiences[0].link,
        date: `${earliestDate} – ${latestDate}`,
        roles: njitExperiences.map(exp => ({
          role: exp.role,
          date: exp.date,
          description: exp.description,
          company: exp.company,
          link: exp.link
        }))
      };
      
      // Insert grouped NJIT at the position of the first NJIT experience
      const firstNJITIndex = experiences.findIndex(e => e.company.startsWith('NJIT') || e.company === 'NJIT');
      const result = [...otherExperiences];
      result.splice(firstNJITIndex, 0, groupedNJIT);
      return result;
    }
    
    return experiences;
  };

  const groupedExperiences = groupNJITExperiences(experienceList);

  const leadershipList = [
    {
      role: "Volunteer Data Scientist",
      company: "AI for Vietnam Foundation",
      link: "https://aiforvietnam.org/about-us/",
      date: "Jan 2025 – Jun 2025",
      description: [
        <>
          ‣ Learning and applying insights from <em style={{ color: '#35c8b4' }}>FineWeb</em>-style curation methods to contribute to the design of <a href="https://aiforvietnam.org/vigen/" target="_blank" rel="noopener noreferrer" className="text-link text-decoration-none" style={{ color: '#35c8b4' }}>ViGen</a>, an end-to-end Vietnamese LLM dataset pipeline involving deduplication, filtering, topic modeling, and benchmark development.
        </>,
        ]

    },
    {
      role: "Tech Lead",
      company: "Google Developer Student Club",
      link: "https://www.linkedin.com/company/gdsc-fuv/posts/?feedView=all",
      date: "May 2021 – May 2022",
      description: [
        <>
        ‣ Secured Top 50 in the Google Solution Challenge 2022 by leading <a href="https://www.youtube.com/watch?v=eecZUa5bhGI&ab_channel=UyenNguyen" target="_blank" rel="noopener noreferrer" className="text-link text-decoration-none" style={{ color: '#35c8b4' }}>Hearty Plant</a>, a $6,500-funded hydroponic farming system web app. 
         </>,
         "‣ Mentored a team of 5 Flutter beginners, promoting unit testing and code review practices, resulting in 10+ issues resolution in 3 months.",
        "‣ Achieved 5% faster development cycle by integrating RESTful APIs and WebSocket to facilitate real-time sensor data handling.",
        ],
    },
  ]

  const projectCategories = {
    "Cloud Computing": [
      {
        title: "Parallel AWS EC2 Car Detector Using Amazon SQS and Rekognition",
        description: "A parallel image processing system with streaming for car and text OCR using Rekognition and coordinates using SQS queues.",
        tags: ["Java", "AWS EC2", "S3", "SQS", "Rekognition"],
        date: "Dec 2024",
        link: "https://github.com/pengwingokla/Parallel-Detector-with-Amazon-SQS-and-Rekognition",
        image: aaCarDetector
      },
      {
        title: "Spark Wine Quality Prediction",
        description: "Used Spark MLlib and Hadoop HDFS to train a wine quality classifier at scale, deploying on EC2 with Dockerized Spark clusters and monitoring via Spark Web UI.",
        tags: ["Apache Spark", "MLlib", "EC2", "HDFS", "Docker"],
        date: "Dec 2024",
        link: "https://github.com/pengwingokla/Spark-Wine-Predictor",
        image: aaSpark
      }
    ],
    "Data Analytics": [
      {
        title: "Higher Education Analytics Dashboard",
        description: " The dashboard provides comprehensive visualizations of university enrollment trends, admission and yield rates, graduation funnels, and cohort outcomes across different states and institutions.",
        tags: ["Python", "SQL", "ETL", "Snowflake", "Streamlit", "Data Analytics"],
        link: "https://github.com/pengwingokla/IPEDS-Ed-Analytics-Dashboard",
        image: aarstreamlit
      },
      {
        title: "Data Analytics with R",
        description: "Analyzed a collection of virology research papers to extract key trends and patterns using R. Implemented frequency analysis to surface the most prominent keywords across publications.",
        tags: ["R", "Data Analytics"],
        link: "https://github.com/pengwingokla/Data-Analytics-with-R",
        image: aarproject
      }
    ],
    "Computer Vision": [
      {
        title: "SAM Satellite Imagery Segmentation",
        description: "Fine-tuned Meta AI's SAM model on satalite images to detect sidewalks with optimized loss functions and deployed the model on Hugging Face with an interactive demo.",
        tags: ["PyTorch", "Python", "Image Segmentation", "HPC", "Geospatial Data", "tifffile", "Hugging Face"],
        date: "Jul 2024",
        link: "https://github.com/pengwingokla/MetaAI-segment-anything-model",
        image: aaMeta
      },
      {
        title: "Dual Encoder YouTube Video Retrieval and Recommendation",
        description: "A retrieval system that indexes and recommends YouTube videos by learning latent semantic structures from video content and user queries, using dual encoders for multimodal narrative matching. Built with TensorFlow and PyTorch, leveraging YOLO for frame understanding and indexed via Azure Cosmos DB and SQL.",
        tags: ["Python", "TensorFlow", "PyTorch", "Keras", "Azure Cosmos DB", "SQL", "YOLO", "CUDA", "Autoencoder", "PCA", "Semantic Search", "Similarity Retrieval"],
        date: "Mar 2024",
        link: "https://github.com/pengwingokla/Machine-Learning-Video-Search",
        image: aaVideoSearch
      },
      {
        title: "Kalman-filtered Multi-Object Detection for Drone Video",
        description: "Boosted object tracking stability by 35% using Kalman filtering, reducing false positives in consecutive YOLO car and cyclist detections.",
        tags: ["Python", "YOLO", "Kalman Filter", "TensorFlow"],
        date: "April 2024",
        link: "https://drive.google.com/drive/folders/1rpOvINEG87zVAyD-nCcOF6t6y0vgJ7T0?usp=sharing",
        image: aacar
      },
      {
        title: "CNN Vision LEGO Conveyor Belt Sorter",
        description: "Built a LEGO piece sorting machine using Arduino and C++ servo logic, with a TensorFlow-trained CNN to classify parts and trigger conveyor actions.",
        tags: ["C++", "Python", "TensorFlow", "Arduino", "CNN", "Computer Vision"],
        link: "https://drive.google.com/file/d/1rq_ZEgqtOUeORUiQRMvtXVrFe0T3OPE-/view?usp=sharing",
        image: aalego
      }
    ],
    "AI/ML": [
      {
        title: "E-ZPass Fraud Detection",
        description: "E-ZGuard is an automated fraud detection and analytics platform designed to identify suspicious activity within E-ZPass toll transaction data. ",
        tags: ["React", "JavaScript", "CSS", "HTML", "Python", "Google Cloud Platform", "Airflow", "MLFlow", "Docker"],
        date: "Dec 2025",
        link: "https://github.com/pengwingokla/E-ZPass-Fraud-Detection",
        image: aafrauddetection
      },
      {
        title: "FestivAI",
        description: "An AI-powered application that generates personalized travel plans based on user festival preferences. Built on Google Cloud Platform, it leverages AI for intelligent content creation and Cloud Run for scalable deployment.",
        tags: ["Typescript", "Google Cloud Platform", "AI", "Cloud Run"],
        date: "Aug 2025",
        link: "https://www.youtube.com/watch?v=XkL_dui6n04",
        image: aafestiviai
      }
    ],
    "Mobile": [
      {
        title: "Full-Stack Pomodoro Android App",
        description: "An Android app that integrates YouTube API and SQLite database to track user focus and visualize session stats.",
        tags: ["Kotlin", "SQLite", "API"],
        date: "Dec 2023",
        link: "https://github.com/CS388-Fall-2023-Group-Project",
        image: aaPomodoroGIF
      }
    ],
    "GPU Cluster Programming": [
      {
        title: "MPI CUDA Video Parallel Processor",
        description: "A parallel computing project that demonstrates distributed GPU-accelerated video processing. It combines MPI for task distribution across multiple processes with CUDA for GPU acceleration to process video frames in parallel. ",
        tags: ["C/C++", "MPI", "CUDA", "FFmpeg", "OpenCV"],
        date: "Jul 2024",
        link: "https://github.com/pengwingokla/MPI-CUDA-Video-Parallel-Processor",
        image: aaMPICUDA
      },
    ]
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#ffffff' }} className="text-light">
      {/* Background Orbs */}
      <div className="background-orbs">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="orb"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: orbColors[Math.floor(Math.random() * orbColors.length)]
            }}
          ></div>
        ))}
      </div>

      <div className="container-fluid px-0" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <div className="py-4" style={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'center',
          fontFamily: "'Work Sans', sans-serif",
          position: 'relative',
          zIndex: 100,
          paddingLeft: '5rem',
          paddingRight: '2rem',
          gap: '3rem'
        }}>
          {/* Left: Name/Logo and Navigation */}
          <div style={{ color: '#000000', fontSize: '1rem', fontWeight: 400, fontFamily: "'Work Sans', sans-serif" }}>
            uyen nguyen portfolio
          </div>
          
          {/* Navigation */}
          <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', position: 'relative', zIndex: 101 }}>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveTab('experience');
              }}
              style={{ 
                color: activeTab === 'experience' ? '#35c8b4' : '#000000', 
                fontSize: '1rem',
                fontWeight: 400,
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '1rem 1.5rem',
                minHeight: '48px',
                minWidth: '120px',
                transition: 'color 0.2s ease',
                zIndex: 102,
                pointerEvents: 'auto',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: activeTab === 'experience' ? 'underline' : 'none',
                textUnderlineOffset: '0.2em'
              }}
            >
              home
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveTab('projects');
              }}
              style={{ 
                color: activeTab === 'projects' ? '#35c8b4' : '#000000', 
                fontSize: '1rem',
                fontWeight: 400,
                position: 'relative',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '1rem 2.5rem',
                minHeight: '48px',
                minWidth: '180px',
                transition: 'color 0.2s ease',
                zIndex: 102,
                pointerEvents: 'auto',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: activeTab === 'projects' ? 'underline' : 'none',
                textUnderlineOffset: '0.2em'
              }}
            >
              projects
            </button>
          </nav>
        </div>
      </div>

      <div className="container-fluid px-0" style={{ position: 'relative', zIndex: 1 }}>
        <div className="p-5 row g-5" style={{width: '100%' }}>
          {/* Sidebar */}
          {/* <div
            className="col-md-4 col-lg-3 p-2"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              position: 'sticky',
              top: 0,
              height: '100vh'
            }}
          >
            <ProfileCard />

          </div> */}

          {/* Main Content */}
          <div className="col-12 d-flex flex-column justify-content-left">
            <div className="px-4" style={{ width: '100%' }}>
              {/* TAB CONTENT */}
              <div className="tab-content">
                {/* EXPERIENCE TAB */}
                {activeTab === 'experience' && (
                  <div className="tab-pane fade show active">
                    {/* EXPERIENCE SECTION */}
                    <section id="experience-section">
                      <div className="px-5 px-md-6 py-5 d-flex flex-column" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '-3rem' }}>
                          <NameCard />
                          <ChatInputNav />
                          <WorkTimeline experiences={groupedExperiences} />
                          <FeaturedProject projects={Object.values(projectCategories).flat()} />
                          <LeadershipSection experiences={leadershipList} />
                          
                          {/* <AboutTabs /> */}
                          {/* <AboutCards /> */}
                        </div>
                        
                        {/* <h3 className="text-white text-md-start mb-1">Experience</h3> */}
                        {/* {experienceList.map((exp, idx) => (
                          <ExperienceEntry key={idx} {...exp} />
                        ))} */}
                      </div>
                    </section>
                    {/* LEADERSHIP SECTION */}
                    {/* <section>
                      <div className="px-5 px-md-6 py-5 d-flex flex-column" style={{ maxWidth: '1200px', width: '100%' }}>
                        <h3 className="text-white text-md-start mb-1">Leadership</h3>
                        {leadershipList.map((exp, idx) => (
                          <ExperienceEntry key={idx} {...exp} />
                        ))}
                      </div>
                    </section> */}
                  </div>
                )}

                {/* PROJECTS TAB */}
                {activeTab === 'projects' && (
                  <div className="tab-pane fade show active">
                    <div style={{ display: 'flex', gap: '3rem', padding: '2rem 5rem', alignItems: 'flex-start', alignContent: 'flex-start' }}>
                      {/* Left Panel - Table of Contents */}
                      <div style={{ 
                        minWidth: '250px',
                        maxWidth: '300px',
                        flexShrink: 0,
                        position: 'sticky',
                        top: '2rem',
                        alignSelf: 'flex-start'
                      }}>
                        <TableOfContents activeTab={activeTab} projectCategories={projectCategories} />
                      </div>
                      
                      {/* Right Panel - Project Cards */}
                      <div style={{ flex: 1, minWidth: 0, alignSelf: 'flex-start' }}>
                        <section style={{ marginTop: 0 }}>
                          {Object.entries(projectCategories).map(([category, projects]) => (
                            <div key={category} className="mb-5" id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}>
                              <h4 className="text-md-start mb-4" style={{ color: '#000000' }}>{category}</h4>
                              <div className="row row-cols-1 row-cols-md-2 g-4">
                                {projects.map((project, index) => (
                                  <div 
                                    className="col" 
                                    key={index}
                                    id={`project-${category.replace(/\s+/g, '-').toLowerCase()}-${index}`}
                                  >
                                    <ProjectCard
                                      title={project.title}
                                      description={project.description}
                                      tags={project.tags}
                                      link={project.link}
                                      date={project.date}
                                      image={project.image}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </section>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Cursor Sparkle Effect */}
      <CursorSparkle />
    </div>
  );
}
