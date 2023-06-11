import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContextValue } from '../context/Context';


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
`;

const ProfileDetail = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
`;


const ProfilePage = ({ onClose }) => {

    const [state, dispatch] = ContextValue();
    let userInfo = state.userInfo;
    let user = state.user;

    const profile = {
        email: user.email,
        fullName: user.fullName,
        imgUrl: "https://picsum.photos/id/1/200/250"
    }

    const author = {
        author: userInfo.author
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.profile-card')) {
                onClose();
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [onClose]);

    return (
        <Section>
            <ProfileCard>
                <ProfileImage src={profile.imgUrl} style={{ marginBottom: '20px' }} alt="Profile" />
                <SectionTitle>Full Name</SectionTitle>
                <ProfileDetail>{profile.fullName}</ProfileDetail>
                <SectionTitle>Email</SectionTitle>
                <ProfileDetail>{profile.email}</ProfileDetail>
                <SectionTitle>Profile Type</SectionTitle>
                <ProfileDetail>{author.author}</ProfileDetail>

            </ProfileCard>
        </Section>
    );
};

export default ProfilePage;

