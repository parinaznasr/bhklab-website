import Layout from '../../../UtilComponents/Layout';
import React from 'react';
import equipments from './equipments.json';
import {Container, StyledPage, StyledCard} from '../../../../styles/StyledPage';
import pmcrt from './images/pmcrt.png';


const Equipments= () => {
    return(
        <Layout>
            <Container>
                <StyledPage className="static">
                    {
                        equipments.length?
                            equipments.map( (item, index)=> {
                                return (
                                    <StyledCard key={index}>
                                        {
                                            item.image? <img src={pmcrt}/> :
                                        <div>
                                            <div className="subject">{item.title}</div>
                                            {
                                                item.description? <div className="content">{item.description}</div>: ''
                                            }
                                            {
                                                item.items?
                                                    item.items.map((equipment, ind) => {
                                                        return (
                                                            <React.Fragment key={ind}>
                                                                <div className="subtitle" >
                                                                    <a href={equipment.link} target="_blank">
                                                                        {equipment.subject}
                                                                    </a>
                                                                    </div>
                                                                <div className="content">{equipment.text}</div>
                                                            </React.Fragment>
                                                            )
                                                    }) : ''
                                            }
                                        </div>
                                                }
                                    </StyledCard>)
                            }):''
                    }
                </StyledPage>
            </Container>
        </Layout>
    );
}

export default Equipments;
