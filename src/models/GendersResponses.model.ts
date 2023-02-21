export interface GendersResponse {
  body: {
    id: number;
    name: string;
    pokemon_species_details: [
      {
        rate: number;
        pokemon_species: {
          name: string;
          url: string;
        };
      }
    ];
    required_for_evolution: [
      {
        name: string;
        url: string;
      }
    ];
  };
}
