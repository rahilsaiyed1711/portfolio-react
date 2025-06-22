import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Projectdetails.css'
const Projectdetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`https://portfolio-backend-production.onrender.com/api/project/getProjects/${id}`);
        const result = await res.json();
        if (result.status) {
          setProject(result.data);
        } else {
          console.error('Project not found');
        }
      } catch (err) {
        console.error('Error fetching project details:', err);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className='project-details'>
      <h1>{project.projectName}</h1>
      <img src={project.image} alt={project.projectName} />
      <p>{project.projectDescription}</p>
      <a href={project.link} target='_blank' rel='noreferrer'>Visit Live Project</a>
    </div>
  );
};

export default Projectdetails;
