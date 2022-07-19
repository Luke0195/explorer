// Dashboard protocols
export interface DataInterface {
  login: string
  avatar_url: string
  name: string
}

// Main component Protocols
export interface RepositoryData{
  full_name: string,
  owner:{
    avatar_url: string,
    login: string
  }
  description: string
}
