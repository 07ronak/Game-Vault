import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  //const [selectedGenre, setSelectedGenre] = useState(null);
  //const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [gameQuery, setGameQuery] = useState({
    genre: "",
    platform: "",
  });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} padding={2} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...platform, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
