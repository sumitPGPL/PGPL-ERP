// types/user.ts
export interface User {
  username: string
  password: string
  role: string
  email: string
  phone?: string | number | null
}
