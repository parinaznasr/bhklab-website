import {AvatarGroup} from "primereact/avatargroup";
import {Link} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import React from "react";

const GroupAvatar = (props) => {
    const {members} = props;
    return (
        <div className="flex px-3 grid col-12" style={{ cursor: 'pointer' }}>
            {
                members && members.map((member, index) => {
                    return (
                        <Link to={{
                            pathname: member.name ==="Benjamin Haibe-Kains"?
                                '/people' :
                                `/people/${member.name.toLowerCase().replaceAll(" ","_")}`,
                            param: { member: member}
                        }}
                              key={index}
                        >
                            <Avatar key={index} alt={`images/people/${member.name}`} src={`images/people/${member.image}`} />
                        </Link>
                    )
                })}
        </div>
    )
}

export default GroupAvatar;
