import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Work.css';
import tp from '../../assets/theme_pattern.svg';
import arr from '../../assets/arrow_icon.svg';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolio-backend-production.onrender.com/api/project/getProjects');
        const result = await response.json();
        if (result.status && Array.isArray(result.data)) {
          setProjects(result.data);
        } else {
          console.error('Unexpected response:', result);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div id='work' className='work'>
      <div className='work-title'>
        <h1>My Latest Work</h1>
        <img src={tp} alt='' />
      </div>
      <div className='work-container'>
        {projects.map((project) => (
          <div
            key={project._id}
            className='work-card'
            onClick={() => handleCardClick(project._id)} // ✅
          >
            <img src={project.image} alt={project.projectName} />
            <div className='work-info'>
            </div>
          </div>
        ))}
      </div>
      <div className='work-show-more'>
        <p>Show More</p>
        <img src={arr} alt='' />
      </div>
    </div>
  );
};

export default Work;
