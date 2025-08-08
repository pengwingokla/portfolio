import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard';
import ProjectCard from './components/ProjectCard';
import ExperienceEntry from './components/ExperienceEntry';
import TableOfContents from './components/TableOfContents';
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



export default function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const orbColors = ['#3bb8ff', '#ff66c4'];

  const experienceList = [
    {
      role: "AI Engineer",
      company: "Deeli AI",
      link: "https://deeli.ai/",
      date: "Jun 2025 – PRESENT",
      description: [
        <>
        ‣ Enhanced a multi-agent research system for CFA report synthesis by integrating an Elasticsearch MCP agent for Query DSL generation and parallel multi-index search over 1M+ documents, alongside Google Search and 4 heterogeneous data sources.
        </>,
        "‣ Cut token consumption by 60-80% by using hierarchical content limits and cross-agent query caching, eliminating token limit error",
        ]

    },
    {
      role: "Research Assistant (Code LLMs & RAG) ",
      company: "NJIT AI4Good Lab",
      link: "https://www.njit.edu",
      date: "Sep 2024 – PRESENT",
      description: [
        <>
        ‣ Delivered 1.15B-row AST-parsed code, enabling Dr. Hai Phan’s <a href="https://sites.google.com/site/ihaiphan/home?authuser=0" target="_blank" rel="noopener noreferrer" className="text-link text-decoration-none">AI4Good Lab</a> PGCode benchmarking for code generation.
        </>,
        "‣ Implemented hybrid RAG architecture with sparse (BM25) tokenized search and dense (FAISS vector search + Jina embeddings) retrieval plus CrossEncoder re-ranking for Code LLM +10% improvement of baseline Pass@1 on HumanEval/MBPP benchmarks.",
        "‣ Leveraged AST parsing then curate datasets with CodeQwen, CodeLlama and StarCoder for AI4Good Lab on Linux servers.",
        "‣ Automated 36 CodeQwen RAG generations and evals for different semantic thresholds using Bash vLLM orchestration on Linux."
      ]
    },
    {
      role: "Research Assistant (Agentic AI & Data Analytics)",
      company: "NJIT Data Analytics Dept",
      link: "https://www.njit.edu",
      date: "Sep 2024 – Jan 2025",
      description: [
        "‣ Built Snowflake ETL pipeline for 51K+ IPEDS rows using Python/SQL and APIs, cutting EDA time for streamlined analytics.",
        "‣ Delivered Streamlit dashboard to the department for benchmarking NJIT vs. 200+ peers on competitiveness and finaid allocation.",
        "‣ Built GenAI RAG chatbot using FastAPI and Fivetran for natural language querying of data from Snowflake warehouse.",
        "‣ Developed tool-calling agent using LangChain, Ollama, and Anthropic MCP for natural language queries and analytics on CSVs."
      ],
      tags: ["Python", "SQL", "Snowflake", "Streamlit"]
    },
    {
      role: "Research Assistant (Computer Vision)",
      company: "NJIT",
      link: "https://www.njit.edu",
      date: "Jan – Mar 2024",
      description: [
        "‣ Reached 15% increase in precision by fine-tuning Meta AI’s Segment Anything Model for sidewalk detection on satellite images.",
        "‣ Achieved IoU of 89% by optimizing hyperparameters cross-entropy, Dice, and focal loss functions for better segmentation.",
        <>
        ‣ Dockerized and deployed on Hugging Face Shiny for interactive detection on satellite images (See <a href="https://youtu.be/HRwn39lGHCk?si=QhtJMd6pp1ncGMwI" target="_blank" rel="noopener noreferrer" className="text-link text-decoration-none">Code Walkthrough</a> and <a href="https://github.com/pengwingokla/artificial-intelligent-assignments" target="_blank" rel="noopener noreferrer" className="text-link text-decoration-none">GitHub</a>)
        </>
      ],
      tags: ["Python", "Hugging Face Shiny"]
    },
    {
      role: "Web Developer",
      company: "Hung Long Agriculture Product Co. Ltd",
      link: "/#",
      date: "Jun – Aug 2024",
      description: [
        "‣ Built a full-stack responsive website using React, Vue, TailwindCSS to sell 4 products and acquired 60+ partners in 1 month.",
        "‣ Enabled 24+ spam-free inquiry submission, by building a contact form with server-side validation with CAPTCHA & FastAPI."
      ],
      tags: ["React", "Node.js", "TailwindCSS"]
    },
    {
      role: "UX Analyst",
      company: "Timo Digital Bank",
      link: "https://timo.vn",
      date: "Jun 2021 – Jan 2022",
      description: [
        "‣ Increased transaction size and user engagement by 22% by leveraging Power BI for large-scale transaction pattern analysis.",
        "‣ Designed 8+ A/B tests on transaction completion data, data-driven insights for strategic roadmap for the Move Money product sprints."
      ],
      tags: ["PowerBI", "Tableau", "Figma"]
    }
  ];

  const leadershipList = [
    {
      role: "Volunteer Data Scientist",
      company: "AI for Vietnam",
      link: "https://aiforvietnam.org/about-us/",
      date: "Jan 2025 – PRESENT",
      description: [
        <>
          ‣ Learning and applying insights from <em>FineWeb</em>-style curation methods to contribute to the design of <a href="https://aiforvietnam.org/vigen/" target="_blank" rel="noopener noreferrer" className="text-link text-decoration-none">ViGen</a>, an end-to-end Vietnamese LLM dataset pipeline involving deduplication, filtering, topic modeling, and benchmark development.
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
        ‣ Secured Top 50 in the Google Solution Challenge 2022 by leading <a href="https://www.youtube.com/watch?v=eecZUa5bhGI&ab_channel=UyenNguyen" target="_blank" rel="noopener noreferrer" className="text-link text-decoration-none">Hearty Plant</a>, a $6,500-funded hydroponic farming system web app. 
         </>,
         "‣ Mentored a team of 5 Flutter beginners, promoting unit testing and code review practices, resulting in 10+ issues resolution in 3 months.",
        "‣ Achieved 5% faster development cycle by integrating RESTful APIs and WebSocket to facilitate real-time sensor data handling.",
        ],
    },
  ]

  const projectCategories = {
    "Computer Vision": [
      {
        title: "SAM Satellite Imagery Segmentation",
        description: "Fine-tuned Meta AI's SAM model on satalite images to detect sidewalks with optimized loss functions and deployed the model on Hugging Face with an interactive demo.",
        tags: ["Computer Vision", "Hugging Face", "HPC"],
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
        tags: ["Python", "YOLO", "Kalman Filter", "Computer Vision", "TensorFlow"],
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
    "Cloud Computing": [
      {
        title: "Parallel AWS EC2 Car Detector Using Amazon SQS and Rekognition",
        description: "A parallel image processing system with streaming for car and text OCR using Rekognition and coordinates using SQS queues.",
        tags: ["Java", "AWS EC2", "S3", "SQS", "Rekognition"],
        date: "Dec 2024",
        link: "https://github.com/pengwingokla/Parallel-Detector-with-Amazon-SQS-and-Rekognition",
        image: aaSpark
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
        title: "Higher Ed Analytics Dashboard",
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
    "GLU Cluster Programming": [
      {
        title: "MPI CUDA Video Parallel Processor",
        description: "A parallel computing project that demonstrates distributed GPU-accelerated video processing. It combines MPI for task distribution across multiple processes with CUDA for GPU acceleration to process video frames in parallel. ",
        tags: ["Computer Vision", "Hugging Face", "HPC"],
        date: "Jul 2024",
        link: "https://github.com/pengwingokla/MPI-CUDA-Video-Parallel-Processor",
        image: aaMPICUDA
      },
    ]
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }} className="text-light">
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
        <div className="p-5 row g-5" style={{width: '100%' }}>
          {/* Sidebar */}
          <div
            className="col-md-4 col-lg-3 p-2"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              position: 'sticky',
              top: 0,
              height: '100vh'
            }}
          >
            <ProfileCard />

          </div>

          {/* Main Content */}
          <div className="col-md-8 col-lg-9 d-flex flex-column justify-content-left">
            <div className="px-4" style={{ width: '100%' }}>
              {/* TAB NAVIGATION */}
              <div className="px-5 py-3">
                <ul className="nav" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
                      onClick={() => setActiveTab('experience')}
                      type="button"
                      role="tab"
                      style={{
                        backgroundColor: 'transparent',
                        color: activeTab === 'experience' ? '#ffffffff' : '#b4b4b4ff',
                        border: 'none',
                        borderBottom: activeTab === 'experience' ? '3px solid #ffffffff' : 'none',
                        textTransform: 'uppercase',
                        marginRight: '2rem'
                      }}
                    >
                      Experience
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                      onClick={() => setActiveTab('projects')}
                      type="button"
                      role="tab"
                      style={{
                        backgroundColor: 'transparent',
                        color: activeTab === 'projects' ? '#ffffffff' : '#c5c9cdff',
                        border: 'none',
                        borderBottom: activeTab === 'projects' ? '3px solid #b4b4b4ff' : 'none',
                        textTransform: 'uppercase',
                        marginRight: '2rem'
                      }}
                    >
                      Projects
                    </button>
                  </li>
                </ul>
              </div>

              {/* TAB CONTENT */}
              <div className="tab-content">
                {/* EXPERIENCE TAB */}
                {activeTab === 'experience' && (
                  <div className="tab-pane fade show active">
                    {/* EXPERIENCE SECTION */}
                    <section>
                      <div className="px-5 px-md-6 py-5 d-flex flex-column" style={{ maxWidth: '1200px', width: '100%' }}>
                        {/* <h3 className="text-white text-md-start mb-1">Experience</h3> */}
                        {experienceList.map((exp, idx) => (
                          <ExperienceEntry key={idx} {...exp} />
                        ))}
                      </div>
                    </section>
                    {/* LEADERSHIP SECTION */}
                    <section>
                      <div className="px-5 px-md-6 py-5 d-flex flex-column" style={{ maxWidth: '1200px', width: '100%' }}>
                        <h3 className="text-white text-md-start mb-1">Leadership</h3>
                        {leadershipList.map((exp, idx) => (
                          <ExperienceEntry key={idx} {...exp} />
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {/* PROJECTS TAB */}
                {activeTab === 'projects' && (
                  <div className="tab-pane fade show active">
                    <section className="px-5 mt-5" style={{ maxWidth: '700px' }}>
                      {Object.entries(projectCategories).map(([category, projects]) => (
                        <div key={category} className="mb-5" id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}>
                          <h4 className="text-white text-md-start mb-4">{category}</h4>
                          <div className="row row-cols-1 g-4">
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
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Floating Table of Contents */}
      <TableOfContents activeTab={activeTab} projectCategories={projectCategories} />
    </div>
  );
}
