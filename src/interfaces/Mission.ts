export default interface Mission {
  title: string;
  ingredients: string;
  kit: string;
  tip: string;
  participants: Record<string, string>;
  imageUrl: string;
}
