import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard';
import ProjectCard from './components/ProjectCard';
import ExperienceEntry from './components/ExperienceEntry';
// images
import aameta from "./img/aa-meta.png";


export default function App() {
  const orbColors = ['#3bb8ff', '#ff66c4'];

  const experienceList = [
    {
      role: "Graduate Research Assistant",
      company: "NJIT",
      link: "https://www.njit.edu",
      date: "Sep 2024 – PRESENT",
      description: [
        "Implemented and evaluated RAG with AI4Good Lab’s LLM using HumanEval and MBPP benchmarks to assess model improvement.",
        "Leveraged AST parsing to curate 1.15B rows datasets with CodeQwen, CodeLlama and StarCoder for AI4Good Lab on Linux servers.",
        "Developed Bash scripts to interact with StarCoder vLLM server for multithreaded API requests in a Linux environment."
      ]
    },
    {
      role: "Data Analyst",
      company: "NJIT",
      link: "https://www.njit.edu",
      date: "Sep 2024 – PRESENT",
      description: [
        "Built a SQL-Powered RAG Pipeline for GenAI chatbot with Snowflake and Fivetran for the NJIT Data Analytics department.",
        "Conducted ETL processes on university data by scraping IPEDS and using Snowflake warehouse to assess NJIT market competitiveness.",
        "Developed interactive PowerBI, Tableau and Streamlit enrollment data dashboards for stakeholders to track competitiveness."
      ],
      tags: ["Python", "SQL", "Snowflake", "Streamlit"]
    },
    {
      role: "Undergraduate Research Assistant",
      company: "NJIT",
      link: "https://www.njit.edu",
      date: "Jan – Mar 2024",
      description: [
        "Reached 15% increase in precision by fine-tuning Meta AI’s Segment Anything Model for sidewalk detection on satellite images.",
        "Achieved IoU of 89% by optimizing hyperparameters cross-entropy, Dice, and focal loss functions for better segmentation.",
        "Dockerized and deployed on Hugging Face Shiny for interactive detection on satellite images (See Code Walkthrough and GitHub)"
      ],
      tags: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      role: "Web Developer",
      company: "Hung Long Agriculture Product Co. Ltd",
      link: "/#",
      date: "Jun – Aug 2024",
      description: [
        "Developed website using React, Vue, TailwindCSS to sell 4 product lines and acquired 60+ partner contacts using Google App Script.",
        "Optimized database transition from Excel to SQL DBMS, cutting 80% query execution time while handling 15% data volume increase.",
        "Replicated production environments on Bash and Linux/macOS virtual machines, ensuring seamless deployment to Kubernetes."
      ],
      tags: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      role: "UX Research Intern",
      company: "Timo Digital Bank",
      link: "https://timo.vn",
      date: "Jun 2021 – Jan 2022",
      description: [
        "Increased transaction size and user engagement by 22% by leveraging Power BI for large-scale transaction pattern analysis.",
        "Designed 8+ A/B tests on transaction completion data, data-driven insights for strategic roadmap for the Move Money product sprints."
      ],
      tags: ["JavaScript", "TypeScript", "React", "Storybook"]
    }
  ];

  const projectList = [
    {
      title: "Finetuning Meta AI’s Segment Anything Model for Sidewalk Detection on Satellite Images",
      description: "Fine-tuned Meta AI's SAM model on satalite images to detect sidewalks with optimized loss functions and deployed the model on Hugging Face with an interactive demo.",
      tags: ["Computer Vision", "Hugging Face", "HPC"],
      date: "Jul 2024",
      link: "https://github.com/pengwingokla/MetaAI-segment-anything-model",
      image: { aameta }
    },
    {
      title: "Parallel AWS EC2 Car Detector Using Amazon SQS and Rekognition",
      description: "A parallel image processing system with streaming for car and text OCR using Rekognition and coordinates using SQS queues.",
      tags: ["Java", "AWS EC2", "S3", "SQS", "Rekognition"],
      date: "Dec 2024",
      link: "https://github.com/pengwingokla/Parallel-Detector-with-Amazon-SQS-and-Rekognition",
      image: "./img/aa-spark.png"
    },
    {
      title: "Full-Stack Pomodoro Android App",
      description: "An Android app that integrates YouTube API and SQLite database to track user focus and visualize session stats.",
      tags: ["Kotlin", "SQLite", "API"],
      date: "Dec 2023",
      link: "https://github.com/CS388-Fall-2023-Group-Project",
      image: "./img/aa-pomodoro.gif"
    },
    {
      title: "Spark Wine Quality Prediction",
      description: "Used Spark MLlib and Hadoop HDFS to train a wine quality classifier at scale, deploying on EC2 with Dockerized Spark clusters and monitoring via Spark Web UI.",
      tags: ["Apache Spark", "MLlib", "EC2", "HDFS", "Docker"],
      date: "Dec 2024",
      link: "https://github.com/pengwingokla/Spark-Wine-Predictor",
      image: "./img/aa-spark.png"
    },
    {
      title: "Deep Learning Dual Encoder YouTube Video Retrieval and Recommendation",
      description: "A video retrieval system using autoencoder models in TensorFlow and PyTorch, powered by YOLO for frame understanding and indexed using Azure Cosmos DB and SQL.",
      tags: ["Python", "TensorFlow", "PyTorch", "Keras", "Azure Cosmos DB", "SQL", "YOLO", "CUDA", "Autoencoder"],
      date: "Mar 2024",
      link: "https://github.com/pengwingokla/Machine-Learning-Video-Search",
      image: "./img/aa-videosearch.png"
    },
    {
      title: "Kalman-filtered Multi-Object Detection for Drone Video",
      description: "Boosted object tracking stability by 35% using Kalman filtering, reducing false positives in consecutive YOLO car and cyclist detections.",
      tags: ["Python", "YOLO", "Kalman Filter", "Computer Vision", "TensorFlow"],
      date: "April 2024",
      link: "https://drive.google.com/drive/folders/1rpOvINEG87zVAyD-nCcOF6t6y0vgJ7T0?usp=sharing",
      image: "./img/aa-car.png"
    },
    {
      title: "CNN Vision LEGO Conveyor Belt Sorter",
      description: "Built a LEGO piece sorting machine using Arduino and C++ servo logic, with a TensorFlow-trained CNN to classify parts and trigger conveyor actions.",
      tags: ["C++", "Python", "TensorFlow", "Arduino", "CNN", "Computer Vision"],
      link: "https://drive.google.com/file/d/1rq_ZEgqtOUeORUiQRMvtXVrFe0T3OPE-/view?usp=sharing",
      image: "./img/aa-lego.png"
    },
    // Add more as needed
  ];

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
        <div className="row g-0 min-vh-100">
          {/* Sidebar */}
          <div
            className="col-md-4 p-5"
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
          <div className="col-md-8 d-flex flex-column justify-content-left">
            <div className="px-5" style={{ width: '100%' }}>
              {/* EXPERIENCE SECTION */}
              <section>
                <div className="px-4 px-md-6 py-5 d-flex flex-column" style={{ maxWidth: '1000px', width: '100%' }}>
                  {/* EXPERIENCE HEADER */}
                  <h3 className="text-white text-md-start mb-1">Experience</h3>
                  {experienceList.map((exp, idx) => (
                    <ExperienceEntry key={idx} {...exp} />
                  ))}

                </div>
              </section>
              {/* PROJECTS SECTION */}
              <section className="px-5 mt-5">
                <h3 className="text-info text-md-start mb-4">Projects</h3>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {projectList.map((project, index) => (
                    <div className="col" key={index}>
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
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
