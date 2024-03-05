export interface loginData {
    email: string,
    password : string
}

export interface RegisterData {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

export interface User {
  id : number,
  name: string,
  email: string,
  email_verified_at? : Date,
  two_factor_secret? : string ,
  two_factor_recovery_codes? : number,
  two_factor_confirmed_at? : Date 
  created_at : Date,
  updated_at : Date
}

// export interface Link {
//     id: number,
//     created_at: Date,
//     updated_at: Date,
//     short_link : string,
//     full_link: string,
//     user_id : number,
//     views: number
// }

export interface RawLink {
  id: number;
  short_link: string;
  full_link: string;
  views: number;
  created_at: string;
  updated_at: string;
}

export interface Link extends Omit<RawLink, "created_at" | "updated_at"> {
  created_at: Date;
  updated_at: Date;
}

export interface ErrorResponse {
    message : string,
    errors: Record<string,string[]>
}

// export interface PaginateResponse<T> {
//     current_number : number,
//     data : T[],
//     first_page_url: string | null,
//     from: number,
//     last_page: number,
//     last_page_url: string | null,
//     links:{
//         url: string | null,
//         label: string,
//         active: boolean
//     },
//     next_page_url: string | null,
//     path: string,
//     per_page: number,
//     prev_page_url: string | null,
//     to: number,
//     total: number
// }

export interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string | null;
    from: number;
    last_page: number;
    last_page_url: string | null;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }
