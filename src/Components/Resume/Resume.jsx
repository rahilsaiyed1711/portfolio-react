import React from "react";

const Resume = () => {
  const styles = {
    page: {
      fontFamily: "'Calibri', 'Arial', sans-serif",
      lineHeight: 1.4,
      color: "#333",
      background: "#f5f5f5",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      width: "8.5in",
      height: "11in",
      background: "white",
      padding: "0.5in",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      fontSize: "11px",
      position: "relative",
    },
    header: {
      textAlign: "center",
      marginBottom: "10px",
      borderBottom: "2px solid #1a3a52",
      paddingBottom: "8px",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#1a3a52",
      marginBottom: "3px",
    },
    contact: {
      fontSize: "10px",
      color: "#444",
      lineHeight: 1.3,
    },
    contactLink: {
      color: "#1a3a52",
      textDecoration: "none",
    },
    section: {
      marginBottom: "10px",
    },
    sectionTitle: {
      fontSize: "11px",
      fontWeight: "bold",
      color: "#fff",
      background: "#1a3a52",
      padding: "3px 6px",
      marginBottom: "6px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    summary: {
      fontSize: "10px",
      lineHeight: 1.5,
      textAlign: "justify",
      color: "#333",
      marginBottom: "8px",
    },
    experienceItem: {
      marginBottom: "8px",
    },
    jobHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "2px",
    },
    jobTitle: {
      fontSize: "11px",
      fontWeight: "bold",
      color: "#1a3a52",
    },
    companyInfo: {
      fontSize: "10px",
      color: "#555",
    },
    duration: {
      fontSize: "10px",
      color: "#666",
      fontStyle: "italic",
    },
    jobDescription: {
      marginTop: "2px",
      fontSize: "10px",
      lineHeight: 1.4,
      textAlign: "justify",
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "8px",
      fontSize: "10px",
    },
    skillCategory: {
      background: "#f9f9f9",
      padding: "6px",
      borderLeft: "3px solid #1a3a52",
    },
    skillStrong: {
      color: "#1a3a52",
      display: "block",
      marginBottom: "2px",
    },
    projectItem: {
      marginBottom: "8px",
    },
    projectHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "1px",
    },
    projectTitle: {
      fontSize: "11px",
      fontWeight: "bold",
      color: "#1a3a52",
    },
    projectTech: {
      fontSize: "9px",
      color: "#1a3a52",
      fontWeight: "600",
      marginBottom: "2px",
    },
    downloadBtn: {
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#1a3a52",
      color: "white",
      padding: "10px 18px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      transition: "all 0.3s ease",
      fontSize: "12px",
    },
  };

  return (
    <div style={styles.page}>
      <button
        style={styles.downloadBtn}
        onClick={() => window.print()}
        onMouseOver={(e) => (e.target.style.background = "#0f2538")}
        onMouseOut={(e) => (e.target.style.background = "#1a3a52")}
      >
        📄 Download PDF
      </button>

      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <div style={styles.name}>RAHIL SAIYED</div>
          <div style={styles.contact}>
            Email: rahilcloud08@gmail.com | Phone: +91 9265825711 | Ahmedabad, Gujarat
            <br />
            <a href="https://portfolio-pnwf.onrender.com/" style={styles.contactLink}>
              Portfolio
            </a>{" "}
            |{" "}
            <a href="https://www.linkedin.com/in/rahil-saiyed-8541b42a0/" style={styles.contactLink}>
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com/rahilsaiyed1711" style={styles.contactLink}>
              GitHub
            </a>
          </div>
        </div>

        {/* SUMMARY */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Professional Summary</div>
          <div style={styles.summary}>
            Results-driven Software Engineer with professional experience in building scalable REST APIs and
            microservices. Proficient in Node.js, Express.js, MongoDB, React.js and MySQL with expertise in API
            Integration, API Development, Database Design and Backend Development. Proven ability to deliver
            production-grade backend solutions that improve performance and meet business objectives in fast-paced,
            Agile environments.
          </div>
        </div>

        {/* EXPERIENCE */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Professional Experience</div>

          <div style={styles.experienceItem}>
            <div style={styles.jobHeader}>
              <div style={styles.jobTitle}>Software Engineer</div>
              <div style={styles.duration}>Sep 2025 - Present</div>
            </div>
            <div style={styles.companyInfo}>Perception System, Ahmedabad, India</div>
            <div style={styles.jobDescription}>
              Developed and deployed scalable web applications using React.js, Node.js, GraphQL, AWS Amplify, and
              DynamoDB. Built secure, high-performance APIs and optimized cloud-based solutions leveraging AWS services.
              Collaborated in Agile environment using CodeCommit for CI/CD and version control to ensure seamless
              delivery of full-stack solutions.
            </div>
          </div>

          <div style={styles.experienceItem}>
            <div style={styles.jobHeader}>
              <div style={styles.jobTitle}>Jr. Backend Developer (Node.js)</div>
              <div style={styles.duration}>Feb 2024 - Sep 2025</div>
            </div>
            <div style={styles.companyInfo}>Mayora Infotech, Ahmedabad, India</div>
            <div style={styles.jobDescription}>
              Engineered and optimized 35+ production-grade REST APIs using Node.js, Express.js, MongoDB, and MySQL with
              JWT authentication and role-based access control. Enhanced performance through advanced database design,
              indexing, and query optimization. Implemented CI/CD pipelines with GitLab and leveraged Cloudinary and
              MongoDB Atlas for scalable infrastructure.
            </div>
          </div>

          <div style={styles.experienceItem}>
            <div style={styles.jobHeader}>
              <div style={styles.jobTitle}>Software Developer Intern</div>
              <div style={styles.duration}>Jun 2024 - Aug 2024</div>
            </div>
            <div style={styles.companyInfo}>Adani Green Energy Ltd., Shantigram, Gandhinagar</div>
            <div style={styles.jobDescription}>
              Developed solar asset data management platform using Node.js and Google BigQuery for processing large-scale
              renewable energy data. Implemented automated mailing functionality and optimized APIs for data retrieval
              by plant location and performance metrics.
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Technical Skills</div>
          <div style={styles.skillsGrid}>
            <div style={styles.skillCategory}>
              <strong style={styles.skillStrong}>Backend:</strong> Node.js, Express.js, TypeScript, REST APIs, GraphQL
              APIs, Microservices
            </div>
            <div style={styles.skillCategory}>
              <strong style={styles.skillStrong}>Databases:</strong> MongoDB, MySQL, Mongoose, Database Optimization,
              Indexing
            </div>
            <div style={styles.skillCategory}>
              <strong style={styles.skillStrong}>Cloud & DevOps:</strong> Git, GitLab, CI/CD, CodeCommit, Render,
              Cloudinary, MongoDB Atlas
            </div>
            <div style={styles.skillCategory}>
              <strong style={styles.skillStrong}>AWS & Advanced:</strong> DynamoDB, Cognito, S3, EC2
            </div>
            <div style={styles.skillCategory}>
              <strong style={styles.skillStrong}>Testing & Tools:</strong> Postman, JWT, Jest, API Documentation
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Key Projects</div>

          <div style={styles.projectItem}>
            <div style={styles.projectHeader}>
              <div style={styles.projectTitle}>World School - Native American Learning Platform</div>
              <div style={styles.duration}>Mar 2025</div>
            </div>
            <div style={styles.projectTech}>
              Node.js | Express.js | MongoDB | JWT | Geolocation APIs | Multer | React.js
            </div>
            <div style={styles.jobDescription}>
              Built scalable backend APIs with JWT authentication and multi-role access control for educators, students,
              and administrators. Developed geolocation-based friend suggestion system converting zip codes to
              geographic coordinates for proximity matching. Implemented modular monolith architecture managing user
              authentication, content delivery, file uploads, and real-time notifications. Optimized database queries
              using aggregation pipelines for performance. Deployed on Render with MongoDB Atlas for production-grade
              reliability serving hundreds of concurrent users.
            </div>
          </div>

          <div style={styles.projectItem}>
            <div style={styles.projectHeader}>
              <div style={styles.projectTitle}>Rangvastra - Studio Management System</div>
              <div style={styles.duration}>Mar 2025</div>
            </div>
            <div style={styles.projectTech}>
              Node.js | Express.js | MongoDB | REST APIs | JWT | Role-based Access
            </div>
            <div style={styles.jobDescription}>
              Delivered comprehensive backend system with 31+ secure REST APIs managing studio operations across
              inventory, technicians, admins, and user modules. Implemented MVC architecture with robust middleware for
              request validation, error handling, and role-based access control. Optimized database performance through
              strategic indexing and lean payload responses. Integrated file handling for studio documentation and image
              management. Built admin dashboards with real-time reporting and analytics for operational insights and
              decision-making.
            </div>
          </div>

          <div style={styles.projectItem}>
            <div style={styles.projectHeader}>
              <div style={styles.projectTitle}>Monitor Mate - Employee Management Platform</div>
              <div style={styles.duration}>Mar 2025</div>
            </div>
            <div style={styles.projectTech}>
              Node.js | Express.js | MongoDB | Real-time APIs | Cloudinary | GraphQL
            </div>
            <div style={styles.jobDescription}>
              Developed comprehensive full-stack employee monitoring and management platform with real-time activity
              tracking and productivity analytics. Implemented secure file upload and management using Cloudinary with
              efficient deletion workflows. Built role-based access control for managers, employees, and administrators.
              Integrated attendance tracking system using polling methods for real-time updates. Designed GraphQL APIs
              for optimized data querying reducing payload sizes. Created comprehensive audit logs and performance
              reports for HR analytics and employee development tracking.
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Education</div>
          <div style={styles.experienceItem}>
            <div style={styles.jobHeader}>
              <div style={styles.jobTitle}>Bachelor of Engineering in Information Technology</div>
              <div style={styles.duration}>2021 - 2025</div>
            </div>
            <div style={styles.companyInfo}>
              Gujarat Technological University, Ahmedabad, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
