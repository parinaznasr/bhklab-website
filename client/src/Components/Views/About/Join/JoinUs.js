import Layout from '../../../UtilComponents/Layout';
import positions from './positions.json';
import StyledPosition from "./PositionCard";

const JoinUs= () => {
    return(
        <Layout>
            {
                positions.map((item, index)=>
                {
                    return(<StyledPosition key={index} position = {item}/>)
                })
            }
        </Layout>
    );
}

export default JoinUs;
