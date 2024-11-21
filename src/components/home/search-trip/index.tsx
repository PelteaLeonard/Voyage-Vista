import { InputAdornment } from "@mui/material";
import FlightTakeoff from "@mui/icons-material/FlightTakeoff";
import FlightLand from "@mui/icons-material/FlightLand";
import {
  DatesContainer,
  InnerContainer,
  InputField,
  LocationsContainer,
  MainContainer,
  PlaneIconWrapper,
  SearchButton,
  SearchContainer,
  Tab,
  Text,
  Divider,
  TabsContainer,
} from "./styles";
import { Attractions, Bed, Restaurant, Search } from "@mui/icons-material";
import { useState } from "react";

function SearchTrip() {
  const [activeTab, setActiveTab] = useState("hotels");

  const handleClickTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <MainContainer>
      <SearchContainer>
        <TabsContainer>
          <Tab
            active={activeTab === "hotels"}
            onClick={() => handleClickTab("hotels")}
          >
            <Bed />
            <Text>Hotels</Text>
          </Tab>
          <Tab
            active={activeTab === "attractions"}
            onClick={() => handleClickTab("attractions")}
          >
            <Attractions />
            <Text>Attractions</Text>
          </Tab>
          <Tab
            active={activeTab === "restaurants"}
            onClick={() => handleClickTab("restaurants")}
          >
            <Restaurant />
            <Text>Restaurants</Text>
          </Tab>
        </TabsContainer>
        <InnerContainer>
          <LocationsContainer>
            <InputField
              size="small"
              variant="outlined"
              placeholder="Leaving from..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FlightTakeoff />
                  </InputAdornment>
                ),
              }}
            />
            <Divider />
            <InputField
              size="small"
              variant="outlined"
              placeholder="Going to..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FlightLand />
                  </InputAdornment>
                ),
              }}
            />
            <PlaneIconWrapper></PlaneIconWrapper>
          </LocationsContainer>
          <DatesContainer>
            <InputField size="small" variant="outlined" type="date" />
            <Divider />
            <InputField size="small" variant="outlined" type="date" />
          </DatesContainer>
          <SearchButton size="small" variant="contained" startIcon={<Search/>}>
            Search
          </SearchButton>
        </InnerContainer>
      </SearchContainer>
    </MainContainer>
  );
}
export default SearchTrip;
