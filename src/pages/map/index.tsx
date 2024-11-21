import { GoogleMap, Libraries, useJsApiLoader } from "@react-google-maps/api";
import { Aside, GoogleMapWrapper, Main } from "./styles";

// aici trebuie ca in MainContainer sa bagi un Aside (adica sidebar) si un GoogleMapWrapper in care sa bagi GoogleMap

const libraries: Libraries = ["places"];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    libraries: libraries,
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  return (
    <Main>
      <Aside></Aside>
      <GoogleMapWrapper>
        <GoogleMap />
      </GoogleMapWrapper>
    </Main>
  );
}
export default Map;