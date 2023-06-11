import React from 'react'
import styled from 'styled-components';
import Nav from '../Nav';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const WelcomeMessage = styled.h1`
  font-size: 1.5rem;
  color: #212529;
`;


const DashboardHeader = ({ userName, profilePicture }) => {
  return (
    <HeaderContainer>
      <WelcomeMessage>Welcome, {userName}!</WelcomeMessage>
    </HeaderContainer>
  );
};

const CardContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CourseDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CourseDescription = styled.p`
  font-size: 0.9rem;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const Explore = styled.a`
color: ${props => props.theme.text};
cursor: pointer;
align-self: flex-end;

&::after {
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after {
  width: 100%;
}
`;

const CourseCard = ({ course }) => {
  return (
    <CardContainer>
      <CourseImage src={course.image} alt={course.title} />
      <CourseDetails>
        <CourseTitle>{course.title}</CourseTitle>
        <CourseDescription>{course.description}</CourseDescription>
        <Explore>Explore {'>'}</Explore>
      </CourseDetails>
    </CardContainer>
  );
};


const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 1rem 2rem;
`;

const courses = [
  {
    id: 1,
    title: 'Course 1',
    description: 'A brief description of Course 1.',
    image: 'https://picsum.photos/id/1/250/150', // Replace with your course image
  },
  {
    id: 2,
    title: 'Course 2',
    description: 'A brief description of Course 2.',
    image: 'https://via.placeholder.com/250x150', // Replace with your course image
  },
  {
    id: 3,
    title: 'Course 1',
    description: 'A brief description of Course 1.',
    image: 'https://via.placeholder.com/250x150', // Replace with your course image
  },
  {
    id: 4,
    title: 'Course 1',
    description: 'A brief description of Course 1.',
    image: 'https://via.placeholder.com/250x150', // Replace with your course image
  },
];

const recommendedCourses = [
  {
    id: 101,
    title: 'Recommended Course 1',
    description: 'A brief description of Recommended Course 1.',
    image: 'https://via.placeholder.com/250x150', // Replace with your course image
  },
  {
    id: 102,
    title: 'Recommended Course 2',
    description: 'A brief description of Recommended Course 2.',
    image: 'https://via.placeholder.com/250x150', // Replace with your course image
  },
  // Add more recommended courses as necessary
];

const RecommendedCoursesContainer = styled.div`
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
`;

const RecommendedCoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 1rem 2rem;
`;

const RecommendedCourses = ({ recommendedCourses }) => {
  return (
    <RecommendedCoursesContainer>
      <SectionTitle>Recommended Courses</SectionTitle>
      <RecommendedCoursesGrid>
        {recommendedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </RecommendedCoursesGrid>
    </RecommendedCoursesContainer>
  );
};



const Dashboard = () => {
  // Your existing userName and profilePicture variables
  const userName = 'John Doe';
  const profilePicture = 'https://via.placeholder.com/50x50'; // Replace with user's profile picture
  return (
    <DashboardContainer>
      <DashboardHeader userName={userName} profilePicture={profilePicture} />
      <CourseGrid>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </CourseGrid>
      <RecommendedCourses recommendedCourses={recommendedCourses} />
    </DashboardContainer>
  );
};




const HomePage = () => {
  return (
    <div>
      <Nav></Nav>
      <Dashboard />
    </div>
  )
}

export default HomePage
