export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type RegisterFormErrors = Partial<Record<keyof RegisterFormValues, string>>;

export type RegisterFormDTO = Omit<RegisterFormValues, 'repeatPassword'>;
