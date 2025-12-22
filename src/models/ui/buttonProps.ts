interface ButtonProps {
  title: string;
  onPress: (() => void) | undefined;
  fullWidth?: boolean;
}

export type {ButtonProps};