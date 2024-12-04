export type User = {  
  id: number;  
  name: string;  
  email: string;  
  age: number;  
}

export type MainPageProps = {
  searchButtonLabel?: string
  pageTitle?: string
}

export type DetailsPageProps = {
  breadcrumbLabel?: string
  pageTitle?: string
}

export type UserTableProps = {
  users: User[];  
  onUserClick: (id: number) => void;  
};  

export type SearchButtonProps = {
  children: string | JSX.Element
  handleClick: () => void
}

export type SearchBarProps = {
  searchTerm: string
  handleChange: (searchTerm: string) => void
  placeholder?: string
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}