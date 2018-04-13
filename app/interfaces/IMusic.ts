export interface OpensearchQuery {
    text: string;
    role: string;
    searchTerms: string;
    startPage: string;
}

export interface Image {
    text: string;
    size: string;
}

export interface Artist {
    name: string;
    listeners: string;
    mbid: string;
    url: string;
    streamable: string;
    image: Image[];
}

export interface Artistmatches {
    artist: Artist[];
}

export interface Attr {
    for: string;
}

export interface Results {
    Query: OpensearchQuery;
    
    totalResults: string;
    startIndex: string;
    itemsPerPage: string;
    artistmatches: Artistmatches;
    attr: Attr;
}

export interface RootObject {
    results: Results;
}
