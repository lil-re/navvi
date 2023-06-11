export interface User {
  id: string
  name: string
  email?: string
  website?: string
}

export interface Post {
  id: string
  title: string
  user: User
}
