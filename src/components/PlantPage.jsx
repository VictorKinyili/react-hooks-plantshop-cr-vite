import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  // Fetch all plants from the backend on initial mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
