export interface BerryResponse {
    body: {
        flavors: [{
            flavor: { name: string; url: string;};
            potency: number;
        }];
        name: string;
    }
}

export interface BerryFlavorResponse {
    body: {
        id: number,
        name: string,
        berries: [
            {
                potency: number,
                berry: {
                    name: string,
                    url: string
                }
            }
        ],
        contest_type: {
            name: string,
            url: string
        },
        names: [
            {
                name: string,
                language: {
                    name: string,
                    url: string
                }
            }
        ]
    }
}
