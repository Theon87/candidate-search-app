// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number;
    name: string;
    username: string;
    avatar_url: string;
    html_url: string;
    location: string;
    email: string;
    company: string;
    bio: string;
    hireable: boolean;
    login: string;
}

export default Candidate;
