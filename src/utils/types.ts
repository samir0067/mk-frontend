export type CreatedBy = {
  firstName: string;
  lastName: string;
};

export type Contributor = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Format = {
  width: number;
  height: number;
};

export type Creative = {
  id: string;
  createdBy: CreatedBy;
  contributors: Contributor[];
  lastModified: Date;
  enabled: boolean;
  title: string;
  description?: string;
  content?: string;
  formats: Format[];
};
