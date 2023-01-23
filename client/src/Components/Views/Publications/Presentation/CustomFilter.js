import CustomDropdown from "../../../UtilComponents/CustomDropdown";
import React from "react";
import styled from "styled-components";

const FilterElement = styled.div`
  display: flex;
  margin-right: 20px;
  width: 20%;
  align-items: flex-start;
  flex-direction: column;
  .label {
    font-size: 12px;
    margin-right: 10px;
  }
  .dropdown-pipelines {
    width: 250px;
  }
`;

const CustomFilter = (props) => {
    return(
        <>
            <span className="label">Filter by:</span>
            <CustomDropdown
                className="dropdown-presentations"
                value={"hello"}
                options={["BHK", "Minoru", "Sisira"]}
                onChange={(e) =>
                    console.log(e)
                    // setPipelineDropdown((prev) => ({
                    //     ...prev,
                    //     selected: e.value,
                    // }))
                }
                filter={true}
                placeholder="Presenter..."
            />
            <CustomDropdown
                className="dropdown-presentations"
                value={"Year"}
                options={["2022", "2023", "2021"]}
                onChange={(e) =>
                    console.log(e)
                    // setPipelineDropdown((prev) => ({
                    //     ...prev,
                    //     selected: e.value,
                    // }))
                }
                filter={true}
                placeholder="Year..."
            />
            <CustomDropdown
                className="dropdown-presentations"
                value={"hello"}
                options={["Slide", "Poster"]}
                onChange={(e) =>
                    console.log(e)
                    // setPipelineDropdown((prev) => ({
                    //     ...prev,
                    //     selected: e.value,
                    // }))
                }
                filter={true}
                placeholder="Format..."
            />
        </>
    )
}

export {
    CustomFilter,
    FilterElement
};
