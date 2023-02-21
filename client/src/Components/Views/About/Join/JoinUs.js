import Layout from '../../../UtilComponents/Layout';
import StyledPosition from "./PositionCard";
import { useEffect, useState } from "react";
import axios from "axios";

const JoinUs = () => {
    const [isLoading, setLoading] = useState(false);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const fetchPositions = async () => {
            setLoading(true);
            const { data } = await axios.get("/api/data/positions");
            setPositions(data.positions);
            setLoading(false);
        };
        fetchPositions();
    }, []);

    return (
        <Layout>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                positions.map((position, index) => (
                    <StyledPosition key={index} position={position} />
                ))
            )}
        </Layout>
    );
};

export default JoinUs;
