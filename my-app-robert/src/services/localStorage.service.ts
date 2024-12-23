const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + "/avatars/avatar5.webp";

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
  email: {
    name: string;
    verified: boolean;
  };
  phone: {
    number: string;
    verified: boolean;
  };
  sex: "male" | "female";
  birthday: string;
  lang: "en" | "de";
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipcode: number;
  website?: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const testUser = {
  id: 1,
  firstName: "Chris",
  lastName: "Johnson",
  imgUrl: avatarImg,
  userName: "@john1989",
  email: {
    name: "chris.johnson@altence.com",
    verified: true,
  },
  phone: {
    number: "+18143519459",
    verified: false,
  },
  sex: "male",
  birthday: "01/26/2022",
  lang: "en",
  country: "GB",
  city: "London",
  address1: "14 London Road",
  zipcode: 5211,
  website: "altence.com",
  socials: {
    twitter: "@altence_team",
    facebook: "https://facebook.com/groups/1076577369582221",
    linkedin: "https://linkedin.com/company/altence",
  },
};

export const persistToken = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const readToken = (): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken") || "bearerToken";
  }
  return "bearerToken";
};

export const persistUser = (user: string): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const readUser = (): string | undefined => {
  const userStr = localStorage.getItem("user");

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem("accessToken");
export const deleteUser = (): void => localStorage.removeItem("user");
