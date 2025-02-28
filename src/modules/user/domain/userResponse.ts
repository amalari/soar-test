export interface UserResponse {
  id: number
  fullname: string
  username: string
  email: string
  password: string
  birthDate: string
  presentAddress: string
  permanentAddress: string
  city: string
  postalCode: string
  country: string
  profilePicture?: string
}