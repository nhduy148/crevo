export type Project = {
  id: string;
  title: string;
  short_description: string;
  tags: string[];
  thumbnail_url: string;
};

export type Service = {
  title: string;
  iconUrl: string;
  description: string;
};

export type TeamMember = {
  id: string;
  fullName: string;
  title: string;
  avatarUrl: string;
  socialNetworks: { platform: string; url: string }[];
};
