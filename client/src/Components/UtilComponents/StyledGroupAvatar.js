import {AvatarGroup} from "primereact/avatargroup";
import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";
import React from "react";

const StyledGroupAvatar = (props) => {
    const {members} = props;
    return (
        <div className="flex px-3 grid col-12" style={{ cursor: 'pointer' }}>
            <AvatarGroup >
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
                                <Avatar
                                    key={index}
                                    image={`images/people/${member.image}`}
                                    onImageError={(e) => e.target.src ='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                    size="large"
                                    shape="circle"
                                    style={{ objectFit: 'fill' }}
                                    tooltip={member.name}
                                    label={member.name}
                                ></Avatar>
                            </Link>
                        )
                    })}
            </AvatarGroup>
        </div>
    )
}

export default StyledGroupAvatar;
