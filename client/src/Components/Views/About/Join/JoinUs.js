import Layout from '../../../UtilComponents/Layout';
import positions from './positions.json';
import StyledPosition from "./PositionCard";

const JoinUs= () => {
    return(
        <Layout>
            {
                positions.map(item => {return(<StyledPosition position = {item}/>)})
            }
        </Layout>
    );
}

export default JoinUs;
