import Layout from '../../../Components/Utils/Layout';
import StyledPosition from "./PositionCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";

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
            <Container>
                {isLoading &&
                    positions.map((position, index) => (
                        <StyledPosition key={index} position={position} />
                    ))
                }
            </Container>
        </Layout>
    );
};

export default JoinUs;
