import styled from 'styled-components';
import React from 'react';

const StyledMember = styled.div`
  .LabMember {
    display: flex;
    flex-direction: row;
    margin-vertical: 10px;
    padding-horizontal: 20;
  }

  .LabMember-photo {
    width: 280px;
    height: 320px;
    borderRadius: 10;
    object-fit: cover;
  }

  .LabMember-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }

  .LabMember-name {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .LabMember-title {
    font-style: italic;
    color: #999;
    margin-bottom: 20px;
  }

  .LabMember-bio {
    text-align: justify;
    color: '#333';
  }
`

const MemberCard = (props) => {
    return (
        <StyledMember className="LabMember">
            <img src={props.photo} alt={props.name} className="LabMember-photo"/>
            <div className="LabMember-info">
                <h3 className="LabMember-name">{props.name}</h3>
                <h2 className="LabMember-title">{props.title}</h2>
                <p className="LabMember-bio">{props.bio}</p>
            </div>
        </StyledMember>
    );
};

export default MemberCard;
