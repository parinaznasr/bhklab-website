import React, {useEffect, useState,  useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import sortBy from "lodash/sortBy";
import colors from "../../../../styles/colors";


const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
    const [data, setData] = useState([]);
    const [ready, setReady] = useState(false);
    const [maxValue, setMaxValue] = useState(0);
    useEffect(() => {
        const initialize = () => {
            csv("/data.csv").then((countries) => {
                const sortedCountries = sortBy(countries, (o) => -o.population);
                setMaxValue(sortedCountries[0].population);
                setData(sortedCountries);
                setReady(true);
            });
        }
        initialize();
    }, []);

    const popScale = useMemo(
        () => scaleLinear().domain([0, maxValue]).range([0, 24]),
        [maxValue]
    );

    return (
        ready &&
        <ComposableMap projectionConfig={{ rotate: [-10, 0, 0] }}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} fill="#DDD" />
                    ))
                }
            </Geographies>
            {
                data.map(({ city_code,lat, lng ,population }) => {
                return (
                    <Marker key={city_code} coordinates={[lng,lat]}>
                        <circle fill={colors.blue_footer} stroke="#FFF" r={popScale(population)} />
                    </Marker>
                );
                })
            }
        </ComposableMap>
        // <ComposableMap>
        //     <Geographies geography="/geography.json">
        //         {({ geographies }) =>
        //             geographies.map((geo) => (
        //                 <Geography key={geo.rsmKey} geography={geo} />
        //             ))
        //         }
        //     </Geographies>
        // </ComposableMap>
    );
};

const Container = styled.div`
  body {
    margin: 0;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
  }

  path {
    fill: ${colors.header_deep_blue};
  }
`;


const CollaborationMap = () => {
    return(
        <Container>
            <MapChart />
        </Container>
    );
}

export default CollaborationMap;
